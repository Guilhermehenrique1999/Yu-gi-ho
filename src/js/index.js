
const btnAvancar = document.getElementById("btn-avancar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

btnAvancar.addEventListener("click", function () {
    
    // Verifica se ainda há cartões para avançar
    if (cartaoAtual === cartoes.length - 1) return;


    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");

    cartaoAtual++;
    cartoes[cartaoAtual].classList.add("selecionado");
});

const btnVoltar = document.getElementById("btn-voltar");

btnVoltar.addEventListener("click", function () {
    
    // Verifica se ainda há cartões para avançar
    if (cartaoAtual === 0) return;


    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");

    cartaoAtual--;
    cartoes[cartaoAtual].classList.add("selecionado");
});
