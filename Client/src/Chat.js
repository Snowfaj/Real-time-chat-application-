import React, { useEffect, useState } from 'react';

const socket = new WebSocket('ws://localhost:3001');

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    socket.onmessage = (event) => {
      setMessages((prev) => [...prev, event.data]);
    };
  }, []);

  const sendMessage = () => {
    if (input.trim()) {
      socket.send(input);
      setInput('');
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <div style={{ height: '200px', overflowY: 'scroll', border: '1px solid #ccc', padding: 10 }}>
        {messages.map((msg, idx) => (
          <div key={idx}><b>User:</b> {msg}</div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message"
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default Chat;