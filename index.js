const dadosIfrn = DadosIFRN()

const inputNome = document.querySelector('input')
const selectTipo = document.querySelector('select')
const listRecords = document.querySelector('ul')

let tipoAtual = selectTipo.value
let nomeAtual = ''

const getters = {
    Alunos: () => { 
        const promiseAlunos = dadosIfrn.getAlunos(nomeAtual)
        promiseAlunos.then(listarRecords)
    },
    Servidores: () => { 
        const promiseServidores = dadosIfrn.getServidores(nomeAtual)
        promiseServidores.then(listarRecords)
    }
}


selectTipo.addEventListener('change', () => {
    tipoAtual = selectTipo.value

    if(nomeAtual.length > 0) {
        getters[tipoAtual]()
    }
})

inputNome.addEventListener('input', () => {
    nomeAtual = inputNome.value.trim()

    if(nomeAtual.length > 0) {
        getters[tipoAtual]()
    }
})

function listarRecords(records) {
    listRecords.innerHTML = ''
    records.forEach(record => {
        const li = document.createElement('li')
        li.innerHTML = record.nome

        listRecords.appendChild(li)
    })
}