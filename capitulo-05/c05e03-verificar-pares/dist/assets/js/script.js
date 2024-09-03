// =======================> Animation on Scroll Script

AOS.init();

// =======================> Exercise Script

const frm = document.getElementById("form");
const resp1 = document.getElementById("outResp1");

let num;

do {
  num = Number(prompt("Digite um número:"));

  if (num == 0 || isNaN(num)) {
    alert("Digite um número válido maior que 0.");
  }
} while (num == 0 || isNaN(num));

let pares = `Pares entre 1 e ${num}: `;

for (let i = 2; i <= num; i = i + 2) {
  pares = pares + i + ", ";
}

resp1.innerText = `${pares}.`;

frm.addEventListener("reset", () => {
  resp1.innerText = "";
});
