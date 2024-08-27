// =======================> Animation on Scroll Script

AOS.init();

// =======================> Exercise Script

const frm = document.getElementById("form");
const resp1 = document.getElementById("outResp1");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const hora = Number(frm.inHora.value);

  let horaFranca = hora + 5;

  if (horaFranca > 24) {
    horaFranca = horaFranca - 24;
  }

  resp1.innerText = `Hora na França: ${horaFranca.toFixed(2)}.`;
});

frm.addEventListener("reset", () => {
  frm.inHora.focus();
  resp1.innerText = "";
});
