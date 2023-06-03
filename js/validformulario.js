var nombre = document.getElementById('nombre');
var correo = document.getElementById('correo');
var telefono = document.getElementById('telefono');
var error = document.getElementById('error');
error.style.color = 'red'

const email = document.getElementById('mail');

function enviarFormulario(){
  console.log('Enviando formulario...');

  var mensajesError = [];

  if(nombre.value === null || nombre.value === ''){
      mensajesError.Error.push('Ingresa tu nombre');
  }

  if(correo.value === null || correo.value === ''){
      mensajesError.Error.push('Ingresa tu correo');
  }

  if(telefono.value === null || telefono.value === ''){
      mensajesError.Error.push('Ingresa tu teléfono');
  }

error.innerHTML = mensajesError.join(',');

return false;
}

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("¡Se esperaba una dirección de correo electrónico!");
  } else {
    email.setCustomValidity("");
  }
});


  