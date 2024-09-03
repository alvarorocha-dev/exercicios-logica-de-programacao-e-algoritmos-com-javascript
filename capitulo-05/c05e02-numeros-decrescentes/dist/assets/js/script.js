// =======================> Animation on Scroll Script

AOS.init();

// =======================> Exercise Script

const frm = document.getElementById("form");
const resp1 = document.getElementById("outResp1");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const num = Number(frm.inNum.value);

  let resultado = `${num}`;

  for (i = num; i > 1; i--) {
    resultado = resultado + `, ${i - 1}`;
  }

  resp1.innerText = `${resultado}.`;
});

frm.addEventListener("reset", () => {
  frm.inNum.focus();
  resp1.innerText = "";
});
