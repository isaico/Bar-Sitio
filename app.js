const inputButton = document.getElementById("input-button");
const burbujaContainer = document.getElementById("burbuja-container");
const tragosContainer = document.getElementById("tragos-container");
const selected = document.getElementById("selected");
var counterClick = 0;

//===============dibujo tragos
const mostrarTrago = (tragos) => {
  tragosContainer.innerHTML = "";

  tragos.forEach((trago) => {
    const tragoIncluido = document.createElement("div");

    tragoIncluido.innerHTML = `

       <span class="trago-desc"> <b>nombre: </b> ${trago.nombre} </br></span>
      <span class="trago-desc"> <b>ingredientes: </b>${trago.ingredientes.toString()}</br></span>
      <span class="trago-desc"> <b>preparacion: </b> ${
        trago.preparacion
      }</br></span>
      </br>`;

    tragoIncluido.className = "trago";
    tragosContainer.appendChild(tragoIncluido);
  });
};

const borrarTrago = () => {
  tragosContainer.innerHTML = "";
};

//===============
//============filter=================//

//selector de las opciones
function selectorIngred() {
  const opcion = document.querySelectorAll("span.burbuja");

  let tragosFiltrados;
  opcion.forEach((element) => {
    element.addEventListener("click", function () {

      tragosContainer.innerHTML = "";

      let ingredSelected = element.innerHTML.toString();
      // element.classList.remove("burbuja")
      crearSeleccionados(ingredSelected)
      
      counterPlus(element);

      console.log("contador: " + counterClick);
      if (!element.classList.contains("burbuja-activa")) {
        if (counterClick == 1) { //si hay 1 solo click
          
          tragosFiltrados = primerClick(ingredSelected, tragos);
          ingredIncluido(ingred, ingredSelected);
          tragosPrimerClick=[...tragosFiltrados]
          if (tragosFiltrados.length > 1) { //si hay mas de 1 trago mostrado

            let filteredIngred = listaIngredUser(tragosFiltrados); //retorna ingredientes filtradas
            borraBurbujaRepetida(filteredIngred,tragosFiltrados)

          } else { //si hay 1 solo trago mostrado

            let arr = [];
            listaIngredUser(arr);

          }
        } else { //si hay mas de 1 click
        
          tragosFiltrados = segundoClick(ingred, ingredSelected, tragosPrimerClick);
          ingredIncluido(ingred, ingredSelected);
          
          if (tragosFiltrados.length > 1) { //si hay mas de 1 elemento

            let filteredIngred = listaIngredUser(tragosFiltrados);
            borraBurbujaRepetida(filteredIngred,tragosFiltrados)

          } else {

            let arr = [];
            listaIngredUser(arr);

          }
        }
      }
      mostrarTrago(tragosFiltrados);
    });
  });
}

//filtro
const filtrarTragos = (ingrediente, tragos) => {

  let tragosFiltrados = [];
  let tragosFiltradosDup = [];

  console.log("clickeados: " + ingrediente);
  tragos.forEach((trago) => {
    if (trago.ingredientes.includes(ingrediente)) {
      tragosFiltradosDup.push(trago);
    }

    tragosFiltrados = [...new Set(tragosFiltradosDup)];
  });

  console.log("antes de retorno: ");
  console.log(tragosFiltrados);
  return tragosFiltrados;
};
function crearSeleccionados(ingredSelected) {
  let divIngredSelected=document.createElement("div")
  divIngredSelected.innerHTML=`<span class="burbuja-activa">${ingredSelected}</span>`
  selected.appendChild(divIngredSelected);
}

//============= Bloque de funciones modularizadas y de filtrado de arrays

//si hay un solo click, le pasa un ingrediente y un arreglo de tragos y retorna un nuevo arreglo
function primerClick(ingrediente, tragos) {
  let auxFilter = filtrarTragos(ingrediente, tragos); //llamo al filtro y le paso el array completo
  return auxFilter;
}

//si hay mas de un solo click, llama a la funcion anterior, recibe un arreglo de ingredientes, un string y un arreglo de tragos
function segundoClick(arregloIngred, ingredienteNuevo, tragos) {
  let arraylength = arregloIngred.length - 1;
  auxFilter = primerClick(arregloIngred[arraylength], tragos); //obtengo un arreglo filtrado
  let filtrados = filtrarTragos(ingredienteNuevo, auxFilter); //llamo al filtro pero le paso un array previamente filtrado
  return filtrados;
}

function ingredIncluido(ingred, ingredSelected) {
  if (ingred.includes(ingredSelected) == false) {
    ingred.push(ingredSelected);
  }
  
}

function counterPlus(element) {
  if (!element.classList.contains("burbuja-activa")) {
    counterClick++;
  }
}
function borraBurbujaRepetida(arrayIngred,arrayTragos) {
  let arrayBoolean=[]

  arrayIngred=eliminarClickeados(arrayIngred)

  arrayIngred.forEach((ing,index)=>{

    for (let i = 0; i < arrayTragos.length; i++) {
      
      if(arrayTragos[i].ingredientes.includes(ing)){
        arrayBoolean.push(true)
      }else{
        arrayBoolean.push(false)
      }
    }
    
    
    if(!arrayBoolean.includes(false)){

      arrayIngred.splice(index,1)//ingrediente a borrar de la lista
      renderIngredientes(arrayIngred)
    }

    arrayBoolean=[]
  })
 
}
function eliminarClickeados(array) {

  ingred.forEach((e)=>{
    
    let indexIng=array.indexOf(e)
    array.splice(indexIng,1)
  })
  renderIngredientes(array)
  return array
}
//================

//=======borrar seleccion==========
function borrarSeleccionados() {
  document.getElementById("reset").addEventListener("click", function () {
    ingred = [];
    let borrar = document.querySelectorAll("span.burbuja");
    borrar.forEach((e) => {
      e.classList.remove("burbuja-activa");
    });
    listaIngredUser(tragos);
    mostrarTrago(tragos);
    counterClick = 0;
    selected.innerHTML = "";
  });
}
