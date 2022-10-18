import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AnimalsApp from './AnimalsApp';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AnimalsApp />
  </React.StrictMode>
);
reportWebVitals();
