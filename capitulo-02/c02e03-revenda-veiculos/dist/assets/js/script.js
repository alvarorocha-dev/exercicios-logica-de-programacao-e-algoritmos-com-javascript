// =======================> Animation on Scroll Script

AOS.init();

// =======================> Exercise Script

const frm = document.getElementById("form");
const resp1 = document.getElementById("outResp1");
const resp2 = document.getElementById("outResp2");
const resp3 = document.getElementById("outResp3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const veiculo = frm.inVeiculo.value;
  const preco = Number(frm.inPreco.value);

  resp1.innerText = `Promoção: ${veiculo}.`;
  resp2.innerText = `Entrada de R$: ${(preco * 0.5).toFixed(2)}.`;
  resp3.innerText = `Restante em 12 parcelas de R$: ${(
    (preco * 0.5) /
    12
  ).toFixed(2)}.`;
});

frm.addEventListener("reset", () => {
  frm.inVeiculo.focus();
  resp1.innerText = "";
  resp2.innerText = "";
  resp3.innerText = "";
});
