import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import questionsData from './questions.json';
import robotLogo from './image/logo.gif'; // Import the robot logo image
import res from './image/res.png'


function App() {
  // State to store the input value
  const [input, setInput] = useState('');
  // State to store the list of messages
  const [messages, setMessages] = useState([]);
  // Ref to keep track of the input field
  const inputRef = useRef(null);

  // UseEffect hook to focus the input field whenever messages change
  useEffect(() => {
    inputRef.current.focus();
  }, [messages]);

  // Function to handle sending a message
  const handleSend = () => {
    // Check if input is not empty
    if (input.trim()) {
      const question = input.trim().toLowerCase();
      // Find the matched question in the questions data
      const matchedQuestion = questionsData.questions.find(q => q.question.toLowerCase() === question);
      // Get the answer or a default response if no match is found
      const answer = matchedQuestion ? matchedQuestion.answer : "Sorry, I don't understand that question.";

      // Update the messages state with the new user message and bot response
      setMessages([...messages, { type: 'user', text: input }, { type: 'bot', text: answer }]);
      // Clear the input field
      setInput('');
    }
  };

  return (
    <div className="App">
      <div className="chat-container">
        {/* Chatbot header with logo */}
        <div className="chat-header">
          <img src={robotLogo} alt="Robot Logo" className="chat-logo" />
          <h1>Chatbot</h1>
        </div>
        
        <div className="messages">
          {/* Map through the messages and render them */}
          {messages.map((msg, index) => (
            <div key={index}  className={`message ${msg.type }`} >
              {/* Display the robot logo for bot messages */}
              {msg.type === 'bot' && <img src={res} alt="Robot" className="robot-logo" />}
              {msg.text }
            </div>
          ))}
        </div>

        <div className="input-container">
          {/* Input field to type messages */}
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyPress={e => e.key === 'Enter' && handleSend()}
            placeholder="Ask me anything..."
          />
          {/* Button to send messages */}
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;
