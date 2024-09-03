// =======================> Animation on Scroll Script

AOS.init();

// =======================> Exercise Script

const frm = document.getElementById("form");
const resp1 = document.getElementById("outResp1");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const num = Number(frm.inNum.value);

  let resultado = "";

  for (i = 0; i <= 10; i++) {
    resultado = resultado + `${num} x ${i} = ${num * i}.\n`;
  }

  resp1.innerText = `${resultado}`;
});

frm.addEventListener("reset", () => {
  frm.inNum.focus();
  resp1.innerText = "";
});
