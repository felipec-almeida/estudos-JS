function mostraHorario() {
  const data = new Date();

  return data.toLocaleTimeString("pt-BR", { hour12: false });
}

const intervalo = setInterval(function () {
  console.log(mostraHorario());
}, 1000);

const tempoLimite = setTimeout(function () {
  clearInterval(intervalo);
}, 6 * 1000);

setTimeout(function () {
  console.log("O processo foi finalizado com êxito.");
}, 8 * 1000);
