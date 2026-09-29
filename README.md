# WeCode: A Real-Time Collaborative Coding Platform

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-ISC-green)
![MERN Stack](https://img.shields.io/badge/MERN-Stack-brightgreen)
![Socket.IO](https://img.shields.io/badge/Socket.IO-Real--time-red)

---

## Overview

**WeCode** is a comprehensive full-stack MERN (MongoDB, Express, React, Node.js) collaborative coding platform designed to revolutionize peer learning and code practice. It empowers developers to collaborate in real-time, practice Data Structures & Algorithms (DSA), solve LeetCode problems, and engage with a vibrant community through an integrated social feed system.

The platform combines multiple features into a single ecosystem:
- Real-time collaborative code editing with Monaco Editor
- Video/audio communication via WebRTC
- Structured DSA learning content
- Curated LeetCode problems
- Social networking and collaboration
- Code execution and testing
- Session management and persistence

---

## Table of Contents

- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Dependencies](#dependencies)
- [Contribution Guide](#contribution-guide)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [Security](#security)
- [License](#license)

---

## Tech Stack

### Frontend
- **Framework**: React 18.2.0
- **UI Libraries**: Chakra UI, Material UI (MUI)
- **Code Editor**: Monaco Editor (@monaco-editor/react)
- **Real-time Communication**: Socket.IO Client
- **Video**: Twilio Video SDK
- **Routing**: React Router DOM v7
- **HTTP Client**: Axios
- **Authentication**: Firebase, React Google OAuth
- **Charts & Visualization**: Recharts, ECharts, Chart.js
- **Animation**: Framer Motion, Lottie React, Parallax Tilt
- **Styling**: Emotion (CSS-in-JS), MUI System
- **Utilities**: Lodash, Date-fns, UUID, Slugify, JWT-decode

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js v5.1.0
- **Database**: MongoDB (via Mongoose ODM)
- **Real-time**: Socket.IO v4.8.1
- **Authentication**: Firebase Admin SDK, JWT (jsonwebtoken), bcrypt/bcryptjs
- **File Upload**: Multer, Cloudinary
- **Email**: Nodemailer
- **Video Conferencing**: Twilio SDK
- **Code Execution**: Judge0 API (planned)
- **Utilities**: Axios, UUID, Cookie Parser, CORS

### Database
- **Primary**: MongoDB
- **ODM**: Mongoose v8.13.2
- **Collections**: Users, Sessions, Posts, Rooms, Activities, Questions, Followers

### DevOps & Deployment
- **Development Server**: Nodemon (auto-reload)
- **Frontend Deployment**: Vercel/Netlify
- **Backend Deployment**: Render/Heroku
- **Process Manager**: npm-run-all for parallel script execution

---

## Features

### Core Features ✅

#### 1. **User Authentication & Authorization**
- Multi-method authentication:
  - Google OAuth via Firebase
  - Email/password registration with bcrypt hashing
  - JWT-based session management
  - Secure token storage and refresh mechanism
- User profiles with customizable information
- Email verification middleware
- Password reset functionality

#### 2. **Real-Time Collaborative Code Editor**
- Monaco Editor integration for syntax highlighting
- Real-time keystroke synchronization via Socket.IO
- Support for multiple programming languages (JavaScript, Python, C++)
- UUID-based session room identification
- Session creation, joining, and persistence
- Auto-save functionality to MongoDB
- Code snippet sharing capabilities

#### 3. **Video and Audio Communication**
- WebRTC-based peer-to-peer video/audio
- Socket.IO signaling layer
- Room-based communication system
- Mute/Unmute audio controls
- Video toggle functionality
- Participant tracking and management
- Fallback to Twilio Video SDK for advanced scenarios

#### 4. **DSA Content Management**
- Comprehensive DSA topic coverage (Arrays, Graphs, Trees, DP, etc.)
- Structured learning materials with notes
- YouTube video embeddings for visual learning
- Topic-based organization and navigation
- Problem difficulty classification

#### 5. **LeetCode Problem Integration**
- Curated problem database by topic
- Difficulty levels: Easy, Medium, Hard
- Mark questions as completed/favorite
- Problem tracking and progress monitoring
- Direct submission to LeetCode integration

#### 6. **Live Code Execution**
- Backend code execution via Node.js
- Judge0 API integration (planned)
- Support for JavaScript, Python, C++
- Real-time output display
- Error handling and debugging support
- Submit-to-LeetCode feature

#### 7. **Session Management**
- Unique UUID generation for sessions
- Session history tracking
- Resume unfinished sessions
- Participant management
- Real-time activity logging
- Session persistence in MongoDB

#### 8. **Social Feed System**
- LinkedIn-style social feed
- Post creation with media attachments
- Like, comment, and share functionality
- User follow/unfollow system
- Activity timeline
- User suggestions and recommendations
- Hashtag support

#### 9. **File Management**
- Image upload via Multer middleware
- Cloudinary integration for scalable storage
- Profile picture management
- Post attachment support
- File type validation
- Secure file handling

#### 10. **Admin Dashboard**
- Content management tools
- Problem/Question management
- User activity monitoring
- Analytics and reporting
- Content moderation capabilities

### Additional Features 🎯

#### Performance & Optimization
- Lazy loading of heavy components
- Socket event throttling
- WebRTC optimization for low bandwidth
- Responsive design for all devices

#### Engagement Features
- Leaderboards based on activity and performance
- Badge/Achievement system
- Streak tracking for consistency
- Gamification elements

#### Security Features
- Public/private session rooms
- Token expiry and refresh mechanisms
- Input validation and sanitization
- XSS protection
- CORS configuration
- Secure password hashing with bcrypt

#### User Experience
- Dark mode toggle
- Auto-save to MongoDB/localStorage
- Responsive mobile-first design
- Intuitive UI with Chakra UI
- Real-time notifications
- Progress tracking

---

## Project Structure

```
WeCode/
├── .git/                           # Git version control
├── .gitignore                      # Git ignore rules
├── package.json                    # Root-level dependencies
├── package-lock.json               # Dependency lock file
│
├── client/                         # React Frontend Application
│   ├── public/                     # Static assets
│   ├── src/
│   │   ├── Layout1/                # Main layout components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Layout.jsx
│   │   ├── screens/                # Page components
│   │   │   ├── HomeScreen/         # Landing page
│   │   │   ├── LoginScreen/        # User login
│   │   │   ├── RegisterScreen/     # User registration
│   │   │   ├── DSA/                # DSA learning module
│   │   │   ├── FeedDashboard/      # Social feed
│   │   │   ├── UploadPosts/        # Post creation
│   │   │   ├── CustomRoom/         # Collaborative room
│   │   │   ├── Admin/              # Admin panel
│   │   │   ├── UserDetails/        # User profile
│   │   │   ├── Follow/             # Follow system
│   │   │   ├── AboutScreen/        # About page
│   │   │   └── WebDev/             # Web development section
│   │   ├── Rooms/                  # Room components
│   │   │   ├── room.jsx            # Main room component
│   │   │   ├── CodeEditor.jsx      # Code editor with Monaco
│   │   │   ├── VideoConferencing.jsx
│   │   │   └── LanguageSelector.jsx
│   │   ├── sockets/                # Socket.IO configuration
│   │   │   └── socket.js
│   │   ├── service/                # Services
│   │   │   └── peer.js             # WebRTC peer configuration
│   │   ├── utils/                  # Utility functions
│   │   ├── assets/                 # Images, icons, animations
│   │   ├── constants.js            # Global constants
│   │   ├── App.js                  # Main App component
│   │   ├── App.css                 # Global styles
│   │   ├── index.js                # Entry point
│   │   ├── reportWebVitals.js      # Performance monitoring
│   │   └── setupTests.js           # Test configuration
│   ├── package.json                # Client dependencies
│   └── package-lock.json
│
├── server/                         # Express Backend Application
│   ├── config/                     # Configuration files
│   │   ├── db.js                   # MongoDB connection
│   │   └── FileHandling.js         # File upload config
│   ├── controllers/                # Route controllers
│   │   ├── profile.controller.js   # User profile logic
│   │   ├── post.controller.js      # Post operations
│   │   ├── Question.controller.js  # Question management
│   │   ├── Room.controller.js      # Room management
│   │   ├── Follow.controller.js    # Follow/Unfollow logic
│   │   ├── Route.controller.js     # Route logic
│   │   ├── Submit.controller.js    # Code submission
│   │   └── HandlerQuestions.js     # Question handlers
│   ├── models/                     # Mongoose schemas
│   │   ├── user.model.js           # User schema
│   │   ├── post.model.js           # Post schema
│   │   ├── Room.model.js           # Room schema
│   │   ├── adminquestions.model.js # Admin questions
│   │   ├── activitylog.model.js    # Activity logging
│   │   ├── customList.model.js     # Custom lists
│   │   └── Follow.model.js         # Follow relationships
│   ├── middleware/                 # Express middleware
│   │   ├── auth.js                 # Authentication middleware
│   │   ├── emailverify.js          # Email verification
│   │   └── multer.js               # File upload middleware
│   ├── Route/                      # API routes
│   │   └── routes.js               # Main routes file
│   ├── Sockets/                    # Socket.IO setup
│   │   └── socket.js               # WebSocket event handlers
│   ├── utils/                      # Utility functions
│   │   ├── judge0.js               # Judge0 API integration
│   │   ├── problemHandler.js       # Problem handling
│   │   ├── problemHandlers.js      # Alternative handlers
│   │   └── Problem Handlers/       # Language-specific handlers
│   │       ├── pythonHandlers.js
│   │       ├── jsHandlers.js
│   │       └── cppHandler.js
│   ├── public/                     # Static files
│   ├── index.js                    # Server entry point
│   ├── package.json                # Server dependencies
│   └── package-lock.json
│
├── Project-Info/                   # Project documentation
│   └── index.html
│
├── Problems_Format_WeCode.xlsx     # Problem format specifications
└── README.md                       # This file
```

---

## Installation

### Prerequisites

Before starting, ensure you have:
- **Node.js** v16 or higher ([Download](https://nodejs.org))
- **npm** v7 or higher (included with Node.js)
- **MongoDB** (Local or Atlas Cloud: [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- **Firebase Project** with OAuth enabled ([Firebase Console](https://console.firebase.google.com))
- **Cloudinary Account** for image storage ([Cloudinary](https://cloudinary.com))
- **Git** for version control

### Step 1: Clone the Repository

```bash
git clone https://github.com/tanushhhh18/WeCode_WebSite.git
cd WeCode_WebSite
```

### Step 2: Install Root Dependencies

```bash
npm install
```

### Step 3: Install Server Dependencies

```bash
cd server
npm install
cd ..
```

### Step 4: Install Client Dependencies

```bash
cd client
npm install
cd ..
```

### Step 5: Environment Configuration

Create `.env` files for both server and client with required variables.

#### Server Configuration (server/.env)

```env
# MongoDB Configuration
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/wecode

# Server Configuration
PORT=5000

# CORS Configuration
CORS_ORIGINS=http://localhost:3000,https://yourdomain.com

# Firebase Configuration
FIREBASE_API_KEY=your_firebase_api_key
FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_STORAGE_BUCKET=your_project.appspot.com
FIREBASE_MESSAGING_SENDER_ID=your_sender_id
FIREBASE_APP_ID=your_app_id

# Firebase Admin SDK
FIREBASE_ADMIN_SDK_KEY=path/to/serviceAccountKey.json

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Email Configuration (Nodemailer)
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password

# JWT Secret
JWT_SECRET=your_super_secret_jwt_key

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Twilio Configuration (Optional)
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token

# Judge0 API (Optional for code execution)
JUDGE0_API_KEY=your_judge0_api_key
JUDGE0_API_HOST=https://judge0-ce.p.rapidapi.com
```

#### Client Configuration (client/.env)

```env
# Backend Server URL
REACT_APP_API_URL=http://localhost:5000

# Firebase Configuration
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id

# Google OAuth
REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id

# Twilio Configuration (Optional)
REACT_APP_TWILIO_ACCOUNT_SID=your_twilio_account_sid
```

### Step 6: Obtain Required Credentials

1. **MongoDB Atlas**:
   - Create an account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Create a cluster and user
   - Get your connection URI

2. **Firebase**:
   - Create a project in [Firebase Console](https://console.firebase.google.com)
   - Enable Google OAuth and Email/Password authentication
   - Generate and download service account key (JSON)
   - Get your web app credentials

3. **Cloudinary**:
   - Sign up at [Cloudinary](https://cloudinary.com)
   - Get your Cloud Name, API Key, and API Secret

4. **Email Configuration** (Gmail):
   - Enable 2-factor authentication
   - Generate an app password at [Google App Passwords](https://myaccount.google.com/apppasswords)

---

## Usage

### Development Mode

Start both server and client in development with hot-reload:

```bash
npm run dev
```

This runs:
- **Server**: http://localhost:5000
- **Client**: http://localhost:3000

### Individual Commands

Start only the server:
```bash
npm run server
```

Start only the client:
```bash
npm run client
```

### Running Tests

For the client:
```bash
cd client
npm test
```

For the server (currently no tests configured):
```bash
cd server
npm test
```

### Building for Production

Build the React application:
```bash
cd client
npm run build
```

This creates an optimized build in `client/build/` directory.

### Key Workflows

#### Creating a Collaborative Room
1. Navigate to "Rooms" or "Collaborative Coding"
2. Click "Create New Room"
3. Copy the room ID and share with others
4. Others can join using the room ID

#### Accessing DSA Content
1. Navigate to "DSA Learning"
2. Browse topics by category
3. Watch embedded videos
4. Read structured notes
5. Practice with linked problems

#### Solving LeetCode Problems
1. Go to "Problems" or "Questions"
2. Filter by topic/difficulty
3. Click on a problem
4. Use the integrated code editor
5. Test and submit your solution

#### Social Interactions
1. Navigate to "Feed"
2. Create posts or view others' posts
3. Like, comment, and share
4. Follow users to see their content
5. View profiles for detailed user info

---

## Configuration

### MongoDB Connection

The MongoDB connection is configured in `server/config/db.js`. It uses Mongoose ODM for schema management.

**Collections**:
- `users` - User accounts and profiles
- `posts` - User-generated posts
- `rooms` - Collaborative coding sessions
- `adminquestions` - Curated problems
- `activitylogs` - User activity tracking
- `customlists` - Custom problem lists
- `followers` - Follow relationships

### Firebase Setup

Firebase authentication is configured in the client side React components. Firebase Admin SDK is used on the backend for advanced operations.

**Authentication Methods**:
- Google OAuth (recommended)
- Email/Password with bcrypt hashing

### Socket.IO Configuration

Real-time events are managed in:
- **Backend**: `server/Sockets/socket.js`
- **Client**: `client/src/sockets/socket.js`

**Key Events**:
- `join-room` - User joins a coding session
- `code-update` - Real-time code changes
- `audio-mute` - Audio toggle
- `video-toggle` - Video toggle
- `user-left` - User leaves session

### Cloudinary Configuration

Image uploads are handled via Multer (local/temporary) and then uploaded to Cloudinary for permanent storage using `server/config/FileHandling.js`.

### CORS Configuration

CORS origins are configured via environment variable `CORS_ORIGINS` (comma-separated list).

---

## Dependencies

### Backend Key Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| express | ^5.1.0 | Web framework |
| mongoose | ^8.13.2 | MongoDB ODM |
| socket.io | ^4.8.1 | Real-time WebSockets |
| jsonwebtoken | ^9.0.2 | JWT authentication |
| bcryptjs | ^3.0.2 | Password hashing |
| cloudinary | ^2.6.0 | Image storage |
| multer | ^1.4.5 | File uploads |
| nodemailer | ^6.10.1 | Email service |
| firebase-admin | ^13.2.0 | Firebase backend |
| axios | ^1.9.0 | HTTP client |
| uuid | ^11.1.0 | Unique ID generation |

### Frontend Key Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^18.2.0 | UI framework |
| react-router-dom | ^7.4.1 | Client routing |
| @monaco-editor/react | ^4.7.0 | Code editor |
| socket.io-client | ^4.8.1 | WebSocket client |
| axios | ^1.8.4 | HTTP requests |
| @chakra-ui/react | ^2.10.7 | Component library |
| firebase | ^11.6.0 | Authentication |
| twilio-video | ^2.31.0 | Video conferencing |
| recharts | ^2.15.3 | Data visualization |
| framer-motion | ^12.6.3 | Animations |

---

## Contribution Guide

We welcome contributions! Here's how to get started:

### 1. Fork the Repository

Click the "Fork" button on GitHub to create your own copy.

### 2. Clone Your Fork

```bash
git clone https://github.com/YOUR_USERNAME/WeCode_WebSite.git
cd WeCode_WebSite
```

### 3. Create a Feature Branch

```bash
git checkout -b feature/your-feature-name
```

### 4. Make Your Changes

- Write clean, readable code
- Follow the existing code style
- Add comments for complex logic
- Update relevant documentation

### 5. Test Your Changes

```bash
# Test the feature locally
npm run dev

# For client code
cd client && npm test

# For server code
cd server && npm test
```

### 6. Commit Your Changes

```bash
git add .
git commit -m "feat: add your feature description"
```

**Commit Message Format**:
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Testing
- `chore:` Maintenance

### 7. Push to Your Fork

```bash
git push origin feature/your-feature-name
```

### 8. Create a Pull Request

1. Go to the original repository
2. Click "New Pull Request"
3. Select your branch
4. Provide a clear description of changes
5. Submit the PR

### 9. Address Review Comments

- Review feedback from maintainers
- Make requested changes
- Commit and push updates
- Notify reviewers

### Contribution Guidelines

- Follow existing code structure and patterns
- Write descriptive commit messages
- Include tests for new features
- Update README if adding new features
- Be respectful and collaborative
- Report bugs with detailed information

---

## Deployment

### Backend Deployment (Render/Heroku)

#### Render Deployment

1. Push code to GitHub
2. Go to [Render Dashboard](https://dashboard.render.com)
3. Create new Web Service
4. Connect GitHub repository
5. Configure environment variables
6. Set build and start commands

**Build Command**:
```bash
cd server && npm install
```

**Start Command**:
```bash
npm start
```

#### Heroku Deployment

1. Install Heroku CLI
2. Login: `heroku login`
3. Create app: `heroku create your-app-name`
4. Set environment variables:
   ```bash
   heroku config:set MONGO_URI=your_mongo_uri
   heroku config:set JWT_SECRET=your_secret
   ```
5. Deploy: `git push heroku main`

### Frontend Deployment (Vercel/Netlify)

#### Vercel Deployment

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Import repository
3. Select `client` folder
4. Set environment variables
5. Deploy

**Environment Variables**:
```env
REACT_APP_API_URL=your_backend_url
REACT_APP_FIREBASE_*=your_firebase_keys
```

#### Netlify Deployment

1. Go to [Netlify](https://netlify.com)
2. Connect GitHub repository
3. Set build command: `npm run build`
4. Set publish directory: `client/build`
5. Add environment variables
6. Deploy

### Database Deployment

**MongoDB Atlas**:
1. Create account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create cluster
3. Set up authentication
4. Get connection URI
5. Add to environment variables

### Production Checklist

- [ ] Environment variables configured
- [ ] MongoDB indexes created
- [ ] Cloudinary account setup
- [ ] Firebase production project
- [ ] HTTPS enabled
- [ ] CORS configured for production
- [ ] Email service working
- [ ] Error logging configured
- [ ] Performance monitoring enabled
- [ ] Backups scheduled

---

## Troubleshooting

### Common Issues and Solutions

#### 1. MongoDB Connection Failed

**Error**: `MongoDB connected` doesn't appear, or connection errors

**Solutions**:
```bash
# Check MONGO_URI in .env
echo $MONGO_URI

# Verify MongoDB Atlas cluster is running
# Check IP whitelist in MongoDB Atlas settings
# Ensure credentials are correct

# Test connection with MongoDB Compass
```

#### 2. Socket.IO Connection Issues

**Error**: WebSocket connection refused or stuck

**Solutions**:
```bash
# Check CORS origins in server/.env
# Ensure server is running on correct port
# Check browser console for network errors
# Verify Socket.IO version matches client/server

# Restart server
npm run server
```

#### 3. Firebase Authentication Not Working

**Error**: Login/Signup fails

**Solutions**:
- Verify Firebase credentials in `.env`
- Check Firebase project OAuth consent screen
- Ensure OAuth is enabled in Firebase
- Clear browser cache and cookies
- Check Firebase service account permissions

#### 4. Cloudinary Upload Fails

**Error**: Image upload fails silently or with error

**Solutions**:
```bash
# Verify Cloudinary credentials
# Check file size limits
# Ensure file type is supported

# Test upload manually in Cloudinary dashboard
```

#### 5. Port Already in Use

**Error**: `EADDRINUSE: address already in use :::5000`

**Solutions**:
```bash
# Find process using port 5000
lsof -i :5000

# Kill process
kill -9 <PID>

# Or use different port
PORT=5001 npm run server
```

#### 6. Module Not Found

**Error**: `Cannot find module 'express'`

**Solutions**:
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# For specific directory
cd server && npm install
```

#### 7. React Build Fails

**Error**: Build fails with various errors

**Solutions**:
```bash
# Clear build artifacts
cd client && rm -rf build node_modules

# Reinstall and rebuild
npm install
npm run build

# Check for TypeScript errors
npm run test -- --noWatch
```

#### 8. Email Verification Not Working

**Error**: Emails not sending or verification failing

**Solutions**:
- Verify Gmail credentials and app password
- Check email logs in Nodemailer
- Ensure less secure apps are allowed (Gmail)
- Test email configuration independently

#### 9. Code Execution Not Working

**Error**: Judge0 or backend code execution fails

**Solutions**:
- Verify Judge0 API key
- Check problem handler for your language
- Ensure language is supported (JS, Python, C++)
- Check Judge0 API status and rate limits

#### 10. CORS Errors

**Error**: `Access to XMLHttpRequest blocked by CORS policy`

**Solutions**:
```bash
# Add frontend URL to CORS_ORIGINS
CORS_ORIGINS=http://localhost:3000,https://yourfrontend.com

# Ensure credentials: true is set in both client and server
```

### Debug Mode

Enable detailed logging:

```bash
# For server
DEBUG=* npm run server

# For client (in package.json or command)
REACT_APP_DEBUG=true npm run client
```

### Getting Help

1. Check GitHub Issues for similar problems
2. Review Socket.IO documentation
3. Check MongoDB Mongoose documentation
4. Look at Firebase documentation
5. Open a new GitHub Issue with:
   - Error message and stack trace
   - Steps to reproduce
   - Environment (OS, Node version, etc.)
   - Screenshots if applicable

---

## Security

### Authentication & Authorization

- **Password Security**: Passwords hashed with bcrypt (salt rounds: 10+)
- **JWT Tokens**: Tokens expire and require refresh
- **Firebase Security**: Managed by Firebase with additional backend validation
- **Email Verification**: Required for email-based registration
- **Role-Based Access**: Admin and user roles implemented

### Data Protection

- **Input Validation**: All inputs validated before processing
- **XSS Prevention**: React escapes dangerous content
- **SQL Injection**: Using Mongoose prevents SQL injection (NoSQL)
- **CSRF Protection**: Token-based protection for state-changing operations

### Network Security

- **CORS**: Configured to allow only trusted origins
- **HTTPS**: Required in production (enforce in client)
- **Content Security Policy**: Headers configured to prevent XSS
- **Secure Cookies**: HttpOnly, Secure flags enabled

### File Upload Security

- **File Type Validation**: Checking MIME types and extensions
- **File Size Limits**: 10MB max for uploads
- **Cloudinary Security**: Using private/signed URLs for sensitive files
- **Malware Scanning**: Optional Cloudinary malware detection

### API Security

- **Rate Limiting**: Should be implemented (not currently)
- **API Key Management**: Stored in environment variables only
- **Request Logging**: Implemented for audit trails
- **Error Messages**: Generic messages in production (no stack traces)

### Best Practices

1. **Never commit .env files** - Add to .gitignore
2. **Rotate secrets regularly** - Change API keys and passwords
3. **Use HTTPS** - Always in production
4. **Monitor logs** - Watch for suspicious activity
5. **Update dependencies** - Keep packages current
6. **Security audit** - Regular code reviews
7. **Database backups** - Automated daily backups
8. **Access control** - Principle of least privilege

### Recommended Enhancements

- [ ] Implement rate limiting (express-rate-limit)
- [ ] Add helmet for HTTP headers
- [ ] Setup 2FA for admin accounts
- [ ] Implement request signing
- [ ] Add API versioning
- [ ] Setup monitoring/alerting
- [ ] Regular security audits
- [ ] Penetration testing

---

## License

This project is licensed under the **ISC License**. See the LICENSE file for details.

You are free to:
- ✅ Use the software
- ✅ Modify the software
- ✅ Distribute copies
- ⚠️ Include license and copyright notice
- ⚠️ Liability disclaimer

---

## Acknowledgments

- **Creator**: [Tanushh18](https://github.com/tanushhhh18)
- **Contributors**: Community members and collaborators
- **Libraries**: All open-source packages used in this project
- **Icons**: React Icons, MUI Icons
- **Animations**: Framer Motion, Lottie React

---

## Support & Feedback

- 📧 **Email**: Contact project maintainer
- 🐛 **Report Bugs**: [GitHub Issues](https://github.com/tanushhhh18/WeCode_WebSite/issues)
- 💡 **Feature Requests**: Open an issue with `[FEATURE]` tag
- 📚 **Documentation**: Check `/Project-Info` folder
- 💬 **Discussions**: Use GitHub Discussions

---

**Last Updated**: September 29, 2026

**Made with ❤️ by the WeCode Team**

---
