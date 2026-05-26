# 🛍️ GoMerch Store

Full-featured e-commerce store with authentication system, shopping cart, and smart search.

![React](https://img.shields.io/badge/React-18.0.0-blue)
![Node.js](https://img.shields.io/badge/Node.js-Express-green)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-blue)

## ✨ Features

### 🎨 Frontend
- ✅ Modern UI built with React
- ✅ Product catalog with detailed pages
- ✅ Smart search (supports Russian/English, typos, transliteration)
- ✅ Shopping cart with quantity management
- ✅ Authentication system (register/login)
- ✅ Responsive design
- ✅ Toast notifications

### 🔧 Backend
- ✅ REST API with Node.js + Express
- ✅ PostgreSQL database
- ✅ JWT authentication
- ✅ Password hashing (bcrypt)
- ✅ SQL injection protection
- ✅ CORS configured

### 🔐 Security
- Passwords are hashed before storage
- JWT tokens for sessions
- Protected API endpoints
- Data validation on client and server

---

## 🚀 Quick Start

### Requirements
- Node.js v16+
- PostgreSQL v12+
- npm or yarn

### 1. Clone repository

```bash
git clone https://github.com/your-username/GoMerchStore.git
cd GoMerchStore
```

### 2. Install dependencies

**Frontend:**
```bash
npm install
```

**Backend:**
```bash
cd server
npm install
```

### 3. Setup PostgreSQL

Create database:
```sql
CREATE DATABASE gomerchstore;
```

### 4. Configure environment variables

Copy `.env.example` to `.env` in `server` folder:
```bash
cd server
cp .env.example .env
```

Edit `server/.env`:
```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=gomerchstore
DB_USER=postgres
DB_PASSWORD=your_password

JWT_SECRET=random_secret_string_for_security
PORT=5000
FRONTEND_URL=http://localhost:3000
```

### 5. Run the project

**Terminal 1 - Backend:**
```bash
cd server
npm start
```

**Terminal 2 - Frontend:**
```bash
npm start
```

Browser will open at http://localhost:3000

---

## 📁 Project Structure

```
GoMerchStore/
├── public/                 # Static files
├── src/                    # Frontend source code
│   ├── api/               # API client
│   ├── components/        # React components
│   ├── context/           # Context API (state)
│   ├── pages/             # Pages
│   ├── utils/             # Utilities (search)
│   └── fakeAPI.js         # Product data
├── server/                 # Backend
│   ├── src/
│   │   ├── config/        # Database config
│   │   ├── controllers/   # Business logic
│   │   ├── middleware/    # Middleware (auth)
│   │   ├── models/        # Data models
│   │   ├── routes/        # API routes
│   │   └── server.js      # Entry point
│   ├── .env.example       # Environment variables example
│   └── package.json
├── .gitignore
├── package.json
└── README.md
```

---

## 🌐 API Endpoints

### Authentication

**POST** `/api/auth/register`
```json
{
  "username": "john",
  "email": "john@example.com",
  "password": "password123"
}
```

**POST** `/api/auth/login`
```json
{
  "usernameOrEmail": "john",
  "password": "password123"
}
```

**GET** `/api/auth/me` (requires token)
```
Headers: Authorization: Bearer <token>
```

**GET** `/api/health` - server health check

---

## 🚢 Deployment

### Recommended platforms:

**Frontend:**
- [Vercel](https://vercel.com) (recommended)
- [Netlify](https://netlify.com)
- GitHub Pages (static only)

**Backend + Database:**
- [Railway](https://railway.app) (recommended - all-in-one)
- [Render](https://render.com)
- [Heroku](https://heroku.com)

### Deploy to Railway:

1. Create account on [Railway](https://railway.app)
2. Create new project
3. Add PostgreSQL service
4. Add Node.js service (specify `server` folder)
5. Configure environment variables
6. Deploy!

Detailed guide: [DEPLOYMENT.md](./DEPLOYMENT.md)

---

## 🛠 Technologies

### Frontend
- React 18
- React Router v6
- Styled Components
- Context API

### Backend
- Node.js
- Express
- PostgreSQL
- JWT (jsonwebtoken)
- bcryptjs

### Tools
- Git
- npm

---

## 📝 Roadmap

- [ ] Google OAuth integration
- [ ] Payment system (Stripe/PayPal)
- [ ] Email verification
- [ ] Password recovery
- [ ] User profile
- [ ] Order history
- [ ] Admin panel
- [ ] Product reviews
- [ ] Filters and sorting
- [ ] Wishlist

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first.

---

## 📄 License

[MIT](LICENSE)

---

## 👨‍💻 Author

Made with ❤️

---

## 📚 Documentation

- [Setup Guide](./SETUP_GUIDE.md)
- [Backend README](./server/README.md)
- [Deployment Guide](./DEPLOYMENT.md)

---

## 🐛 Known Issues

No known issues. If you find a bug, please create an [issue](https://github.com/your-username/GoMerchStore/issues).

---

## 📸 Screenshots

_Add screenshots of your application_

---

**Made in 2026** 🚀
