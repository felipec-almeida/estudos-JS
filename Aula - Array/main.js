/* const arrayQualquer = ['Felipe', 'Andreia', 'Marcos'];
const arrayQualquer2 = ['Rebbeca', 'Heitor' , 'Eduardo', 'Fernando'];
const arrayConcatenado = arrayQualquer.concat(arrayQualquer2);

// arrayQualquer.splice(1, 0, 'Rebecca');

console.log(arrayConcatenado); */

const num = [10, 20, 35, 5, 2, 14, 17, 45, 54, 70, 23, 1, 0, 7];
const numFiltrado = num.filter((valor) => valor < 20);
console.log(numFiltrado);

const pessoas = [
  { nome: "Felipe", idade: 17 },
  { nome: "Eduardo", idade: 14 },
  { nome: "Arthur", idade: 17 },
  { nome: "Amanda", idade: 18 },
  { nome: "Heitor", idade: 15 },
];

const pessoasFiltrado = pessoas.filter(pessoa => pessoa.idade < 20);
console.log(pessoasFiltrado);

