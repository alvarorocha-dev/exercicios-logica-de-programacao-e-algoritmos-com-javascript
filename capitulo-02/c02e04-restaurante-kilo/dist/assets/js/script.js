// =======================> Animation on Scroll Script

AOS.init();

// =======================> Exercise Script

const frm = document.getElementById("form");
const resp1 = document.getElementById("outResp1");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const valor = Number(frm.inValor.value);
  const consumo = Number(frm.inConsumo.value);

  const total = (valor * consumo) / 1000;

  resp1.innerText = `Valor a pagar R$: ${total.toFixed(2)}.`;
});

frm.addEventListener("reset", () => {
  frm.inConsumo.focus();
  resp1.innerText = "";
});
