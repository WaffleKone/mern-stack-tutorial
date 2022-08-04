import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> 
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// Use BrowserRouter to help with seamless transitions between components, it only reloads/refreshes the component that needs to be changed instead of the entire page.
// Helps with responsiveness. (not a necessity)
