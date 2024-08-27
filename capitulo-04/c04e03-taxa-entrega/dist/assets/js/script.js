// =======================> Animation on Scroll Script

AOS.init();

// =======================> Exercise Script

const frm = document.getElementById("form");
const resp1 = document.getElementById("outResp1");
const resp2 = document.getElementById("outResp2");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const local = frm.inLocal.value;
  const valor = Number(frm.inValor.value);

  let frete;

  switch (local) {
    case "Centro":
      frete = 5;
      break;
    case "Fragata":
    case "Três Vendas":
      frete = 7;
      break;
    case "Laranjal":
      frete = 10;
      break;
    case "Outros":
    default:
      frete = 8;
      break;
  }

  resp1.innerText = `Local de Entrega: ${local}. Valor do Frete R$: ${frete.toFixed(
    2
  )}.`;
  resp2.innerText = `Total da compra ${(valor + frete).toFixed(2)}.`;
});

frm.addEventListener("reset", () => {
  frm.inFilme.focus();
  resp1.innerText = "";
  resp2.innerText = "";
});
