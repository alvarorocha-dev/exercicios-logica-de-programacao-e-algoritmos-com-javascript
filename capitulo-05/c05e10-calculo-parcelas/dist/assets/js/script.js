// =======================> Animation on Scroll Script

AOS.init();

// =======================> Exercise Script

const frm = document.getElementById("form");
const resp1 = document.getElementById("outResp1");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const valor = Number(frm.inValor.value);
  const parcelas = Number(frm.inParcela.value);

  const valorParcelas = Math.floor(valor / parcelas);
  const valorFinal = valorParcelas + (valor % parcelas);
  let resposta = "";

  for (let i = 1; i < parcelas; i++) {
    resposta += `${i}ª Parcela: R$ ${valorParcelas.toFixed(2)}.\n`;
  }

  resposta += `${parcelas}ª Parcela: R$ ${valorFinal.toFixed(2)}.`;

  resp1.innerText = `${resposta}`;
});

frm.addEventListener("reset", () => {
  frm.inValor.focus();
  resp1.innerText = "";
});
