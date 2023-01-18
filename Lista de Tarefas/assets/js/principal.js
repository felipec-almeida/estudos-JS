const lista = document.querySelector(".lista-ol");

class Produto {
  constructor(nome, preco, estoque) {
    Object.defineProperties(this, {
      nome: {
        enumerable: true,
        configurable: false,
        get: function () {
          return nome;
        },
        set: function (valor) {
          if (typeof valor === "string") {
            this.nome = valor;
          } else {
            console.log("Valor não é do tipo String!");
          }
        },
      },
      preco: {
        enumerable: true,
        configurable: false,
        get: function () {
          return preco;
        },
        set: function (valor) {
          if (typeof valor === "number") {
            this.preco = valor;
          } else {
            console.log("Valor não é do tipo Number!");
          }
        },
      },
      estoque: {
        enumerable: true,
        configurable: false,
        get: function () {
          return estoque;
        },
      },
    }, );
  }
}
Produto.prototype.criaConteudo = function () {
  const conteudo = `Nome: ${this.nome} | Preço: $${this.preco} | Estoque: ${this.estoque} unidades`;
  return conteudo;
};

class Lista {
  constructor(conteudo) {
    this.conteudo = conteudo;
  }
}
Lista.prototype.criaLista = function (conteudo) {
  lista.innerHTML += `<li>${conteudo}</li>`;
};

const produto1 = new Produto("JBL", 150, 100);
const produto2 = new Produto("iPhone 14 Max", 10000, 10);
const produto3 = new Produto("PC Gamer - Ryzen", 7500, 25);

const conteudoProduto = produto1.criaConteudo();
const conteudoProduto2 = produto2.criaConteudo();
const conteudoProduto3 = produto3.criaConteudo();

const listaProduto = new Lista(conteudoProduto);
listaProduto.criaLista(conteudoProduto);
listaProduto.criaLista(conteudoProduto2);
listaProduto.criaLista(conteudoProduto3);