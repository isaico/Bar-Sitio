//clase para los elementos del array
class Trago {
  constructor(nombre, ingredientes, preparacion) {
    this.nombre = nombre;
    this.ingredientes = ingredientes;
    this.preparacion = preparacion;
    
  }
}

//arreglos globales
var ingred = [];
var tragos = [];
var tragosPrimerClick=[];

//metodo get para el JSON local
$(() => {
  fetch("GET.JSON")
    .then((respuesta) => respuesta.json())
    .then((datos) => {
      for (let dato of datos) {
        
        tragos.push(
          new Trago(dato.nombre, dato.ingredientes, dato.preparacion,dato.verdaderos)
        );
      }
     
  
      //===============Render de los tragos

      mostrarTrago(tragos);


      //============funcion de mostrado principal ===========
      //esta funcion desencadena las siguientes
      listaIngredUser(tragos);
      
      
      //===========Borrar=================//
      borrarSeleccionados()
      
      
    });
    
});

//locale storage

//almacena el array de objetos en Locale
// function guardarJSON(tragosPrimerClick){
//   const tragosJSON = JSON.stringify(tragosPrimerClick);
//   localStorage.setItem("Tragos Filtrados por un Click", tragosJSON);

// }
      

      


//===========comentarios==========


//obtiene el array de objetos de Locale
// const tragos = JSON.parse(localStorage.getItem("Tragos"));
// console.log(tragos);


//arreglo de tragos
/*
const tragosSinJSON = [
  new Trago(
    
    "caipiriña",
    ["hielo", "lima", "azucar", "cachaca"],
    "macerar lima y azucar, agregar  hielo roto y cachaca, luego batir"
  ),

  new Trago(
    
    "mojito",
    ["hielo", "lima", "azucar", "ron", "menta", "soda"],
    "macerar lima y azucar, agregar menta, hielo roto, ron, y terminar con soda"
  ),

  new Trago(
    
    "julepe de cynar",
    ["hielo", "lima", "azucar", "cynar", "menta", "gaseosa pomelo"],
    "macerar lima y azucar, agregar menta, hielo roto, cynar, y terminar con gaseosa pomelo"
  ),
];
*/
