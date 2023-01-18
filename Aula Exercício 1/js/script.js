function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    class Pessoa {

        constructor(nome, sobrenome, altura, peso) {

            this.nome = nome;
            this.sobrenome = sobrenome;
            this.altura = altura;
            this.peso = peso;

        }

    }

    function recebeEventoForm(evento)  {
        evento.preventDefault();

        const nome = form.querySelector('.form-nome');
        const sobrenome = form.querySelector('.form-sobrenome');
        const altura = form.querySelector('.form-altura');
        const peso= form.querySelector('.form-peso');

        const pessoas = new Pessoa(nome.value, sobrenome.value, altura.value, peso.value);
        console.log(pessoas);

        resultado.innerHTML += `<p class="strong lead mt-4"><strong>Informações: ${nome.value} ${sobrenome.value}, ${altura.value}m, ${peso.value}kg</strong></p>`;
    }

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();    