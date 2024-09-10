alert(`Digite 0 para encerrar o programa.`);

do {
  const ano = Number(prompt(`Digite o ano para verificar se foi ano de copa:`));

  if (ano === 0) {
    let sair = confirm(`Deseja encerrar?`);

    if (sair) {
      break;
    } else {
      continue;
    }
  } else if (ano === 1942 || ano === 1946) {
    alert(`O ano de ${ano} não teve Copa devido a Segunda Guerra Mundial.`);
  } else if (ano >= 1930 && ano % 4 === 2) {
    alert(`O ano de ${ano} teve Copa do Mundo.`);
  } else {
    alert(`O ano de ${ano} não teve Copa do Mundo.`);
  }
} while (true);
