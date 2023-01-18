//Superclasse : Classe Mãe
class Conta {
  constructor(titular, agencia, conta, saldo) {
    this.titular = titular;
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
  }
}

class contaPoupanca extends Conta {
  constructor(titular, agencia, conta, saldo) {
    super(titular, agencia, conta, saldo);
  }
}

contaPoupanca.prototype.sacar = function (valor) {
  this.saldo -= valor;
  console.log(`Você acabou de sacar R$${valor} de sua conta.`);
};

Conta.prototype.sacar = function (valor) {
  if (valor > 1500) {
    console.log(
      "Não é possível sacar a quantia, o máximo permitido é de 1500 reais por saque.;"
    );
    return false;
  } else {
    this.saldo -= valor;
    console.log(`Você acabou de sacar R$${valor} de sua conta.`);
  }
};

Conta.prototype.depositar = function (valor) {
  this.saldo += valor;
  console.log(`Você acabou de depositar R$${valor} em sua conta.`);
};

Conta.prototype.verSaldo = function () {
  console.log(`Saldo Atual na Conta (${this.conta}): R$${this.saldo}`);
};

/* const conta1 = new Conta("Felipe Almeida", 0001, 123456, 2600);
conta1.depositar(1500);
conta1.verSaldo(); */

const conta2 = new contaPoupanca("Felipe Almeida", 0001, 123456, 2600);
conta2.sacar(2600);
conta2.verSaldo();
