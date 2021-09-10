const inputButton=document.getElementById("input-button")
const burbujaContainer=document.getElementById("burbuja-container")

inputButton.addEventListener("click",function(e){
  e.preventDefault()
  var ingrediente= document.getElementById("input-ingrediente").value
  creaBurbuja(ingrediente)
})
//dibujo burbujas con los ingredientes
const creaBurbuja=(ingrediente)=>{
  
  console.log(ingrediente)
  const contenidoBurbuja=document.createElement("div")
  contenidoBurbuja.innerHTML=`<span class="burbuja">${ingrediente}</span>`
  burbujaContainer.appendChild(contenidoBurbuja)
 
}