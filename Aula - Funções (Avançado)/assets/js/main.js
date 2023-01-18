function falarOi() {
  console.log("Oi...");
}

falarOi();

const falarBomDia = function () {
  console.log("Bom dia...");
};

falarBomDia();

const falarBoaNoite = () => {
  console.log("Boa noite...");
};

falarBoaNoite();

const objeto = {
  falar() {
    console.log("Estou falando...");
  },
};

objeto.falar();

function funcao() {
  let valorTotal = 0;

  for (let argumento of arguments) {
    valorTotal += argumento;
  }

  console.log("Valor Total: " + valorTotal);
}

funcao(10, 10, 10, 10, 10);

function criaMultiplicador(multiplicador) {
  return (numero) => {
    return numero * multiplicador;
  };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadruplica = criaMultiplicador(4);

console.log("Duplicando: " + duplica(2));
console.log("Triplicando: " + triplica(2));
console.log("Quadriplicando: " + quadruplica(2));

// Funções Imediatas

(function() {

    console.log("Fui executada automaticamente.");

})();