
# 💬 Real-Time Chat Application

This is a real-time chat app built using **WebSockets** for bi-directional communication and **React.js** as the front-end framework. 

---

## 📌 Overview

**Title:** Real-Time Chat Application  
**Objective:** Build a chat app using WebSockets and a front-end framework like React.js or Vue.js  
**Deliverable:** A polished, responsive chat UI with message history  

---

## 🔧 Tech Stack

| Layer      | Technology   |
|------------|--------------|
| Frontend   | React.js     |
| Backend    | Node.js      |
| Protocol   | WebSocket (via `ws` npm package) |
| Styling    | CSS (inline/basic styling) |

---

## 📁 Project Structure

```
chat-app/
├── client/              # React frontend
│   ├── public/
│   └── src/
│       ├── App.js
│       ├── Chat.js
│       └── index.js
├── server/              # Node.js WebSocket backend
│   └── server.js
├── README.md            # Project documentation
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/codtech-chat-app.git
cd codtech-chat-app
```

---

### 2. Start the WebSocket Server

```bash
cd server
npm install
node server.js
```

- This starts a WebSocket server at `ws://localhost:3001`

---

### 3. Start the React Frontend

```bash
cd ../client
npm install
npm start
```

- Visit `http://localhost:3000` to use the chat interface.

---

## ✨ Features

✅ Real-time messaging with WebSockets  
✅ Responsive UI  
✅ Message history (temporary in browser session)  
✅ Basic chat design with scrollable chat area  
✅ Minimal dependencies for easy deployment

---

## 🔍 Code Highlights

### Backend (Node.js WebSocket)

- Uses `ws` to broadcast messages to all connected clients
- Simple `express` server runs on port `3001`

```js
const wss = new WebSocket.Server({ server });
wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    wss.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message.toString());
      }
    });
  });
});
```

---

### Frontend (React.js)

- Connects to WebSocket server using:

```js
const socket = new WebSocket('ws://localhost:3001');
```

- Captures message input and renders chat history dynamically

---

## 📸 Output Screenshot

![Chat App Screenshot]

---

## 📜 Future Enhancements (Optional)

- Add user authentication
- Save messages to a database (MongoDB/Firebase)
- Typing indicators / Read receipts
- UI themes (light/dark mode)

---


---

## 🙌 Developed By

**Your Name**  
Intern at **CODTECH IT Solutions Pvt. Ltd**  
Task - 2 Submission ✅

---

## 📄 License

This project is licensed under the [MIT License](LICENSE)
```

---

Let me know if you want this README file included in a ZIP or uploaded to your GitHub repo!
