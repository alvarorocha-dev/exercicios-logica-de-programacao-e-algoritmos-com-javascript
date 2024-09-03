// =======================> Animation on Scroll Script

AOS.init();

// =======================> Exercise Script

const frm = document.getElementById("form");
const resp1 = document.getElementById("outResp1");
const resp2 = document.getElementById("outResp2");

let resposta = "";
let contas = 0;
let total = 0;

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const conta = frm.inConta.value;
  const valor = Number(frm.inValor.value);

  contas++;
  total += valor;
  resposta = resposta + `${conta} - R$ ${valor.toFixed(2)}.\n`;

  resp1.innerText = `${resposta}`;
  resp2.innerText = `Total R$ ${total.toFixed(2)}.`;
});

frm.addEventListener("reset", () => {
  frm.inConta.focus();
  resp1.innerText = "";
  resp2.innerText = "";
});
