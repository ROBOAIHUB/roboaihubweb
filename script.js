
const chatButton = document.getElementById('chatButton');
const chatWindow = document.getElementById('chatWindow');
const closeChat = document.getElementById('closeChat');
const sendButton = document.getElementById('sendButton');
const inputField = document.querySelector('.chat-footer input');
const chatContent = document.querySelector('.chat-content');
const voiceButton = document.getElementById('voiceButton'); // Ensure you have this button in HTML

// Predefined responses as an array of objects
const responses = [
  { question: "what is robo ai hub", answer: "Igniting dreams, building the future. RoboAi Hub is not just a training center, it's a vibrant community where aspiring roboticists of all ages and skill levels come together to learn, create, and push the boundaries of what's possible." },
  { question: "who are you", answer: "I am Eve, your AI assistant. I'm here to help you explore AI solutions at Robo AI Hub!" },
  { question: "hello", answer: "Hello! How can I assist you today?" },
  { question: "how can i join robo ai hub", answer: "You can join Robo AI Hub by visiting our website and signing up for our programs!" },
  { question: "what are the courses you provide", answer: "Here is the link to explore all the courses we offer: <a href='courses.html' target='_blank'>Explore Courses</a>" },
  { question: "what services do you provide", answer: "Here is the link to explore all the services we offer: <a href='services.html' target='_blank'>Explore Services</a>" },
  { question: "do you have a blog", answer: "Yes, we have a blog! You can read it here: <a href='blogPage.html' target='_blank'>Visit Our Blog</a>" },
  { question: "what's the latest news", answer: "Stay updated with the latest news by visiting our news page: <a href='newsPage.html' target='_blank'>Latest News</a>" },
  { question: "what is in your gallery", answer: "You can check out our gallery here: <a href='galleryPage.html' target='_blank'>Explore Gallery</a>" },
  { question: "what is learning at robo ai hub", answer: "Check out our learning page to explore the exciting learning opportunities we offer: <a href='learning.html' target='_blank'>Explore Learning</a>" }
];
 
// Initialize Fuse.js correctly
const fuse = new Fuse(responses, {
  keys: ['question'], // Search based on the question field
  threshold: 0.3 // Adjust the threshold for fuzzy matching (lower = more strict)
});
// Open chat window
chatButton.addEventListener('click', () => {
  chatWindow.style.display = chatWindow.style.display === 'none' ? 'flex' : 'none';
  scrollToBottom();
});
// Close chat window
closeChat.addEventListener('click', () => {
  chatWindow.style.display = 'none';
});

// Send message when clicking the Send button
sendButton.addEventListener('click', handleSendMessage);

// Handle Enter key for sending messages
inputField.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    handleSendMessage();
  }
});

function scrollToBottom() {
  chatContent.scrollTop = chatContent.scrollHeight;
}

// Function to handle sending messages
function handleSendMessage() {
  const userMessage = inputField.value.trim(); // Get user input

  if (userMessage === "") return; // Don't send empty messages

  addMessage("You", userMessage); // Display user message

  // Perform fuzzy matching using Fuse.js
  const results = fuse.search(userMessage);

  // If no match is found
  const botResponse = results.length > 0 ? results[0].item.answer : "I'm sorry, I don't have an answer for that right now.";

  setTimeout(() => addMessage("Eve", botResponse), 500); // Simulate chatbot typing delay

  inputField.value = ""; // Clear input field after sending
}




// Function to add messages to the chat
function addMessage(sender, message) {
  const messageElement = document.createElement("p");
  messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chatContent.appendChild(messageElement);
  chatContent.scrollTop = chatContent.scrollHeight; // Auto-scroll to bottom
}




// Voice recognition functionality
voiceButton.addEventListener('click', () => {
  if (!('webkitSpeechRecognition' in window)) {
    alert('Speech recognition is not supported in this browser. Please try a different browser.');
    return;
  }

  const recognition = new webkitSpeechRecognition(); // Create a new speech recognition instance
  recognition.lang = 'en-US'; // Set the language for recognition
  recognition.interimResults = false; // Finalize results only
  recognition.maxAlternatives = 1; // Return only the top result

  recognition.start(); // Start listening

  recognition.onstart = () => {
    console.log('Voice recognition started...');
  };

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript; // Get the recognized speech text
    inputField.value = transcript; // Set the text in the input field
    console.log('Voice recognized: ', transcript);
  };

  recognition.onerror = (event) => {
    console.error('Speech recognition error:', event.error);
    alert('There was an error with speech recognition. Please try again.');
  };

  recognition.onend = () => {
    console.log('Voice recognition ended.');
  };
});


