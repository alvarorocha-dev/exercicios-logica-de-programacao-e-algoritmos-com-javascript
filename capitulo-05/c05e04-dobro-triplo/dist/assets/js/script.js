// =======================> Animation on Scroll Script

AOS.init();

// =======================> Exercise Script

const frm = document.getElementById("form");
const resp1 = document.getElementById("outResp1");

alert(
  'Digite um número par para obter o dobro.\nDigite um número ímpar para obter o triplo.\nSe quiser sair  e visualizar o enunciado digite "0"'
);

do {
  const num = Number(prompt(`Digite um número:`));

  if (num === 0 || isNaN(num)) {
    const sair = confirm(`Deseja sair?`);

    if (sair) {
      break;
    } else {
      continue;
    }
  }
  if (num % 2 === 0) {
    alert(`O dobro de ${num} é: ${num * 2}.`);
  } else {
    alert(`O triplo de ${num} é: ${num * 3}.`);
  }
} while (true);

alert(`Encerrando`);

frm.addEventListener("reset", () => {
  resp1.innerText = "";
});
