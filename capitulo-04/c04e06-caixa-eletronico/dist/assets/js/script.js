// =======================> Animation on Scroll Script

AOS.init();

// =======================> Exercise Script

const frm = document.getElementById("form");
const resp1 = document.getElementById("outResp1");
const resp2 = document.getElementById("outResp2");
const resp3 = document.getElementById("outResp3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const valor = Number(frm.inValor.value);

  if (valor % 10 !== 0) {
    alert(
      `Só é possivel realizar saques com valores que podem ser pagos com notas de R$ 10, R$ 50 ou R$ 100.`
    );
    frm.inValor.focus();
    return;
  }

  let notasCem = Math.floor(valor / 100);
  let resto = valor % 100;
  let notasCinquenta = Math.floor(resto / 50);
  resto = resto % 50;
  let notasDez = Math.floor(resto / 10);

  if (notasCem > 0) {
    resp1.innerText = `Notas de R$ 100: ${notasCem}.`;
  } else {
    resp1.innerText = "";
  }
  if (notasCinquenta > 0) {
    resp2.innerText = `Notas de R$ 50: ${notasCinquenta}.`;
  } else {
    resp2.innerText = "";
  }
  if (notasDez > 0) {
    resp3.innerText = `Notas de R$ 10: ${notasDez}.`;
  } else {
    resp3.innerText = "";
  }
});

frm.addEventListener("reset", () => {
  frm.inValor.focus();
  resp1.innerText = "";
  resp2.innerText = "";
  resp3.innerText = "";
});
