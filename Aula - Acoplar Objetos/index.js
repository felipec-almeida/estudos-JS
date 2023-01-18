const comer = {
  comer() {
    console.log(`${this.nome} está comendo...`);
  },
};

const falar = {
  falar() {
    console.log(`${this.nome} está falando...`);
  },
};

const beber = {
  beber() {
    console.log(`${this.nome} está bebendo...`);
  },
};

const pessoaPrototype = Object.assign({}, comer, falar, beber);

function criaPessoa(nome, sobrenome) {
  return Object.create(pessoaPrototype, {
    nome: { value: nome },
    sobrenome: { value: sobrenome },
  });
}

const pessoa1 = criaPessoa("Felipe", "Almeida");
console.log(pessoa1);

class Ações {
  constructor(nome) {
    Object.defineProperty(this, "nome", {
      value: nome,
      enumerable: true,
      writable: false,
      configurable: false,
    });
  }
}

Ações.prototype.comer = function () {
  console.log(`${this.nome} está comendo.`);
};

Ações.prototype.beber = function () {
  console.log(`${this.nome} está bebendo.`);
};

Ações.prototype.falar = function () {
  console.log(`${this.nome} está falando.`);
};

class Pessoa extends Ações {
  constructor(nome, sobrenome) {
    super(nome);

    Object.defineProperty(this, "sobrenome", {
      value: sobrenome,
      enumerable: false,
      writable: false,
      configurable: false,
    });
  }
}

const pessoa2 = new Pessoa("Felipe", "Camargo de Almeida");

console.log(pessoa2.sobrenome);
pessoa2.beber();
pessoa2.comer();
pessoa2.falar();
