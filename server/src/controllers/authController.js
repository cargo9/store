import { User } from '../models/User.js';
import { generateToken } from '../middleware/auth.js';

export const authController = {
  // Register new user
  async register(req, res) {
    try {
      const { username, email, password } = req.body;

      // Validation
      if (!username || !email || !password) {
        return res.status(400).json({ error: 'All fields are required' });
      }

      if (password.length < 6) {
        return res.status(400).json({ error: 'Password must be at least 6 characters' });
      }

      // Check if user already exists
      const existingUserByEmail = await User.findByEmail(email);
      if (existingUserByEmail) {
        return res.status(400).json({ error: 'Email already exists' });
      }

      const existingUserByUsername = await User.findByUsername(username);
      if (existingUserByUsername) {
        return res.status(400).json({ error: 'Username already exists' });
      }

      // Create user
      const user = await User.create(username, email, password);

      // Generate token
      const token = generateToken(user.id);

      res.status(201).json({
        message: 'User registered successfully',
        user,
        token,
      });
    } catch (error) {
      console.error('Register error:', error);
      res.status(500).json({ error: 'Server error during registration' });
    }
  },

  // Login user
  async login(req, res) {
    try {
      const { usernameOrEmail, password } = req.body;

      if (!usernameOrEmail || !password) {
        return res.status(400).json({ error: 'All fields are required' });
      }

      // Find user by email or username
      let user = await User.findByEmail(usernameOrEmail);
      if (!user) {
        user = await User.findByUsername(usernameOrEmail);
      }

      if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      // Verify password
      const isValidPassword = await User.verifyPassword(password, user.password);
      if (!isValidPassword) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      // Generate token
      const token = generateToken(user.id);

      // Remove password from response
      delete user.password;

      res.json({
        message: 'Login successful',
        user,
        token,
      });
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ error: 'Server error during login' });
    }
  },

  // Get current user
  async getCurrentUser(req, res) {
    try {
      const user = await User.findById(req.userId);

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      res.json({ user });
    } catch (error) {
      console.error('Get user error:', error);
      res.status(500).json({ error: 'Server error' });
    }
  },

  // Google OAuth login
  async googleLogin(req, res) {
    try {
      const { googleData } = req.body;

      if (!googleData || !googleData.email) {
        return res.status(400).json({ error: 'Invalid Google data' });
      }

      // Find or create user
      const user = await User.findOrCreateGoogleUser(googleData);

      // Generate token
      const token = generateToken(user.id);

      res.json({
        message: 'Google login successful',
        user,
        token,
      });
    } catch (error) {
      console.error('Google login error:', error);
      res.status(500).json({ error: 'Server error during Google login' });
    }
  },
};
