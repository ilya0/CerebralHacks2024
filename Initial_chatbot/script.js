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
  // Simulating an API call to fetch chatbot response
  setTimeout(() => {
    const chatbotResponse = 'Hello, how can I assist you today?'; // Replace with actual chatbot response
    displayChatbotMessage(chatbotResponse);
  }, 1000);
}

function displayChatbotMessage(message) {
  const chatbotMessage = document.createElement('div');
  chatbotMessage.classList.add('chatbot-message');
  chatbotMessage.textContent = message;
  chatMessages.appendChild(chatbotMessage);
  chatContainer.scrollTop = chatContainer.scrollHeight;
}
