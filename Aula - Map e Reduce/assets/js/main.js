/* Possui três parâmetros, respectivamente: 
   Valor, Índice e Array. */

const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const numerosDobrados = numeros.map((valor) => {
  return `Valor Duplicado -> ${valor * 2}`;
});

const pessoas = [
  { nome: "Felipe", idade: 17 },
  { nome: "Carlos", idade: 20 },
  { nome: "André", idade: 33 },
  { nome: "Rogério", idade: 60 },
  { nome: "Manuel", idade: 55 },
];

const nomePessoas = pessoas.map((obj) => obj.idade);

const idadePessoas = pessoas.map((obj) => {
  delete obj.nome;
  return obj;
});

const idPessoas = pessoas.map((obj, indice) => {
  obj.id = indice;
  return obj;
});

console.log(idPessoas);
console.log(pessoas);

const num = [10, 20, 30, 40, 50];
const numPares = num
  .filter((valor) => valor % 2 === 0)
  .map((valor) => valor * 2)
  .reduce((ac, valor) => ac + valor);

console.log(numPares);

const valores = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
valores.forEach((valor, indice) => console.log(valor + " => " + indice));
