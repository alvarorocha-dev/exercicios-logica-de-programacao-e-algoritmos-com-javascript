// =======================> Animation on Scroll Script

AOS.init();

// =======================> Exercise Script

const frm = document.getElementById("form");
const resp1 = document.getElementById("outResp1");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const valor = Number(frm.inValor.value);
  const duracao = Number(frm.inDuracao.value);

  const tempo = Math.ceil(duracao / 15);
  const total = valor * tempo;

  resp1.innerText = `Valor a pagar R$: ${total.toFixed(2)}.`;
});

frm.addEventListener("reset", () => {
  frm.inValor.focus();
  resp1.innerText = "";
});
