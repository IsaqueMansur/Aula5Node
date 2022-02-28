const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');

const escreve = require('./modules/escrever');

const pessoas = [
    {nome: 'Isaque', idade: 21},
    {nome: 'José', idade: 56},
    {nome: 'Pedro', idade: 14}
];
const json = JSON.stringify(pessoas, '', 2);

escreve(caminhoArquivo, json) //função que veio do require - LINE: 4

const ler = require('./modules/ler'); 

async function lerArquivo(caminho) {
    const dados = await ler(caminho); //função que veio do require - LINE: 15
    renderizaDadosJs(dados)
}

function renderizaDadosJs(dados){
    dados = JSON.parse(dados);
    let somatoriaIdades = 0
    for (let i in dados) {
        console.log(`${dados[i].nome} possui ${dados[i].idade} anos.`)
        somatoriaIdades += dados[i].idade;
    }
    console.log(`Somatória das idades: ${somatoriaIdades} anos.`);
}

lerArquivo(caminhoArquivo);