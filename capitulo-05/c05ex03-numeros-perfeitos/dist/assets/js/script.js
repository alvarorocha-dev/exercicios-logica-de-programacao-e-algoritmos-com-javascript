// =======================> Animation on Scroll Script

AOS.init();

// =======================> Exercise Script

const frm = document.getElementById("form");
const resp1 = document.getElementById("outResp1");
const resp2 = document.getElementById("outResp2");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const num = Number(frm.inNum.value);

  let divisores = `Divisores de ${num}: 1`;

  let soma = 1;

  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      divisores += `, ${i}`;
      soma += i;
    }
  }

  resposta = `${divisores}. Soma ${soma}.`;

  resp1.innerText = `${resposta}`;

  if (num === soma) {
    resp2.innerText = `${num} é um número perfeito.`;
  } else {
    resp2.innerText = `${num} não um número perfeito.`;
  }
});

frm.addEventListener("reset", () => {
  frm.inNum.focus();
  resp1.innerText = "";
  resp2.innerText = "";
});
