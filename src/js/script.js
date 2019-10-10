// // Retorne o url da página atual utilizando o objeto window

// let url = window.location.href;
// console.log(url);

// // Seleciona o primeiro elemento da página que
// // possua a classe ativo

// const h1_primeiro = document.querySelector('.ativo');

// // Retorne a linguagem do navegador

// let lang = window.navigator.language;
// console.log(lang);

// // Retorne a largura da janela 

// let width = window.innerWidth;
// console.log(width);



// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima


// CEP
const inputCep = document.querySelector('.cepInput');
const btnBuscarCep = document.querySelector('.btnCep');

const cep = document.querySelector('.cep');
const logradouro = document.querySelector('.logradouro');
const complemento = document.querySelector('.complemento');
const bairro = document.querySelector('.bairro');
const localidade = document.querySelector('.localidade');
const uf = document.querySelector('.uf');
const ps = document.querySelectorAll('.divCep p');


function buscarCep(){
    if(inputCep.value.length === 8){
        const xhrCep = new XMLHttpRequest;
        xhrCep.onload = function(){
            if(this.status === 200 && this.readyState === 4){
                const response = JSON.parse(this.responseText);
                showEndereco(response);
            };
        };
        xhrCep.open('GET', `https://viacep.com.br/ws/${inputCep.value}/json/`, true);
        xhrCep.send();
    };

    // fetch(`https://viacep.com.br/ws/${inputCep.value}/json/`)
    // .then(response => response.json())
    // .then(response => showEndereco(response));
};

function showEndereco(response){
    ps.forEach(p =>{
        p.innerHTML = '';
    });
    cep.innerHTML = response.cep;
    logradouro.innerHTML = response.logradouro;
    complemento.innerHTML = response.complemento;
    bairro.innerHTML = response.bairro;
    localidade.innerHTML = response.localidade;
    uf.innerHTML = response.uf;
};

inputCep.addEventListener('keyup', buscarCep);
btnBuscarCep.addEventListener('click', buscarCep);



 
// BITCOIN
const bitCoin = document.querySelector('.bitCoinReal');

const xhrBitcoin = new XMLHttpRequest();
xhrBitcoin.onload = function(){
    if(this.status === 200 && this.readyState === 4){
        let result = JSON.parse(this.responseText);
        showPrecoBitCoin(result);
    };
};
xhrBitcoin.open('GET', 'https://blockchain.info/ticker', true);
xhrBitcoin.send();

setInterval(function(){
    xhrBitcoin.onload = function(){
        if(this.status === 200 && this.readyState === 4){
            let result = JSON.parse(this.responseText);
            showPrecoBitCoin(result);
        }
    }
    xhrBitcoin.open('GET', 'https://blockchain.info/ticker', true);
    xhrBitcoin.send();
}, 30000);

function showPrecoBitCoin(result){
    bitCoin.innerHTML = `${result.BRL.symbol} ${result.BRL.buy}`.replace('.', ',');
};

// fetch('https://blockchain.info/ticker')
// .then(result => result.json())
// .then(result => showPrecoBitCoin(result));




// CHUCKNORRIS
const piada = document.querySelector('.piada');
const btnPiada = document.querySelector('.btn-piada');

const xhrChuck = new XMLHttpRequest();
function buscarPiada(){
    xhrChuck.onload = function(){
        if(this.status === 200 && this.readyState === 4){
            const resultado = JSON.parse(this.responseText);
            showPiada(resultado);
        };
    };
    xhrChuck.open('GET', 'https://api.chucknorris.io/jokes/random', true);
    xhrChuck.send();

    // fetch('https://api.chucknorris.io/jokes/random')
    // .then(resultado => resultado.json())
    // .then(resultado => showPiada(resultado));
};
buscarPiada();

// fetch('https://api.chucknorris.io/jokes/random')
// .then(resultado => resultado.json())
// .then(resultado => showPiada(resultado));

function showPiada(resultado){
    piada.innerHTML = `"${resultado.value}"`
};

btnPiada.addEventListener('click', buscarPiada);