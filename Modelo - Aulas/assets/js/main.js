function escopoFormulario() {
    const form = document.querySelector('.formulario');
    const resultado = document.querySelector('.form-resultado');

    class Formulario {

        constructor(peso, altura) {

            this.peso = parseInt(peso);
            this.altura = parseFloat(altura);

        }

    }

    const calculaIMC = function(peso, altura) {
        const resultado = parseFloat(peso / (altura * altura));
        return resultado.toFixed(2);
    }

    function recebeEventoForm(evento) {
        evento.preventDefault();

        const peso = form.querySelector('.form-peso');
        const altura = form.querySelector('.form-altura');

        const formulario = new Formulario(peso.value, altura.value);
        console.log(formulario);

        resultado.innerHTML +=
            `<label><strong>Seu Resultado de IMC: </strong></label>` +
            `<input type="text" placeholder="${calculaIMC(formulario.peso, formulario.altura)}" disabled>`;

    }

    form.addEventListener('submit', recebeEventoForm);

}

escopoFormulario();