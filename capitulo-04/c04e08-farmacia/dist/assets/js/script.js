// =======================> Animation on Scroll Script

AOS.init();

// =======================> Exercise Script

const frm = document.getElementById("form");
const resp1 = document.getElementById("outResp1");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const valor = Number(frm.inValor.value);

  const aux = Math.floor(valor / 20);

  const parcelas = aux == 0 ? 1 : aux > 6 ? 6 : aux;

  // let parcelas = 0;
  // if (aux == 0) {
  //   parcelas = 1;
  // } else if (aux > 6) {
  //   parcelas = 6;
  // } else {
  //   parcelas = aux;
  // }

  const valorParcelas = valor / parcelas;

  resp1.innerText = `A compra no valor de R$${valor.toFixed(
    2
  )} pode ser parcelada em ${parcelas} parcela(s) de R$ ${valorParcelas.toFixed(
    2
  )}.`;
});

frm.addEventListener("reset", () => {
  frm.inValor.focus();
  resp1.innerText = "";
  resp2.innerText = "";
});
