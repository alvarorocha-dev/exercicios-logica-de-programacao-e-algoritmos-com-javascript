// =======================> Animation on Scroll Script

AOS.init();

// =======================> Exercise Script

const frm = document.getElementById("form");
const resp1 = document.getElementById("outResp1");
const resp2 = document.getElementById("outResp2");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const filme = frm.inFilme.value;
  const duracao = Number(frm.inDuracao.value);

  const horas = Math.floor(duracao / 60);
  const minutos = duracao % 60;

  resp1.innerText = `O nome do filme é: ${filme}.`;
  resp2.innerText = `A duração do filme é de ${horas} hora(s) e ${minutos} minuto(s).`;
});

frm.addEventListener("reset", () => {
  frm.inFilme.focus();
  resp1.innerText = "";
  resp2.innerText = "";
});
