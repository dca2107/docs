// Datos simulados
const users = {
    you: {
        name: "Tú",
        photo: "your-photo.jpg", // Puedes cambiar por una foto de tu elección
    },
    other: {
        name: "Otro Usuario",
        photo: "other-photo.jpg", // Foto de otra persona ficticia
    }
};

// Función para cambiar el usuario y mostrar el mensaje con el perfil adecuado
function sendMessage() {
    const userSelector = document.getElementById('user-selector');
    const user = userSelector.value;
    
    // Obtener mensaje del campo de texto
    const messageInput = document.getElementById('message-input');
    const messageText = messageInput.value;
    
    if (messageText.trim() === "") return; // No enviar mensaje vacío
    
    // Crear mensaje en el chat
    const messageContainer = document.getElementById('message-container');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', user === 'you' ? 'you' : 'other');
    
    messageElement.innerHTML = `
        <strong>${users[user].name}</strong>
        <p>${messageText}</p>
    `;
    
    messageContainer.appendChild(messageElement);
    
    // Limpiar el campo de mensaje
    messageInput.value = "";
    
    // Hacer que el chat se desplace al final
    messageContainer.scrollTop = messageContainer.scrollHeight;
}
