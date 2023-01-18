class Produtos {
  constructor(nomeProduto, valorProduto, estoqueProduto) {
    this.nomeProduto = nomeProduto;
    this.valorProduto = valorProduto;
    this.estoqueProduto = estoqueProduto;
  }
}

Produtos.prototype.aumento = function (porcentagem) {
  this.valorProduto += this.valorProduto * (porcentagem / 100);
  return console.log(`Valor total com o aumento: R$ ${this.valorProduto}`);
};

Produtos.prototype.desconto = function (porcentagem) {
  this.valorProduto -= this.valorProduto * (porcentagem / 100);
  return console.log(`Valor total com o desconto: R$ ${this.valorProduto}`);
};

const produto1 = new Produtos("JBL", 150, 500, 10);
produto1.desconto(50);
