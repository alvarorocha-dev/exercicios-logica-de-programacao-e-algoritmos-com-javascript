// =======================> Animation on Scroll Script

AOS.init();

// =======================> Exercise Script

const frm = document.getElementById("form");
const resp1 = document.getElementById("outResp1");
const resp2 = document.getElementById("outResp2");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = frm.inNome.value;
  const nota1 = Number(frm.inNota1.value);
  const nota2 = Number(frm.inNota2.value);

  const media = (nota1 + nota2) / 2;
  resp1.innerText = `Média das notas: ${media.toFixed(1)}.`;

  if (media >= 7) {
    resp2.innerText = `Parabéns, ${nome}. Você foi aprovado(a).`;
    resp2.className = "aprovado";
  } else if (media >= 4) {
    resp2.innerText = `Atenção, ${nome}. Você está em recuperação.`;
    resp2.className = "atencao";
  } else {
    resp2.innerText = `Ops, ${nome}. Você foi reprovado(a).`;
    resp2.className = "reprovado";
  }
});

frm.addEventListener("reset", () => {
  frm.inNome.focus();
  resp1.innerText = "";
  resp2.innerText = "";
});
