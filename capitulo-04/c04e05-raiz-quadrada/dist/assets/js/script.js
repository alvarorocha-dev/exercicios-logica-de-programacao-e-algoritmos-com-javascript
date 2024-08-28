// =======================> Animation on Scroll Script

AOS.init();

// =======================> Exercise Script

const frm = document.getElementById("form");
const resp1 = document.getElementById("outResp1");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const numero = Number(frm.inNum.value);

  let raiz = Math.sqrt(numero);

  if (raiz % 1 === 0) {
    resp1.innerText = `A raiz quadrada de ${numero} é igual a: ${raiz}. É uma raiz exata.`;
    resp1.className = "sucesso";
  } else {
    resp1.innerText = `A raiz quadrada de ${numero} é igual a: ${raiz.toFixed(
      2
    )}. NÃO É uma raiz exata.`;
    resp1.className = "erro";
  }
});

frm.addEventListener("reset", () => {
  frm.inNum.focus();
  resp1.innerText = "";
});
