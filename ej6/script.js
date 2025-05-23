document.getElementById('formulario').addEventListener('submit', function(event) {
  event.preventDefault();

  const nombre = document.getElementById('nombre');
  const apellido = document.getElementById('apellido');
  const edad = document.getElementById('edad');
  const altura = document.getElementById('altura');
  const correo = document.getElementById('correo');

  const errorNombre = document.getElementById('errorNombre');
  const errorApellido = document.getElementById('errorApellido');
  const errorEdad = document.getElementById('errorEdad');
  const errorAltura = document.getElementById('errorAltura');
  const errorCorreo = document.getElementById('errorCorreo');
  const resultado = document.getElementById('resultado');

  let esValido = true;
  const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validar nombre
  if (!soloLetras.test(nombre.value.trim())) {
    errorNombre.textContent = 'El nombre solo debe contener letras.';
    nombre.classList.add('incorrecto');
    nombre.classList.remove('correcto');
    esValido = false;
  } else {
    errorNombre.textContent = '';
    nombre.classList.add('correcto');
    nombre.classList.remove('incorrecto');
  }

  // Validar apellido
  if (!soloLetras.test(apellido.value.trim())) {
    errorApellido.textContent = 'El apellido solo debe contener letras.';
    apellido.classList.add('incorrecto');
    apellido.classList.remove('correcto');
    esValido = false;
  } else {
    errorApellido.textContent = '';
    apellido.classList.add('correcto');
    apellido.classList.remove('incorrecto');
  }

  // Validar edad
  const edadVal = parseInt(edad.value);
  if (isNaN(edadVal) || edadVal <= 0) {
    errorEdad.textContent = 'La edad debe ser mayor a 0.';
    edad.classList.add('incorrecto');
    edad.classList.remove('correcto');
    esValido = false;
  } else if (edadVal < 18) {
    errorEdad.textContent = 'Debe ser mayor de edad.';
    edad.classList.add('incorrecto');
    edad.classList.remove('correcto');
    esValido = false;
  } else {
    errorEdad.textContent = '';
    edad.classList.add('correcto');
    edad.classList.remove('incorrecto');
  }

  // Validar altura
  const alturaVal = parseInt(altura.value);
  if (isNaN(alturaVal) || alturaVal <= 0) {
    errorAltura.textContent = 'La altura debe ser mayor a 0.';
    altura.classList.add('incorrecto');
    altura.classList.remove('correcto');
    esValido = false;
  } else {
    errorAltura.textContent = '';
    altura.classList.add('correcto');
    altura.classList.remove('incorrecto');
  }

  // Validar correo
  if (!emailRegex.test(correo.value.trim())) {
    errorCorreo.textContent = 'Ingrese un correo electrónico válido.';
    correo.classList.add('incorrecto');
    correo.classList.remove('correcto');
    esValido = false;
  } else {
    errorCorreo.textContent = '';
    correo.classList.add('correcto');
    correo.classList.remove('incorrecto');
  }

  // Mostrar resultado
  if (esValido) {
    resultado.textContent = `Formulario enviado correctamente. Bienvenido/a, ${nombre.value} ${apellido.value}.`;
    resultado.style.color = 'green';
    this.reset();
    [nombre, apellido, edad, altura, correo].forEach(input => input.classList.remove('correcto'));
  } else {
    resultado.textContent = 'Corrige los errores antes de enviar el formulario.';
    resultado.style.color = 'red';
  }
});
