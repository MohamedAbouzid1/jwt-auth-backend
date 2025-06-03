# JWT Basics - Learning Project

A simple Node.js/Express application demonstrating JWT (JSON Web Token) authentication fundamentals. This project was built as part of my backend development learning journey to understand and implement JWT-based authentication.

## Learning Objectives

This project helped me understand:
- JWT token generation and verification
- Protected routes with authentication middleware
- Frontend-backend authentication flow
- Error handling for authentication
- Token storage and management

## Features

- **User Authentication**: Simple login system with JWT token generation
- **Protected Dashboard**: Access restricted content with valid JWT tokens
- **Token Validation**: Middleware to verify JWT tokens on protected routes
- **Frontend Integration**: Interactive UI for login and accessing protected data
- **Error Handling**: Comprehensive error handling for authentication flows

## Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **JWT (jsonwebtoken)** - Token generation and verification
- **Express Async Errors** - Error handling middleware
- **HTTP Status Codes** - Standardized response codes
- **dotenv** - Environment variable management

### Frontend
- **HTML/CSS/JavaScript** - Client-side interface
- **Axios** - HTTP requests
- **Local Storage** - Token persistence

### Development Tools
- **Nodemon** - Auto-restart during development

## Project Structure

```
jwt-basics/
├── controllers/
│   └── main.js              # Authentication logic
├── middleware/
│   ├── auth.js              # JWT verification middleware
│   ├── error-handler.js     # Global error handling
│   └── not-found.js         # 404 handler
├── routes/
│   └── main.js              # Route definitions
├── public/
│   ├── index.html           # Frontend interface
│   ├── browser-app.js       # Client-side logic
│   └── styles.css           # Styling
├── errors/                  # Custom error classes
│   ├── custom-error.js
│   ├── bad-request.js
│   ├── unauthenticated.js
│   └── index.js
├── .env                     # Environment variables
├── app.js                   # Main application file
└── package.json
```

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd jwt-basics
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment file**
   ```bash
   # Create .env file in root directory
   touch .env
   ```

4. **Add environment variables**
   ```env
   JWT_SECRET=your_super_secret_jwt_key_here
   PORT=3000
   ```

5. **Start the development server**
   ```bash
   npm start
   ```

6. **Access the application**
   - Open your browser and navigate to `http://localhost:3000`

## API Endpoints

### Authentication
- **POST** `/api/v1/login`
  - Body: `{ username: string, password: string }`
  - Returns: JWT token for authentication
  - Note: Any username/password combination works (demo purposes)

### Protected Routes
- **GET** `/api/v1/dashboard`
  - Headers: `Authorization: Bearer <jwt_token>`
  - Returns: Welcome message and random lucky number
  - Requires: Valid JWT token

## How It Works

### 1. Login Process
- User submits username and password
- Server generates a JWT token with user information
- Token is returned to client and stored in localStorage

### 2. Accessing Protected Routes
- Client includes JWT token in Authorization header
- Authentication middleware verifies the token
- If valid, request proceeds to route handler
- If invalid, returns 401 Unauthorized error

### 3. Token Structure
The JWT payload contains:
```javascript
{
  id: Date.getDate(),      // Demo ID based on current date
  username: "user_input",  // Username from login form
  iat: timestamp,          // Issued at time
  exp: timestamp           // Expiration time (30 days)
}
```

## Frontend Features
used simple frontend template to demonstrate the backend
- **Login Form**: Username and password input with validation
- **Token Status**: Visual indicator of token presence
- **Dashboard Access**: Button to fetch protected data
- **Error Display**: User-friendly error messages
- **Responsive Design**: Clean, modern UI

## Security Considerations

**Note**: This is a learning project with simplified security:

- No password hashing (accepts any username/password)
- No database integration
- Demo-level JWT secret
- Client-side token storage in localStorage

**For production applications, implement**:
- Proper password hashing (bcrypt)
- Database user validation
- Secure JWT secrets
- HTTP-only cookies for token storage
- Token refresh mechanisms
- Rate limiting

## Testing the Application

1. **Login Test**:
   - Enter any username and password
   - Should receive "user created" message
   - Token status should show "token present"

2. **Dashboard Access**:
   - Click "get data" button after login
   - Should display welcome message and lucky number

3. **Authentication Test**:
   - Clear localStorage or use invalid token
   - Try accessing dashboard
   - Should receive "Not authorized" error

## Learning Outcomes

Through building this project, I learned:

- **JWT Fundamentals**: How tokens work and their structure
- **Middleware Pattern**: Implementing reusable authentication logic
- **Error Handling**: Creating custom error classes and global handlers
- **Client-Server Communication**: Handling authentication flow
- **Security Basics**: Understanding authentication vs authorization

## Possible Enhancements

- Add user registration with database storage
- Implement password hashing
- Add token refresh functionality
- Include role-based authorization
- Add request rate limiting
- Implement logout functionality
- Add user profile management

## License

MIT License - feel free to use this code for learning purposes.

## Contributing

This is a personal learning project, but feedback and suggestions are welcome

---

*Built with ❤️ as part of my backend development learning journey*
