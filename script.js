// Bot response database for basic interactions
const botResponses = {
    hello: "Hello! How can I assist you today?",
    help: "I'm here to help! Ask me anything.",
    default: "I'm not sure how to respond to that, but I'm learning every day!",
    thanks: "You're welcome! Feel free to ask anything else.",
    bye: "Goodbye! Have a great day!",
  };
  
  function sendMessage() {
    const userInput = document.getElementById("user-input").value.trim();
    if (userInput === "") return;
  
    displayMessage(userInput, "user");
  
    const botResponse = getBotResponse(userInput);
    setTimeout(() => {
      displayMessage(botResponse, "bot");
    }, 600);
  
    document.getElementById("user-input").value = "";
  }
  
  function displayMessage(message, sender) {
    const chatBox = document.getElementById("chat-box");
    const messageElement = document.createElement("div");
    messageElement.className = sender === "bot" ? "bot-message" : "user-message";
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
  }
  
  function getBotResponse(input) {
    const lowercaseInput = input.toLowerCase();
    if (lowercaseInput.includes("hello") || lowercaseInput.includes("hi")) {
      return botResponses.hello;
    } else if (lowercaseInput.includes("help")) {
      return botResponses.help;
    } else if (lowercaseInput.includes("thanks")) {
      return botResponses.thanks;
    } else if (lowercaseInput.includes("bye")) {
      return botResponses.bye;
    } else {
      return botResponses.default;
    }
  }
  