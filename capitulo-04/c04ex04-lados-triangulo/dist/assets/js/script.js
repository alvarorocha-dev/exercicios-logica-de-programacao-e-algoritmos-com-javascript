// =======================> Animation on Scroll Script

AOS.init();

// =======================> Exercise Script

const frm = document.getElementById("form");
const resp1 = document.getElementById("outResp1");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const ladoA = Number(frm.inLadoA.value);
  const ladoB = Number(frm.inLadoB.value);
  const ladoC = Number(frm.inLadoC.value);

  let triangulo = "";

  if (ladoA > ladoB + ladoC || ladoB > ladoA + ladoC || ladoC > ladoA + ladoB) {
    resp1.innerText = `Não é possível formar um triângulo com essas medidas.`;
    return;
  }

  if (ladoA === ladoB && ladoB === ladoC) {
    triangulo = "Equilátero";
  } else if (ladoA === ladoB || ladoB === ladoC) {
    triangulo = "Isósceles";
  } else {
    triangulo = "Escaleno";
  }

  resp1.innerText = `Essas medidas formam um triângulo do tipo: ${triangulo}.`;
});

frm.addEventListener("reset", () => {
  frm.inLadoA.focus();
  resp1.innerText = "";
});
