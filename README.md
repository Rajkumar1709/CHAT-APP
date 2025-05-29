# 💬 Chat App - Backend

This is the backend for a real-time chat application built with **Node.js**, **Express**, and **MongoDB**. It handles user authentication, secure sessions via JWT, and communication endpoints for building a full-featured chat experience.

---

## 🚀 Features

- ✅ User Registration and Login with JWT Authentication
- 🔐 Password hashing using bcrypt
- 🍪 JWT Token stored securely in HTTP-only cookies
- 📬 RESTful APIs for authentication
- 🌐 MongoDB for user data storage
- 🔄 Middleware for route protection
- 📦 Modular project structure

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **JWT (jsonwebtoken)**
- **bcryptjs**
- **cookie-parser**
- **dotenv**

---

## 📁 Folder Structure

```
/backend
│
├── controllers/       # Route logic (auth, user)
├── models/            # Mongoose models
├── routes/            # API routes
├── middleware/        # Auth middleware
├── lib/               # Utility functions (e.g., generateToken)
├── .env               # Environment variables
├── .gitignore
├── server.js          # Entry point
└── package.json
```

---

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/chat-app-backend.git
   cd chat-app-backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create a `.env` file**
   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   NODE_ENV=development
   ```

4. **Run the server**
   ```bash
   npm run dev
   ```

   The server will start on `http://localhost:5000` (or your specified port).

---

## 📬 API Endpoints

### Auth Routes

| Method | Endpoint        | Description         |
|--------|------------------|---------------------|
| POST   | `/api/signup`   | Register a new user |
| POST   | `/api/login`    | Login and receive JWT |
| GET    | `/api/logout`   | Logout and clear token |

---

## 🔐 Security Practices

- Passwords are hashed using `bcryptjs`.
- JWT tokens are stored in secure, HTTP-only cookies to protect from XSS attacks.
- Uses `sameSite=strict` and `secure` flags in production.

---

## 📌 Future Features

- Real-time messaging using Socket.IO
- User profile management
- Chatroom creation & private messaging
- Media attachments (images, files)

---

## 🙌 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

This project is licensed under the MIT License.

---

## 🧑‍💻 Author

**Your Name**  
GitHub: [Rajkumar Vanjaku](https://github.com/Rajkumar1709)
