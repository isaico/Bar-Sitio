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
     
    tragoIncluido.innerHTML += `
      
    <span class="trago-name"> ${trago.nombre} </br></span>
    
    <span class="trago-desc"> Ingredientes: </span>
    
    `
    for (let i = 0; i < trago.ingredientes.length; i++) {
     
     
      tragoIncluido.innerHTML += `
      
      <li class="elemento-lista.">${trago.ingredientes[i]}</li>
      
      `
      
    }
    tragoIncluido.innerHTML += `
    
    
      <div>
        <span class="trago-desc">
         Preparacion:
        </span>
        <p>
        ${trago.preparacion}
        </p>
       </div>
      `;
      
      tragoIncluido.className = "trago neon-font";
      tragosContainer.appendChild(tragoIncluido);
    });
};

const borrarTrago = () => {
  tragosContainer.innerHTML = "";
};

//===============
//============Funciones principales=================//

//selector de las opciones(agrega un escucha a los span)
function selectorIngred() {
  const opcion = document.querySelectorAll("span.burbuja");

  let tragosFiltrados;
  opcion.forEach((element) => {
    element.addEventListener("click", function () {
      tragosContainer.innerHTML = "";

      let ingredSelected = element.innerHTML.toString();

      crearSeleccionados(ingredSelected);
      counterPlus(element);

      if (!element.classList.contains("burbuja-activa")) {
        if (counterClick == 1) {
          //si hay 1 solo click

          tragosFiltrados = primerClick(ingredSelected, tragos);
          ingredIncluido(ingred, ingredSelected);
          tragosPrimerClick = [...tragosFiltrados]; //obtengo un array filtrado para luego usarlo en la siguiente opcion clickeada

          dependencia(tragosFiltrados);
        } else {
          //si hay mas de 1 click

          tragosFiltrados = segundoClick(
            ingred,
            ingredSelected,
            tragosPrimerClick
          );
          ingredIncluido(ingred, ingredSelected);

          dependencia(tragosFiltrados);
        }
      }
      mostrarTrago(tragosFiltrados);
    });
  });
}
//dependiendo de los clicks y los tragos mostrados se ejecuta esta funcion para borrar y mostrar
function dependencia(tragosFiltrados) {
  if (tragosFiltrados.length > 1) {
    //si hay mas de 1 trago mostrado

    let filteredIngred = listaIngredUser(tragosFiltrados); //retorna ingredientes filtradas
    borraBurbujaRepetida(filteredIngred, tragosFiltrados);
  } else {
    //si hay 1 solo trago mostrado

    let arr = [];
    listaIngredUser(arr);
  }
}

//filtro de tragos
const filtrarTragos = (ingrediente, tragos) => {
  let tragosFiltrados = [];
  let tragosFiltradosDup = [];

  tragos.forEach((trago) => {
    if (trago.ingredientes.includes(ingrediente)) {
      tragosFiltradosDup.push(trago);
    }

    tragosFiltrados = [...new Set(tragosFiltradosDup)];
  });

  return tragosFiltrados;
};
//======================
//============= Bloque de funciones modularizadas y de filtrado de arrays

function crearSeleccionados(ingredSelected) {
  let divIngredSelected = document.createElement("div");
  divIngredSelected.innerHTML = `<span class="burbuja-activa">${ingredSelected}</span>`;
  selected.appendChild(divIngredSelected);
}

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
//mete en un array las opciones clickeadas del usuario
function ingredIncluido(ingred, ingredSelected) {
  if (ingred.includes(ingredSelected) == false) {
    ingred.push(ingredSelected);
  }
}
//contador
function counterPlus(element) {
  if (!element.classList.contains("burbuja-activa")) {
    counterClick++;
  }
}
//borra las opciones que esten incluidas en todos los tragos 
function borraBurbujaRepetida(arrayIngred, arrayTragos) {
  let arrayBoolean = [];

  arrayIngred = eliminarClickeados(arrayIngred);

  arrayIngred.forEach((ing, index) => {
    for (let i = 0; i < arrayTragos.length; i++) {
      if (arrayTragos[i].ingredientes.includes(ing)) {
        arrayBoolean.push(true);
      } else {
        arrayBoolean.push(false);
      }
    }

    if (!arrayBoolean.includes(false)) {
      arrayIngred.splice(index, 1); //ingrediente a borrar de la lista
      renderIngredientes(arrayIngred);
    }

    arrayBoolean = [];
  });
}
// borra las opciones que esten clickeadas por el usuario
function eliminarClickeados(array) {
  ingred.forEach((e) => {
    let indexIng = array.indexOf(e);
    array.splice(indexIng, 1);
  });
  renderIngredientes(array);
  return array;
}
//================

//=======borrar seleccion==========
//resetea todas las opciones
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
