"use strict";var inputCep=document.querySelector(".cepInput"),btnBuscarCep=document.querySelector(".btnCep"),cep=document.querySelector(".cep"),logradouro=document.querySelector(".logradouro"),complemento=document.querySelector(".complemento"),bairro=document.querySelector(".bairro"),localidade=document.querySelector(".localidade"),uf=document.querySelector(".uf"),ps=document.querySelectorAll(".divCep p");function buscarCep(){if(8===inputCep.value.length){var e=new XMLHttpRequest;e.onload=function(){200===this.status&&4===this.readyState&&showEndereco(JSON.parse(this.responseText))},e.open("GET","https://viacep.com.br/ws/".concat(inputCep.value,"/json/"),!0),e.send()}}function showEndereco(e){ps.forEach(function(e){e.innerHTML=""}),cep.innerHTML=e.cep,logradouro.innerHTML=e.logradouro,complemento.innerHTML=e.complemento,bairro.innerHTML=e.bairro,localidade.innerHTML=e.localidade,uf.innerHTML=e.uf}inputCep.addEventListener("keyup",buscarCep),btnBuscarCep.addEventListener("click",buscarCep);var bitCoin=document.querySelector(".bitCoinReal"),xhrBitcoin=new XMLHttpRequest;function showPrecoBitCoin(e){bitCoin.innerHTML="".concat(e.BRL.symbol," ").concat(e.BRL.buy).replace(".",",")}xhrBitcoin.onload=function(){200===this.status&&4===this.readyState&&showPrecoBitCoin(JSON.parse(this.responseText))},xhrBitcoin.open("GET","https://blockchain.info/ticker",!0),xhrBitcoin.send(),setInterval(function(){xhrBitcoin.onload=function(){200===this.status&&4===this.readyState&&showPrecoBitCoin(JSON.parse(this.responseText))},xhrBitcoin.open("GET","https://blockchain.info/ticker",!0),xhrBitcoin.send()},3e4);var piada=document.querySelector(".piada"),btnPiada=document.querySelector(".btn-piada"),xhrChuck=new XMLHttpRequest;function buscarPiada(){xhrChuck.onload=function(){200===this.status&&4===this.readyState&&showPiada(JSON.parse(this.responseText))},xhrChuck.open("GET","https://api.chucknorris.io/jokes/random",!0),xhrChuck.send()}function showPiada(e){piada.innerHTML='"'.concat(e.value,'"')}buscarPiada(),btnPiada.addEventListener("click",buscarPiada);