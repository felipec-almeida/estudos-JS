class AparelhoEletronico {
  constructor(marca, modelo, cor, preco) {
    Object.defineProperties(this, {
      marca: {
        value: marca,
        enumerable: true,
        writable: false,
        configurable: false,
      },

      modelo: {
        value: modelo,
        enumerable: true,
        writable: false,
        configurable: false,
      },

      cor: {
        value: cor,
        enumerable: true,
        writable: false,
        configurable: false,
      },

      preco: {
        value: preco,
        enumerable: true,
        writable: true,
        configurable: false,
      },

      volume: {
        value: 0,
        enumerable: true,
        writable: true,
        configurable: false,
      },

      ligado: {
        value: false,
        enumerable: true,
        writable: true,
        configurable: false,
      },
    });
  }

  static ligar() {
    if (this.ligado == true) {
      return console.log("O Dispositivo Eletrônico já está ligado.");
    }
    this.ligado = true;
    console.log("O Dispositivo Eletrônico está ligado.");
  }
}

AparelhoEletronico.prototype.aumentarVolume = function () {
  if (this.volume >= 10) {
    return console.log(`O volume de ${this.modelo} já está no máximo.`);
  }

  this.volume++;
  return console.log(`${this.modelo} : Volume ${this.volume}`);
};

AparelhoEletronico.prototype.diminuirVolume = function () {
  if (this.volume <= 0) {
    return console.log(`O volume de ${this.modelo} já está no mínimo.`);
  }

  this.volume--;
  return console.log(`${this.modelo} : Volume ${this.volume}`);
};

const iPhone = new AparelhoEletronico(
  "iPhone",
  "iPhone 14 Pro Max",
  "Branco",
  7.739
);
AparelhoEletronico.ligar();
for (let i = 0; i <= 10; i++) {
  iPhone.aumentarVolume();
}
