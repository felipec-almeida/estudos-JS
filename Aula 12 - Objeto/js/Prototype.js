class Microfone {
  constructor(nome, marca, garantia, qualidade, preco) {
    this.nome = nome;
    this.marca = marca;
    this.garantia = garantia;
    this.qualidade = qualidade;
    this.preco = preco;
  }
}

Microfone.prototype.getInformacoes = function() {
  return `Nome: ${this.nome} | Preço: R$ ${this.preco} | Marca: ${this.marca} | Garantia: ${this.garantia} | Qualidade: ${this.qualidade}`;
};

const microfone = new Microfone("Razer Seiren Mini", "Razer", "12 meses", "Ótimo Custo Benefício", 329.40);
console.log(microfone.getInformacoes());