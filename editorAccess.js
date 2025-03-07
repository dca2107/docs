// editorAccess.js

document.addEventListener('DOMContentLoaded', function() {
  // Credenciales válidas para acceso como editor
  const validUsername = "eyrdiscommv";
  const validPassword = "eyr.discom.mv.2025";

  const loginForm = document.getElementById('loginForm');

  if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      if (username === validUsername && password === validPassword) {
        // Marcar sesión (simulación) y redirigir a editor.html
        localStorage.setItem('loggedIn', 'true');
        window.location.href = "editor.html";
      } else {
        alert('Credenciales incorrectas. Inténtalo nuevamente.');
      }
    });
  }

  // Mostrar modal al hacer clic en el botón semi escondido
  document.getElementById('redactor-tools-btn').addEventListener('click', function() {
    document.getElementById('loginModal').style.display = 'block';
  });

  // Cerrar modal al hacer clic fuera de él
  window.addEventListener('click', function(event) {
    if (event.target === document.getElementById('loginModal')) {
      document.getElementById('loginModal').style.display = 'none';
    }
  });
});
