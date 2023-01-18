const inputTarefa = document.querySelector(".input-tarefa");
const btnTarefa = document.querySelector(".btn-tarefa");
const listaTarefa = document.querySelector(".lista-tarefa");

function salvaTarefa() {
  const liTarefa = listaTarefa.querySelectorAll("li");
  const listaDeTarefa = [];

  for (let tarefa of liTarefa) {
    console.log(tarefa.innerText);
  }
}

function criaBotaoApagar(div) {
  const botaoApagar = document.createElement("button");
  botaoApagar.classList.add(
    "btn",
    "btn-outline-secondary",
    "btn-remove-tarefa"
  );
  botaoApagar.innerText = "Apagar Tarefa";
  div.appendChild(botaoApagar);
}

function criaTarefa(tarefa) {
  const div = criaDiv();
  const li = criaLista();
  li.innerText = tarefa;
  listaTarefa.appendChild(div);
  div.appendChild(li);
  criaBotaoApagar(div);
  salvaTarefa();
}

function limpaInput() {
  inputTarefa.value = null;
  inputTarefa.focus();
}

function criaDiv() {
  const div = document.createElement("div");
  div.classList.add("input-group");
  return div;
}

function criaLista() {
  const li = document.createElement("li");
  li.classList.add("list-group-item", "list-group-item-secondary");
  return li;
}

inputTarefa.addEventListener("keypress", (evento) => {
  if (evento.keyCode == 13) {
    criaTarefa(inputTarefa.value);
    limpaInput();
  }
});

btnTarefa.addEventListener("click", () => {
  if (!inputTarefa.value) return;
  criaTarefa(inputTarefa.value);
  limpaInput();
});

document.addEventListener("click", (evento) => {
  const elemento = evento.target;

  if (elemento.classList.contains("btn-remove-tarefa")) {
    elemento.parentElement.remove();
  }
});
