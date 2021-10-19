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


