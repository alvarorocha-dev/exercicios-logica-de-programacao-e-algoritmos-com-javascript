// =======================> Animation on Scroll Script

AOS.init();

// =======================> Exercise Script

const frm = document.getElementById("form");
const resp1 = document.getElementById("outResp1");
const resp2 = document.getElementById("outResp2");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const produto = frm.inProduto.value;
  const preco = Number(frm.inPreco.value);

  resp1.innerText = `Promoção ${produto} - Leve 3 por R$ ${(
    preco * 2.5
  ).toFixed(2)}.`;
  resp2.innerText = `A 3º produto custa apenas R$: ${(preco * 0.5).toFixed(
    2
  )}.`;
});

frm.addEventListener("reset", () => {
  frm.inProduto.focus();
  resp1.innerText = "";
  resp2.innerText = "";
});
