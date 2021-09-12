//clase para los elementos del array
class Trago {
  constructor(idNumber, nombre, ingredientes, preparacion) {
    this.idNumber = idNumber;
    this.nombre = nombre;
    this.ingredientes = ingredientes;
    this.preparacion = preparacion;
  }
}

//arreglo de tragos
const tragos = [
  new Trago(
    2,
    "caipiriña",
    ["hielo", "lima", "azucar", "cachaca"],
    "macerar lima y azucar, agregar  hielo roto y cachaca/vodka/ron lo que queramos"
  ),

  new Trago(
    1,
    "mojito",
    ["hielo", "lima", "azucar", "ron", "menta", "soda"],
    "macerar lima y azucar, agregar menta, hielo roto, ron, y terminar con soda"
  ),

  new Trago(
    3,
    "julepe de cynar",
    ["hielo", "lima", "azucar", "cynar", "menta", "gaseosa pomelo"],
    "macerar lima y azucar, agregar menta, hielo roto, cynar, y terminar con gaseosa pomelo"
  ),
];
//arreglo de ingredientes ingresados por usuario
var ingred = [];
