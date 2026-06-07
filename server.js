const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Simple in-memory user storage
const users = {};
let tokenCounter = 0;

// Register endpoint
app.post('/api/auth/register', (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  if (users[email]) {
    return res.status(400).json({ error: 'User already exists' });
  }

  const token = `token_${tokenCounter++}_${Date.now()}`;
  const user = { id: Date.now(), username, email };
  users[email] = { ...user, password, token };

  res.json({ user, token });
});

// Login endpoint
app.post('/api/auth/login', (req, res) => {
  const { usernameOrEmail, password } = req.body;

  if (!usernameOrEmail || !password) {
    return res.status(400).json({ error: 'Missing credentials' });
  }

  const user = users[usernameOrEmail];

  if (!user || user.password !== password) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  res.json({ user: { id: user.id, username: user.username, email: user.email }, token: user.token });
});

// Get current user
app.get('/api/auth/me', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  for (const email in users) {
    if (users[email].token === token) {
      return res.json({ user: { id: users[email].id, username: users[email].username, email: users[email].email } });
    }
  }

  res.status(401).json({ error: 'Invalid token' });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Mock API server running on http://localhost:${PORT}`);
});
