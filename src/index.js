import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Frog from './frog';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Frog />
  </React.StrictMode>
);
reportWebVitals();
