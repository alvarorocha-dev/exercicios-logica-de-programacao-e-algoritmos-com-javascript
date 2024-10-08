// =======================> Animation on Scroll Script

AOS.init();

// =======================> Exercise Script

const frm = document.getElementById("form");
const resp1 = document.getElementById("outResp1");
const resp2 = document.getElementById("outResp2");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const valor = Number(frm.inValor.value);

  if (valor < 1) {
    alert(`O valor mínimo para depósito é R$ 1,00.`);
    frm.inValor.focus();
    return;
  }

  let tempo;
  let troco;

  if (valor >= 3) {
    tempo = 120;
    troco = valor - 3;
  } else if (valor >= 1.75) {
    tempo = 60;
    troco = valor - 1.75;
  } else {
    tempo = 30;
    troco = valor - 1;
  }

  resp1.innerText = `Tempo a ser utilizado: ${tempo} minutos.`;
  resp2.innerText = `Troco: R$ ${troco.toFixed(2)}.`;
});

frm.addEventListener("reset", () => {
  frm.inValor.focus();
  resp1.innerText = "";
  resp2.innerText = "";
});
