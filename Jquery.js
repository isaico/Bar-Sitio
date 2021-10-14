
  //este bloque filtra los ingredientes de cada trago para darle las opciones clickeables al usuario  
  //pasa todos los ingredientes a un arreglo, luego reduce el mismo
  function listaIngredUser(arrayTragos) {
    
    
    var allIngredientes=[]
 
    
    for (let i=0; i<arrayTragos.length; i++){
      let aux=arrayTragos[i].ingredientes.length
      
      for (let j = 0; j <aux; j++) {
        if(!allIngredientes.includes(arrayTragos[i].ingredientes[j])){
          allIngredientes.push(arrayTragos[i].ingredientes[j])
          
        }

        // var copiaIngred=[...arrayIngred]
        //   if(copiaIngred.length>0){
      //     for (let index = 0; index < copiaIngred.length; index++) {
            
      //       if(copiaIngred[index]!=arrayTragos[i].ingredientes[j]){//no agrega el ingrediente seleccionado
              
      //         allIngredientes.push(arrayTragos[i].ingredientes[j])
  
      //       }
      //     }

      //   }else{

      //     if(copiaIngred[0]!=arrayTragos[i].ingredientes[j]){//no agrega el ingrediente seleccionado
          
      //       allIngredientes.push(arrayTragos[i].ingredientes[j])

      //     }
      //  }
      }
        
    }
  

    console.log(allIngredientes)
    
    //ordeno alfabeticamente
    allIngredientes.sort()

    renderIngredientes(allIngredientes)
    
    
    return allIngredientes
  }
  function renderIngredientes (arrayIngredientes) {

    document.getElementById("burbuja-container").innerHTML=""
    for (let k = 0; k < arrayIngredientes.length; k++) {
      
      //crea los ingredientes disponibles para los tragos
      $("#burbuja-container").append(` 
      <span class="burbuja">${arrayIngredientes[k]}</span>
      `)
      
    }
    //limito el selector a que solo haga click en las etiquetas span
    
    $("#burbuja-container").on("click",function(e){
      
    if(e.target && e.target.tagName === 'SPAN'){
      
      e.target.classList.add("burbuja-activa")
      
    }
    
  })
  selectorIngred()
}
  

  