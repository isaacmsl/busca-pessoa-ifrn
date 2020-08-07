const SERVIDORES_BASEURL = 'https://dados.ifrn.edu.br/api/action/datastore_search?resource_id=9adf1491-9e7c-4950-ab02-d3e12af37ec2&q='

const ALUNOS_BASEURL = 'https://dados.ifrn.edu.br/api/action/datastore_search?resource_id=1b4b2637-08d0-443a-a807-d35719185f59&q='
 
const DadosIFRN = () => {
    const xhttp = new XMLHttpRequest()

    function getServidores(nome) {
        const fullUrl = SERVIDORES_BASEURL + nome
        return requestUrl(fullUrl)
    }
    
    function getAlunos(nome) {
        const fullUrl = ALUNOS_BASEURL + nome
        return requestUrl(fullUrl)
    }

    function requestUrl(url) {
        return new Promise((resolve, reject) => {
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    resolve(JSON.parse(this.responseText).result.records)
                } else if (this.readyState == 4) {
                    reject({ status: this.status })
                }
            }

            xhttp.open('GET', url)
            xhttp.send()
        })
        
        
    }

    return {
        getServidores,
        getAlunos
    }
}