const inputButton = document.getElementById("input-button");
const burbujaContainer = document.getElementById("burbuja-container");
const deleteButton = document.getElementById("close");
const searchButton = document.getElementById("search");

inputButton.addEventListener("click", function (e) {
  e.preventDefault();
  var ingrediente = document.getElementById("input-ingrediente").value;
  creaBurbuja(ingrediente);
});
//dibujo burbujas con los ingredientes
const creaBurbuja = (ingrediente) => {
  const contenidoBurbuja = document.createElement("div");

  contenidoBurbuja.innerHTML = `<span class="burbuja">${ingrediente}</span>`;
  contenidoBurbuja.className = "burbuja-div";

  burbujaContainer.appendChild(contenidoBurbuja);
  ingred.push(ingrediente);
  console.log(ingred);
};

//borro las burbujas
deleteButton.addEventListener(
  "click",
  (borraBurbuja = () => {
    console.log(ingred);
    burbujaContainer.innerHTML = ``;
    ingred = []; //borro los elementos del array
  })
);

//busco en arreglo
searchButton.addEventListener("click", function buscador() {
  for (let i = 0; i < tragos.length; i++) {
    let aux = tragos[i].ingredientes.length; //largo del arreglo ingredientes
    console.log(aux);
    for (let j = 0; j < aux; j++) {
      console.log(tragos[i].ingredientes[j])
      for (let k = 0; k < ingred.length; k++) {
        
        if(tragos[i].ingredientes[j]==ingred[k])
        alert("hola")
        console.log("hola")
        
      }
      // for (let k = 0; k < ingred.length; k++) {
      //   const found = tragos.find((elemento) => elemento == ingred[k]);
      //   console.log(found);
      // }
    }
  }
});

// for(let j=0; j<aux; j++){
//   let auxIngred=tragos[j].ingredientes[]//variable q almacena el ingrediente
//   for(let k=0; k<ingred.length; k++)

//     if(auxIngred==ingred[k]){
//       alert("hola")
//     }
// }
// }
// console.log(tragos)
