// =======================> Animation on Scroll Script

AOS.init();

// =======================> Exercise Script

const frm = document.getElementById("form");
const resp1 = document.getElementById("outResp1");
const resp2 = document.getElementById("outResp2");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const permitida = Number(frm.inPermitida.value);
  const veiculo = Number(frm.inVeiculo.value);

  if (veiculo > permitida + permitida * 0.2) {
    resp1.innerText = `Multa Grave.`;
    resp1.className = "erro";
  } else if (veiculo > permitida) {
    resp1.innerText = `Multa Leve`;
    resp1.className = "atencao";
  } else {
    resp1.innerText = `Sem Multa`;
    resp1.className = "sucesso";
  }
});

frm.addEventListener("reset", () => {
  frm.inPermitida.focus();
  resp1.innerText = "";
  resp2.innerText = "";
});
