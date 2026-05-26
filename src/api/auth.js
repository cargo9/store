const API_URL = 'http://localhost:5000/api';

// Helper function to get auth token
const getToken = () => localStorage.getItem('token');

// Helper function to set auth headers
const getAuthHeaders = () => {
  const token = getToken();
  return {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
  };
};

export const api = {
  // Register new user
  async register(username, email, password) {
    try {
      const response = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Registration failed');
      }

      // Save token
      localStorage.setItem('token', data.token);
      return data.user;
    } catch (error) {
      console.error('Register API error:', error);
      throw new Error(error.message || 'Failed to connect to server');
    }
  },

  // Login user
  async login(usernameOrEmail, password) {
    try {
      console.log('Attempting login to:', `${API_URL}/auth/login`);
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ usernameOrEmail, password }),
      });

      console.log('Login response status:', response.status);
      const data = await response.json();
      console.log('Login response data:', data);

      if (!response.ok) {
        throw new Error(data.error || 'Login failed');
      }

      // Save token
      localStorage.setItem('token', data.token);
      return data.user;
    } catch (error) {
      console.error('Login API error:', error);
      throw new Error(error.message || 'Failed to connect to server');
    }
  },

  // Google login
  async googleLogin(googleData) {
    const response = await fetch(`${API_URL}/auth/google-login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ googleData }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Google login failed');
    }

    // Save token
    localStorage.setItem('token', data.token);
    return data.user;
  },

  // Get current user
  async getCurrentUser() {
    const token = getToken();
    if (!token) return null;

    const response = await fetch(`${API_URL}/auth/me`, {
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      // Token is invalid, remove it
      localStorage.removeItem('token');
      return null;
    }

    const data = await response.json();
    return data.user;
  },

  // Logout
  logout() {
    localStorage.removeItem('token');
  },
};
