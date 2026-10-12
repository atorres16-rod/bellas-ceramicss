function addToCart(product){
  alert(product + " fue añadido al carrito. ¡Gracias por elegir Bellas Ceramic! 🐾");
}
function subscribe(){
  const input=document.querySelector('.subscribe input');
  if(input.value.trim()){
    alert("¡Gracias! Te enviaremos novedades de Bellas Ceramic.");
    input.value="";
  }else{
    alert("Escribe tu correo electrónico.");
  }
}
