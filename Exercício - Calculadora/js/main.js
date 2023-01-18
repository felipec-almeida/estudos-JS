function escopoFormulario() {
  const form = document.querySelector(".formulario");
  const resultado = document.querySelector(".formulario-resultado");
  const select = document.getElementById("IdSelect");

  class Calculadora {
    constructor(tipo, valor1, valor2) {
      this.tipo = tipo;
      this.valor1 = parseInt(valor1);
      this.valor2 = parseInt(valor2);
    }

    verificaTipoCalculo() {
      if (this.tipo == "adicao") {
        return calcAdicao(this.valor1, this.valor2);
      } else if (this.tipo == "subtracao") {
        return calcSubtracao(this.valor1, this.valor2);
      } else if (this.tipo == "multiplicacao") {
        return calcMultiplicacao(this.valor1, this.valor2);
      } else if (this.tipo == "divisao") {
        return calcDivisao(this.valor1, this.valor2);
      }
    }
  }

  const calcAdicao = function (valor1, valor2) {
    let resultado = parseInt(valor1 + valor2);
    return resultado;
  };

  const calcSubtracao = function (valor1, valor2) {
    let resultado = parseInt(valor1 - valor2);
    return resultado;
  };

  const calcMultiplicacao = function (valor1, valor2) {
    let resultado = parseInt(valor1 * valor2);
    return resultado;
  };

  const calcDivisao = function (valor1, valor2) {
    let resultado = parseInt(valor1 / valor2);
    return resultado;
  };

  function recebeEventoForm(evento) {
    evento.preventDefault();

    const tipo = select.options[select.selectedIndex].value;
    const valor1 = form.querySelector(".value1");
    const valor2 = form.querySelector(".value2");

    const calculadora = new Calculadora(tipo, valor1.value, valor2.value);
    resultado.innerHTML =
    `<input id="IdResultado" class="form-control" disabled type="text" value="${calculadora.verificaTipoCalculo()}">`
    + `<label for="IdResultado">Resultado do Cálculo:</label>`;
  }

  form.addEventListener("submit", recebeEventoForm);
}

escopoFormulario();
