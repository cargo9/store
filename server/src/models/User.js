import pool from '../config/database.js';
import bcrypt from 'bcryptjs';

export const User = {
  // Create new user
  async create(username, email, password) {
    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await pool.query(
      `INSERT INTO users (username, email, password)
       VALUES ($1, $2, $3)
       RETURNING id, username, email, avatar, provider, created_at`,
      [username, email, hashedPassword]
    );

    return result.rows[0];
  },

  // Find user by email
  async findByEmail(email) {
    const result = await pool.query(
      'SELECT * FROM users WHERE email = $1',
      [email]
    );
    return result.rows[0];
  },

  // Find user by username
  async findByUsername(username) {
    const result = await pool.query(
      'SELECT * FROM users WHERE username = $1',
      [username]
    );
    return result.rows[0];
  },

  // Find user by ID
  async findById(id) {
    const result = await pool.query(
      'SELECT id, username, email, avatar, provider, created_at FROM users WHERE id = $1',
      [id]
    );
    return result.rows[0];
  },

  // Verify password
  async verifyPassword(plainPassword, hashedPassword) {
    return await bcrypt.compare(plainPassword, hashedPassword);
  },

  // Create user from Google OAuth
  async createFromGoogle(googleData) {
    const result = await pool.query(
      `INSERT INTO users (username, email, avatar, provider)
       VALUES ($1, $2, $3, 'google')
       RETURNING id, username, email, avatar, provider, created_at`,
      [googleData.name, googleData.email, googleData.picture]
    );

    return result.rows[0];
  },

  // Find or create Google user
  async findOrCreateGoogleUser(googleData) {
    let user = await this.findByEmail(googleData.email);

    if (!user) {
      user = await this.createFromGoogle(googleData);
    }

    return user;
  }
};
