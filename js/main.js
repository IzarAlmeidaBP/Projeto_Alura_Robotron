const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica");


const maxForca = 41;
const maxBlindagem = 41;
const maxNucleos = 48;
const maxPernas = 42;
const maxFoguetes = 28;

const pecas = {
  bracos: {
    forca: Math.round((35 / maxForca) * 100),
    poder: 35,
    energia: -15,
    velocidade: -5,
  },
  blindagem: {
    forca: Math.round((30 / maxBlindagem) * 100),
    poder: 20,
    energia: 10,
    velocidade: -20,
  },
  nucleos: {
    forca: Math.round((45 / maxNucleos) * 100),
    poder: 7,
    energia: 48,
    velocidade: -24,
  },
  pernas: {
    forca: Math.round((30 / maxPernas) * 100),
    poder: 21,
    energia: -15,
    velocidade: 42,
  },
  foguetes: {
    forca: Math.round((10 / maxFoguetes) * 100),
    poder: 28,
    energia: 0,
    velocidade: -2,
  },
};



controle.forEach((elemento) => {
  elemento.addEventListener("click", (evento) => {
    manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
    atualizaEstatistica(evento.target.dataset.peca);
  });
});

function manipulaDados(operacao, controle) {
  const peca = controle.querySelector("[data-contador]");
  if (operacao == "-") {
    peca.value = parseInt(peca.value) - 1;
  } else {
    peca.value = parseInt(peca.value) + 1;
  }
}

function atualizaEstatistica(peca) {
  estatisticas.forEach((elemento) => {
    elemento.textContent =
      parseInt(elemento.textContent) +
      pecas[peca][elemento.dataset.estatistica];
  });
}
function addAnimation() {
  var button = document.getElementById("producao");
  button.classList.add("animation");
  setTimeout(function() {
    button.classList.remove("animation");
  }, 1000);
}
function atualizaEstatistica(peca) {
  estatisticas.forEach((elemento) => {
    const valorAtual = parseInt(elemento.textContent);
    const valorPeca = pecas[peca][elemento.dataset.estatistica];
    const novoValor = valorAtual + valorPeca;

    if (novoValor >= 0) {
      elemento.textContent = novoValor;
    } else {
      elemento.textContent = "0";
    }
  });
}
