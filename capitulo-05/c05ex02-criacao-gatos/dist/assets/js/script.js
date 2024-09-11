// =======================> Animation on Scroll Script

AOS.init();

// =======================> Exercise Script

const frm = document.getElementById("form");
const resp1 = document.getElementById("outResp1");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const gatos = Number(frm.inGatos.value);
  const anos = Number(frm.inAnos.value);

  let totalGatos = gatos;
  let resposta = "";

  for (let i = 1; i <= anos; i++) {
    resposta += `${i}º Ano: ${totalGatos} gatos.\n`;
    totalGatos = totalGatos * 3;
  }

  resp1.innerText = `${resposta}`;
});

frm.addEventListener("reset", () => {
  frm.inGatos.focus();
  resp1.innerText = "";
});
