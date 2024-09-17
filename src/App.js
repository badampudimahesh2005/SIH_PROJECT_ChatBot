import React, { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const [chatOpen, setChatOpen] = useState(false); // Initially hidden
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const toggleChat = () => {
    setChatOpen(!chatOpen);
  };

  const sendMessage = () => {
    if (userInput.trim() === "") return;

    const newMessages = [...messages, { sender: "client", text: userInput }];
    setMessages(newMessages);

    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: "Hello! How can I assist you?" },
      ]);
    }, 1000);

    setUserInput("");
  };

  return (
    <div className="app-container">
      <div className="bot-icon" onClick={toggleChat}>
        🤖 {/* You can replace this with an actual bot icon or image */}
      </div>

      {chatOpen && (
        <div className="chat-box">
          <div className="chat-header">
            <h3>Hi, this is Mia!</h3>
            
          </div>
          <div className="chat-content">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`chat-message ${
                  message.sender === "client" ? "client-message" : "bot-message"
                }`}
              >
                {message.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="chat-input">
            <input
              type="text"
              placeholder="Type your message here"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
