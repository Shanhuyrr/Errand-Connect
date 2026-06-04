# Student Hostel - Campus Errands Service

A full-stack web application that connects students with runners for quick errand services like printing, groceries, laundry delivery, and more.

## Project Structure

```
student-hostel/
├── backend/          # Express.js server with MongoDB
│   ├── controllers/  # Route controllers
│   ├── models/       # MongoDB models
│   ├── routes/       # API routes
│   ├── middleware/   # Auth and custom middleware
│   ├── config/       # Database configuration
│   └── server.js     # Main server file
└── frontend/         # Next.js React application
    ├── src/
    │   ├── app/      # Next.js pages and layout
    │   └── components/ # React components
    └── package.json
```

## Tech Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **Real-time**: Socket.io
- **Auth**: JWT + bcryptjs

### Frontend
- **Framework**: Next.js 16
- **Runtime**: React 19
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Form**: React Hook Form
- **3D Graphics**: React Three Fiber, Three.js, React Globe

## Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB
- Git

### Installation

1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/student-hostel.git
cd student-hostel
```

2. Install backend dependencies
```bash
cd backend
npm install
```

3. Install frontend dependencies
```bash
cd ../frontend
npm install
```

### Environment Setup

Create `.env` file in the `backend` directory:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/student-hostel
JWT_SECRET=your_secret_key_here
```

### Running the Application

**Terminal 1 - Backend:**
```bash
cd backend
npm start        # Production mode
# or
npm run dev      # Development mode with nodemon
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm start        # Production build and start
# or
npm run dev      # Development mode
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## Features

- 🏃 Request campus errands (printing, delivery, laundry, groceries)
- 📍 Real-time task tracking with Socket.io
- 🔐 Secure authentication with JWT
- 💳 Seamless payment handling
- 📱 Responsive design for all devices
- 🌍 Interactive 3D globe visualization
- ✨ Smooth animations and glassmorphism UI

## API Routes

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login

### Requests/Tasks
- `GET /api/requests` - Get all requests
- `POST /api/requests` - Create new request
- `GET /api/requests/:id` - Get specific request
- `PUT /api/requests/:id` - Update request
- `DELETE /api/requests/:id` - Delete request

## Contributing

Feel free to fork this repository and submit pull requests for any improvements.

## License

This project is open source and available under the MIT License.

## Author

Muhammad Usman

---

**Ready to get started?** Visit http://localhost:3000 once the servers are running!
