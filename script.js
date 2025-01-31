// Datos de los usuarios
const users = {
    you: {
        name: "Tú",
        photo: "https://upload.wikimedia.org/wikipedia/commons/a/a1/WhatsApp_logo.png" // Cambia por tu foto
    },
    other: {
        name: "Otro Usuario",
        photo: "https://upload.wikimedia.org/wikipedia/commons/a/a1/WhatsApp_logo.png" // Cambia por una foto ficticia
    }
};

// Función para enviar un mensaje
function sendMessage() {
    const userSelector = document.getElementById('user-selector');
    const user = userSelector.value;
    
    const messageInput = document.getElementById('message-input');
    const messageText = messageInput.value;
    
    if (messageText.trim() === "") return; // No enviar si está vacío
    
    const messageContainer = document.getElementById('message-container');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', user === 'you' ? 'you' : 'other');
    
    messageElement.innerHTML = `
        <div class="message-content">
            <p>${messageText}</p>
        </div>
    `;
    
    messageContainer.appendChild(messageElement);
    
    // Limpiar el campo de entrada de mensaje
    messageInput.value = "";
    
    // Hacer que el chat se desplace al final
    messageContainer.scrollTop = messageContainer.scrollHeight;
}
