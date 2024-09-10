// =======================> Animation on Scroll Script

AOS.init();

// =======================> Exercise Script

const frm = document.getElementById("form");
const resp1 = document.getElementById("outResp1");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const num = Number(frm.inNum.value);

  let estrelas = "";

  for (let i = 1; i <= num; i++) {
    if (i % 2 === 1) {
      estrelas += "*";
    } else {
      estrelas += "-";
    }
  }
  resp1.innerText = `${estrelas}`;
});

frm.addEventListener("reset", () => {
  frm.inNum.focus();
  resp1.innerText = "";
});
