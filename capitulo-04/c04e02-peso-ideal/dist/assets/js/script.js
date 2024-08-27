// =======================> Animation on Scroll Script

AOS.init();

// =======================> Exercise Script

const frm = document.getElementById("form");
const resp1 = document.getElementById("outResp1");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = frm.inNome.value;
  const altura = Number(frm.inAltura.value);
  const masculino = frm.inMasculino.checked;

  let peso;

  if (masculino) {
    peso = 22 * Math.pow(altura, 2);
  } else {
    peso = 21 * Math.pow(altura, 2);
  }

  resp1.innerText = `${nome}, seu peso ideal é ${peso.toFixed(2)}kg.`;
});

frm.addEventListener("reset", () => {
  frm.inNome.focus();
  resp1.innerText = "";
});
