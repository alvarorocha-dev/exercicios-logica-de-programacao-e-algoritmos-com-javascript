// =======================> Animation on Scroll Script

AOS.init();

// =======================> Exercise Script

const frm = document.getElementById("form");
const resp1 = document.getElementById("outResp1");
const resp2 = document.getElementById("outResp2");
const resp3 = document.getElementById("outResp3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const medicamento = frm.inMedicamento.value;
  const preco = Number(frm.inPreco.value);

  const valor = Math.floor(preco * 2);
  const desconto = (preco * 2) % 1;

  resp1.innerText = `Promoção de ${medicamento}.`;
  resp2.innerText = `Leve 2 por apenas R$: ${valor.toFixed(2)}.`;
  resp3.innerText = `Valor do desconto R$: ${desconto.toFixed(2)}.`;
});

frm.addEventListener("reset", () => {
  frm.inMedicamento.focus();
  resp1.innerText = "";
  resp2.innerText = "";
  resp3.innerText = "";
});
