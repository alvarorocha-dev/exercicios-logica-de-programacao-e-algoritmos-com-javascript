// =======================> Animation on Scroll Script

AOS.init();

// =======================> Exercise Script

const frm = document.getElementById("form");
const resp1 = document.getElementById("outResp1");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const num = Number(frm.inNum.value);

  const teste = num % 2 == 0 ? `Par` : `Ímpar`;

  resp1.innerText = `O número ${num} é ${teste}.`;
});

frm.addEventListener("reset", () => {
  frm.inNum.focus();
  resp1.innerText = "";
});
