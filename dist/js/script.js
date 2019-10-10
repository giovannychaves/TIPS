"use strict";

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

var inputCep = document.querySelector('.cepInput');
var btnBuscarCep = document.querySelector('.btnCep');
var cep = document.querySelector('.cep');
var logradouro = document.querySelector('.logradouro');
var complemento = document.querySelector('.complemento');
var bairro = document.querySelector('.bairro');
var localidade = document.querySelector('.localidade');
var uf = document.querySelector('.uf');
var ps = document.querySelectorAll('.divCep p');

function buscarCep() {
  fetch("https://viacep.com.br/ws/".concat(inputCep.value, "/json/")).then(function (response) {
    return response.json();
  }).then(function (response) {
    return showEndereco(response);
  });
}

function showEndereco(response) {
  ps.forEach(function (p) {
    p.innerHTML = '';
  });
  cep.innerHTML = response.cep;
  logradouro.innerHTML = response.logradouro;
  complemento.innerHTML = response.complemento;
  bairro.innerHTML = response.bairro;
  localidade.innerHTML = response.localidade;
  uf.innerHTML = response.uf;
}

;
inputCep.addEventListener('keyup', buscarCep);
btnBuscarCep.addEventListener('click', buscarCep); // BITCOIN

var bitCoin = document.querySelector('.bitCoinReal');
fetch('https://blockchain.info/ticker').then(function (result) {
  return result.json();
}).then(function (result) {
  return showPrecoBitCoin(result);
}); // setInterval(()=>{
//     fetch('https://blockchain.info/ticker')
//     .then(result => result.json())
//     .then(result => showPrecoBitCoin(result));
// }, 30000);

function showPrecoBitCoin(result) {
  bitCoin.innerHTML = "".concat(result.BRL.symbol, " ").concat(result.BRL.buy).replace('.', ',');
}

; // CHUCKNORRIS

var piada = document.querySelector('.piada');
var btnPiada = document.querySelector('.btn-piada');
fetch('https://api.chucknorris.io/jokes/random').then(function (resultado) {
  return resultado.json();
}).then(function (resultado) {
  return showPiada(resultado);
});

function showPiada(resultado) {
  piada.innerHTML = "\"".concat(resultado.value, "\"");
}

;

function buscarPiada() {
  fetch('https://api.chucknorris.io/jokes/random').then(function (resultado) {
    return resultado.json();
  }).then(function (resultado) {
    return showPiada(resultado);
  });
}

;
btnPiada.addEventListener('click', buscarPiada);