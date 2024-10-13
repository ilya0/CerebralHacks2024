const chatContainer = document.querySelector('.chat-container');
const chatMessages = document.querySelector('.chat-messages');
const userInput = document.getElementById('user-input');

function sendMessage() {
  const message = userInput.value.trim();
  if (message !== '') {
    displayUserMessage(message);
    userInput.value = '';
    fetchChatbotResponse(message);
  }
}

function displayUserMessage(message) {
  const userMessage = document.createElement('div');
  userMessage.classList.add('user-message');
  userMessage.textContent = message;
  chatMessages.appendChild(userMessage);
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

function fetchChatbotResponse(message) {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', '/get-response', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function() {
    if (xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      displayChatbotMessage(response.response);
    } else {
      console.error('Error:', xhr.statusText);
    }
  };
  xhr.send(JSON.stringify({ message: message }));
}


function displayChatbotMessage(message) {
  const chatbotMessage = document.createElement('div');
  chatbotMessage.classList.add('chatbot-message');
  chatbotMessage.textContent = message;
  chatMessages.appendChild(chatbotMessage);
  chatContainer.scrollTop = chatContainer.scrollHeight;
}
