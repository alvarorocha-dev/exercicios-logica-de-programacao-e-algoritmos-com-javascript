// =======================> Animation on Scroll Script

AOS.init();

// =======================> Exercise Script

const frm = document.getElementById("form");
const resp1 = document.getElementById("outResp1");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const pessoas = Number(frm.inPessoas.value);
  const peixes = Number(frm.inPeixes.value);

  let total;

  if (peixes <= pessoas) {
    total = pessoas * 20;
  } else {
    total = pessoas * 20 + (peixes - pessoas) * 12;
  }

  resp1.innerText = `O valor total a ser pago é: R$ ${total.toFixed(2)}.`;
});

frm.addEventListener("reset", () => {
  frm.inPessoas.focus();
  resp1.innerText = "";
});
