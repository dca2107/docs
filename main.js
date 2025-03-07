// main.js

document.addEventListener('DOMContentLoaded', function() {
  // Función para aplicar formato (usando document.execCommand)
  window.formatText = function(command) {
    document.execCommand(command, false, null);
  };

  // Función para publicar el artículo (desde editor.html)
  window.publishArticle = function() {
    const title = document.getElementById('articleTitle').value.trim();
    const content = document.getElementById('editor').innerHTML;
    const tags = document.getElementById('tags').value.trim();
    if (!title || !content) {
      alert("Por favor, ingresa un título y contenido para el artículo.");
      return;
    }
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const dateStr = `${day}/${month}/${year}`;
    const id = Date.now().toString();
    const article = { id, title, content, tags, date: dateStr };

    // Guardar en la lista de artículos publicados
    let articles = JSON.parse(localStorage.getItem('articles') || '[]');
    articles.unshift(article);
    localStorage.setItem('articles', JSON.stringify(articles));

    // Redirigir a la vista previa del artículo publicado
    window.location.href = `preview.html?id=${id}`;
  };

  // Función para guardar un borrador (desde editor.html)
  window.saveDraft = function() {
    const title = document.getElementById('articleTitle').value.trim();
    const content = document.getElementById('editor').innerHTML;
    const tags = document.getElementById('tags').value.trim();
    if (!title || !content) {
      alert("Por favor, ingresa un título y contenido para el borrador.");
      return;
    }
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const dateStr = `${day}/${month}/${year}`;
    const id = Date.now().toString();
    const draft = { id, title, content, tags, date: dateStr };

    // Guardar en la lista de borradores
    let drafts = JSON.parse(localStorage.getItem('drafts') || '[]');
    drafts.unshift(draft);
    localStorage.setItem('drafts', JSON.stringify(drafts));

    // Redirigir a la página de borradores
    window.location.href = `drafts.html`;
  };

  // Cargar la lista de artículos publicados en index.html
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

  // En editor.html: asignar acciones a botones del menú
  const publishArticleBtn = document.getElementById('publishArticleBtn');
  if (publishArticleBtn) {
    publishArticleBtn.addEventListener('click', function() {
      // La acción de publicar se ejecuta desde la toolbar (ya definida)
      // Opcionalmente se puede dejar este botón para simplemente hacer scroll hasta el editor
      document.getElementById('newArticleSection').scrollIntoView();
    });
  }
  const draftsBtn = document.getElementById('draftsBtn');
  if (draftsBtn) {
    draftsBtn.addEventListener('click', function() {
      window.location.href = 'drafts.html';
    });
  }
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', function() {
      localStorage.removeItem('loggedIn');
      window.location.href = 'index.html';
    });
  }
});
