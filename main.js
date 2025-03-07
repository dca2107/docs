// main.js

document.addEventListener('DOMContentLoaded', function() {
  // Función para aplicar formato en el editor (usando document.execCommand)
  window.formatText = function(command) {
    document.execCommand(command, false, null);
  };

  // Manejo del menú: mostrar secciones de edición o redacción
  const editArticleBtn = document.getElementById('editArticleBtn');
  const newArticleBtn = document.getElementById('newArticleBtn');
  const editSection = document.getElementById('editSection');
  const newArticleSection = document.getElementById('newArticleSection');
  const logoutBtn = document.getElementById('logoutBtn');

  if (editArticleBtn) {
    editArticleBtn.addEventListener('click', function() {
      editSection.style.display = 'block';
      newArticleSection.style.display = 'none';
    });
  }

  if (newArticleBtn) {
    newArticleBtn.addEventListener('click', function() {
      newArticleSection.style.display = 'block';
      editSection.style.display = 'none';
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener('click', function() {
      // Cerrar el panel del editor
      document.getElementById('editorSection').style.display = 'none';
    });
  }
  
  // Función para "guardar" el artículo (simulación)
  window.saveArticle = function() {
    const content = document.getElementById('editor').innerHTML;
    const tags = document.getElementById('tags').value;
    // Aquí se podría integrar con un backend o API para persistir el artículo
    alert('Artículo guardado (simulación):\nContenido: ' + content + '\nEtiquetas: ' + tags);
    // Reiniciar el editor
    document.getElementById('editor').innerHTML = 'Escribe aquí tu artículo...';
    document.getElementById('tags').value = '';
  };
});
