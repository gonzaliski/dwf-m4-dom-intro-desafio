const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function removeChildren(parent){
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function createNewElements(){
  const ulEl = document.querySelector('ul')
 
  const ElResult = cosasQueAprendimos.forEach((p)=>{

    const newLiEl = document.createElement("li");
    newLiEl.textContent = p.tema;
    if(p.class){ newLiEl.classList.add(p.class) }
    ulEl.appendChild(newLiEl);
    
  })
}


function main() {
  const ulEl = document.querySelector('ul')
  removeChildren(ulEl);
 
  createNewElements();

}

main();
