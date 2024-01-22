import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import axios from 'axios'
import './index.css';

axios.defaults.baseURL = import.meta.env.VITE_API_URL

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);