// =======================> Animation on Scroll Script

AOS.init();

// =======================> Exercise Script

const frm = document.getElementById("form");
const resp1 = document.getElementById("outResp1");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const num = Number(frm.inNum.value);

  let numDivisores = 0;

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      numDivisores++;
    }
  }

  if (numDivisores === 2) {
    resp1.innerText = `O número ${num} é primo.`;
  } else {
    resp1.innerText = `O número ${num} não é primo.`;
  }
});

frm.addEventListener("reset", () => {
  frm.inNum.focus();
  resp1.innerText = "";
});
