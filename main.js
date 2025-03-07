// main.js

document.addEventListener('DOMContentLoaded', function() {
  // Función para aplicar formato (usando document.execCommand)
  window.formatText = function(command) {
    document.execCommand(command, false, null);
  };

  // Función para guardar el artículo sin mostrar alert y redireccionar a la vista previa
  window.saveArticle = function() {
    // Recoger datos del formulario
    const title = document.getElementById('articleTitle').value.trim();
    const content = document.getElementById('editor').innerHTML;
    const tags = document.getElementById('tags').value.trim();

    if (!title || !content) {
      alert("Por favor, ingresa un título y contenido para el artículo.");
      return;
    }

    // Obtener fecha actual en formato DD/MM/AAAA
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const dateStr = `${day}/${month}/${year}`;

    // Generar un id único (por ejemplo, usando timestamp)
    const id = Date.now().toString();

    // Crear objeto artículo
    const article = {
      id,
      title,
      content,
      tags,
      date: dateStr
    };

    // Obtener los artículos guardados de localStorage
    let articles = JSON.parse(localStorage.getItem('articles') || '[]');
    articles.unshift(article); // lo agregamos al inicio para que sea el más reciente
    localStorage.setItem('articles', JSON.stringify(articles));

    // Redirigir a la página de vista previa con el id del artículo
    window.location.href = `preview.html?id=${id}`;
  };

  // Cargar la lista de artículos recientes en la página principal
  function loadRecentArticles() {
    const articlesListDiv = document.getElementById('articlesList');
    if (!articlesListDiv) return;
    const articles = JSON.parse(localStorage.getItem('articles') || '[]');
    let html = '';
    articles.forEach(article => {
      html += `
        <div class="article-item" onclick="window.location.href='preview.html?id=${article.id}'">
          <h3>${article.title}</h3>
          <p class="article-date">${article.date}</p>
        </div>
      `;
    });
    articlesListDiv.innerHTML = html;
  }

  loadRecentArticles();

  // Si se hace logout, ocultamos el panel del editor
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', function() {
      document.getElementById('editorSection').style.display = 'none';
    });
  }
});
