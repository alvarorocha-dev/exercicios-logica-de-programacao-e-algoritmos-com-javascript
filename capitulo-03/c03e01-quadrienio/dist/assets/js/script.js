// =======================> Animation on Scroll Script

AOS.init();

// =======================> Exercise Script

const frm = document.getElementById("form");
const resp1 = document.getElementById("outResp1");
const resp2 = document.getElementById("outResp2");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const salario = Number(frm.inSalario.value);
  const tempo = Number(frm.inTempo.value);

  const quadrienios = Math.floor(tempo / 4);
  const bonus = (salario * quadrienios) / 100;

  resp1.innerText = `Quadriênios trabalhados: ${quadrienios}.`;
  resp2.innerText = `Bônus de quadriênio R$: ${bonus.toFixed(
    2
  )}. Total a receber R$ ${(salario + bonus).toFixed(2)}.`;
});

frm.addEventListener("reset", () => {
  frm.inSalario.focus();
  resp1.innerText = "";
  resp2.innerText = "";
});
