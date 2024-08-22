// =======================> Animation on Scroll Script

AOS.init();

// =======================> Exercise Script

const frm = document.getElementById("form");
const resp1 = document.getElementById("outResp1");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = frm.inNome.value;

  resp1.innerText = `Olá, ${nome}! Seja muito bem-vindo(a).`;
});

frm.addEventListener("reset", () => {
  frm.inNome.focus();
  resp1.innerText = "";
});
