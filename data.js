//clase para los elementos del array
class Trago {
  constructor(nombre, ingredientes, preparacion) {
    this.nombre = nombre;
    this.ingredientes = ingredientes;
    this.preparacion = preparacion;
  
  }
}

//arreglo de ingredientes ingresados por usuario
var ingred = [];
var tragos = [];
var tragosPrimerClick=[];

//metodo get para el JSON local
$(() => {
  fetch("GET.json")
    .then((respuesta) => respuesta.json())
    .then((datos) => {
      for (let dato of datos) {
        
        tragos.push(
          new Trago(dato.nombre, dato.ingredientes, dato.preparacion,dato.verdaderos)
        );
      }
     
  
      //===============Render de los tragos

      mostrarTrago(tragos);


      //============burbujas mostradas de los ingredientes===========

      listaIngredUser(tragos);

      //============filter=================//

      //selector de las opciones
      
      // selectorIngred()
        //filtro
        
      // filtrarTragos(ingred)
      
      
      //===========Borrar=================//
      borrarSeleccionados()
      
      
    });
    
});


      

      


//===========comentarios==========
//locale storage
/*
//almacena el array de objetos en Locale
const tragosJSON = JSON.stringify(tragosSinJSON);
localStorage.setItem("Tragos", tragosJSON);

//obtiene el array de objetos de Locale
const tragos = JSON.parse(localStorage.getItem("Tragos"));
console.log(tragos);
*/

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
