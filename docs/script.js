//seleccionar todas las tarjetas
const tarjetas = document.querySelectorAll('.tarjeta');

//variables para controlar el estado del juego
let primeraTarjeta = null;
let segundaTarjeta = null;
let bloqueo = false;

//agregar evento clic a cada tarjeta
tarjetas.forEach(tarjeta => {
  tarjeta.addEventListener('click', () => {
    if (bloqueo) return; //si el juego está bloqueado, no hacer nada
    if (tarjeta === primeraTarjeta) return; //evitar doble clic en la misma tarjeta

    tarjeta.classList.add('activa'); //voltear la tarjeta

    if (!primeraTarjeta) {
      //si no hay una primera tarjeta seleccionada
      primeraTarjeta = tarjeta;
    } else {
      //ya hay una primera, esta es la segunda
      segundaTarjeta = tarjeta;
      compararTarjetas();
    }
  });
});

//función para comparar las dos tarjetas
function compararTarjetas() {
  const emoji1 = primeraTarjeta.querySelector('.contenido').textContent;
  const emoji2 = segundaTarjeta.querySelector('.contenido').textContent;

  if (emoji1 === emoji2) {
    //coinciden entonces dejarlas visibles
    resetSeleccion();
  } else {
    //no coinciden por ende ocultarlas de nuevo 
    bloqueo = true;
    setTimeout(() => {
      primeraTarjeta.classList.remove('activa');
      segundaTarjeta.classList.remove('activa');
      resetSeleccion();
    }, 1000);
  }
}

//resetear variables de selección
function resetSeleccion() {
  primeraTarjeta = null;
  segundaTarjeta = null;
  bloqueo = false;
}
