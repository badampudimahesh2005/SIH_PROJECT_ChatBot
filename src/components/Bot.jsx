import React, { useState, useRef, useEffect } from "react";
import axios from "axios"; // Import axios for API requests
import "../assets/styles/Bot.css";

function Bot() {
  const [chatOpen, setChatOpen] = useState(false); // Initially hidden
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false); // To show loading message
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

  const handleSendMessage = async () => {
    if (userInput.trim()) {
      setMessages([...messages, { text: userInput, user: 'You' }]);
      setUserInput('');

      // Fetch metadata from the backend API
      const response = await fetch('/api/metadata');
      const data = await response.json();

      // Add bot response with metadata
      setMessages([...messages, { text: userInput, user: 'You' }, { text: data.description, user: 'Bot' }]);
    }
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
          {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.user}`}>
            <p>{msg.text}</p>
          </div>
        ))}

            {isLoading && (
              <div className="chat-message bot-message">Loading...</div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="chat-input">
            <input
              type="text"
              placeholder="Type your message here"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Bot;


