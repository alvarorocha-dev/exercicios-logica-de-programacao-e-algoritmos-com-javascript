// =======================> Animation on Scroll Script

AOS.init();

// =======================> Exercise Script

const frm = document.getElementById("form");
const resp1 = document.getElementById("outResp1");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const fruta = frm.inFruta.value;
  const num = Number(frm.inNum.value);

  let resposta = `${fruta}`;

  for (let i = 1; i < num; i++) {
    resposta += ` * ${fruta}`;
  }

  resp1.innerText = `${resposta}`;
});

frm.addEventListener("reset", () => {
  frm.inFruta.focus();
  resp1.innerText = "";
  resp2.innerText = "";
});
