//Mesma coisa que um laço de repetição for ou while, por exemplo.

function recursiva(max) {
  if (max > 10) return;
  max++;
  console.log("Valor do contador: " + max);
  recursiva(max);
}

recursiva(0);

// Função geradora

function* geradora1(valor) {

let max = valor;

for(let i = 0; i > max; max++) {

    yield max;
    console.log("Valor do contador: " + max);

}

}

geradora1(10);