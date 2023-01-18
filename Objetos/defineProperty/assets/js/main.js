class Produto {
  constructor(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, "estoque", {
      enumerable: true, // É visível? (T/F)
      value: estoque, // Valor do Atributo
      writable: true, // Pode ser alterada? (T/F)
      configurable: false, // Pode ser reconfigurada? (T/F)
    });
  }

  valorTotal() {
    return `Valor Total: ${this.preco * this.estoque}R$`;
  }
}

const produto = new Produto("Camiseta", 50, 100);
console.log(Object.keys(produto)); // Retorna os atributos da classe.
console.log(produto);
console.log(produto.valorTotal());

class Carro {
  constructor(nome, preco, ano) {
    Object.defineProperties(this, {
      nome: {
        enumerable: true,
        value: nome,
        writable: true,
        configurable: false,
      },
      preco: {
        enumerable: true,
        value: preco,
        writable: false,
        configurable: false,
      },
      ano: {
        enumerable: true,
        value: ano,
        writable: false,
        configurable: false,
      },
    });
  }

  get nome() {
    return this.nome;
  }
  get preco() {
    return this.preco;
  }
  get ano() {
    return this.ano;
  }
  set nome(nome) {
    this.nome = nome;
  }
  set preco(preco) {
    this.preco = preco;
  }
  set ano(ano) {
    this.ano = ano;
  }
}

const sedanCarro = new Carro("Sedan Cruze", 142.95, 2023);
sedanCarro.nome = 'Honda';
console.log(sedanCarro);
console.log(Object.getOwnPropertyDescriptor(sedanCarro, 'nome'));
