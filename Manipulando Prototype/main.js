const objetoA = {

    chaveA: "Chave Qualquer de A"
    // __proto__ : Object.prototype

};

const objetoB = {

    chaveB: "Chave Qualquer de B",

    // __proto__ : objetoA

};

//Uma Espécie de Herança de Prototype.
//Dois Parâmetros: (Objeto que vai obter um prototype)(Objeto que vai ser o prototype)

/* Object.setPrototypeOf(objetoB, objetoA);
console.log(objetoA.chaveA);

const objetoC = new Object();
objetoC.chaveC = "Chave Qualquer de C";

Object.setPrototypeOf(objetoC, objetoB);
console.log(objetoC.chaveB); */

class Produto {

    constructor(nome, preco) {

        this.nome = nome;
        this.preco = preco;

    };

};

//Não é possível usar Array Function( () => )  em Prototype!!

Produto.prototype.desconto = function(percentual) {

    this.preco -= (this.preco * (percentual / 100));
    return `Valor do Produto com ${percentual}% de desconto: ${this.preco} reais`;
}

const celular = new Produto("Iphone XR", 5000);
console.log(celular.desconto(10));

const caneca = {

    nome: "Caneca",
    preco: 15,

};

Object.setPrototypeOf(caneca, celular);
console.log(caneca.desconto(5));
