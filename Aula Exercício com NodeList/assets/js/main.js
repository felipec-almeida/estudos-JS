const class_paragrafos = document.querySelector(".paragrafos");
const tags_p = class_paragrafos.querySelectorAll("p");

const bodyStyle = getComputedStyle(document.body);
const bodyBackgroundColor = bodyStyle.backgroundColor;

function mudaStyleParagrafo() {
  for (let p of tags_p) {
    p.style.backgroundColor = bodyBackgroundColor;
    p.style.borderRadius = "5px";
    p.style.textAlign = "justify";
    p.style.padding = "5px";
    p.style.color = "white";
  }

  return alert("Configurações alteradas.");
}
