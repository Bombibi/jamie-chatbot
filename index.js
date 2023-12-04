// To handle both click and enter event

$("#sendButton").click(function () {
  sendMessage();
});

$("#userInput").keydown(function (e) {
  if (e.keyCode === 13) {
    // 'Enter' key
    sendMessage();
  }
});

function sendMessage() {
  var userInput = $("#userInput").val();
  displayMessage("user", userInput);
  userInputHandler(userInput);
  $("#userInput").val(""); // Clear input field after sending message
}

function displayMessage(sender, message) {
  var currentTime = new Date().toLocaleString();
  var senderName;
  var whosSender;
  if (sender === "user") {
    whosSender = "user-message";
    senderName = "You";
  } else {
    whosSender = "jamie-message";
    senderName = "Jamie";
  }
  var messageHtml = `
      <div class="message ${whosSender}">
        <div class="senderName">${senderName}:</div>
        <div class="message-content">${message}</div>
        <div class="message-time">${currentTime}</div>
      </div>
    `;
  $("#chatContainer").append(messageHtml);
  console.log($("#chatContainer").html());
}

function userInputHandler(userInput) {
  // Implement Jamie's responses as per the provided guidelines

  var jamieReply = getJamieReply(userInput);
  displayMessage("jamie", jamieReply);
}

function getJamieReply(userInput) {
  // Logic to determine Jamie's replies based on user input

  switch (true) {
    case /\?\!|\!\?/.test(userInput):
      return "Please give me some time to resolve the issue.";
    case userInput.includes("?"):
      return "Yes";
    case userInput.includes("!"):
      return "Please remain calm";
    case /^jamie$/i.test(userInput.trim()):
      return "Can I help you?";
    case userInput.trim() === "":
      return "It seems you missed your message";
    default:
      return "Sorry, I don't understand";
  }
}
