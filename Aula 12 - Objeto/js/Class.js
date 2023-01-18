class Carro {

    constructor(modelo, preço, cor) {

        this.carroLigado = false;
        this.modelo = modelo;
        this.preço = preço;
        this.cor = cor;

    }

    ligarCarro() {

        console.log("O carro está ligado.");
        this.carroLigado = true;

    }

    desligarCarro() {

        console.log("O carro está desligado.");
    this.carroLigado = false;

    }

}

    const carro = new Carro(prompt("Modelo do Carro: "), 
    parseFloat(prompt("Preço do Carro: ")), prompt("Cor do Carro: "));
    carro.desligarCarro();
    carro.ligarCarro();
    console.log(carro);