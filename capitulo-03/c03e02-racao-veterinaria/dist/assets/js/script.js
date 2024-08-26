// =======================> Animation on Scroll Script

AOS.init();

// =======================> Exercise Script

const frm = document.getElementById("form");
const resp1 = document.getElementById("outResp1");
const resp2 = document.getElementById("outResp2");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const peso = Number(frm.inPeso.value);
  const consumo = Number(frm.inConsumo.value);

  const dias = Math.floor((peso * 1000) / consumo);
  const resto = (peso * 1000) % consumo;

  resp1.innerText = `Duração: ${dias} dia(s).`;
  resp2.innerText = `Sobra: ${resto} grama(s).`;
});

frm.addEventListener("reset", () => {
  frm.inPeso.focus();
  resp1.innerText = "";
  resp2.innerText = "";
});
