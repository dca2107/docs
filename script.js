// editorAccess.js

document.addEventListener('DOMContentLoaded', function() {
  // Credenciales válidas
  const validUsername = "eyrdiscommv";
  const validPassword = "eyr.discom.mv.2025";

  // Seleccionar el formulario de login
  const loginForm = document.getElementById('loginForm');

  if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();

      // Obtener valores ingresados en el formulario
      const usernameInput = document.getElementById('username');
      const passwordInput = document.getElementById('password');
      const username = usernameInput.value;
      const password = passwordInput.value;

      // Validar credenciales
      if (username === validUsername && password === validPassword) {
        alert('Acceso concedido. Bienvenido, editor.');

        // Ejemplo: mostrar la sección de edición (asegúrate de tener un contenedor con id "editorSection")
        const editorSection = document.getElementById('editorSection');
        if (editorSection) {
          editorSection.style.display = 'block';
        }
        // Opcional: ocultar el formulario de login
        loginForm.style.display = 'none';
      } else {
        alert('Credenciales incorrectas. Inténtalo nuevamente.');
      }
    });
  }
});
