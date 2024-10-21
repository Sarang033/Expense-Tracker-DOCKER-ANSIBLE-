import axios from 'axios';

// Base API URL for authentication
const API_URL = 'http://15.206.185.251/api/auth/';  // Adjusted to the base URL

// Function to register a new user
const register = async (userData) => {
  const response = await axios.post(`${API_URL}register`, userData);  // Corrected URL
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

// Function to log in a user
const login = async (userData) => {
  const response = await axios.post(`${API_URL}login`, userData);  // Corrected URL
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

// Function to log out a user
const logout = () => {
  localStorage.removeItem('user');
};

// Exporting auth service methods
const authService = {
  register,
  login,
  logout,
};

export default authService;
