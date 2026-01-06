import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './App.css'

console.log('🚀 Main.tsx loaded');

try {
  const root = document.getElementById('root');
  console.log('📍 Root element:', root);
  
  if (!root) {
    document.body.innerHTML = '<div style="padding: 20px; color: white; background: #f00;">❌ Root element not found!</div>';
    throw new Error('Root element not found');
  }
  
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
  console.log('✅ React app rendered');
} catch (error) {
  console.error('❌ Error:', error);
  document.body.innerHTML = `<div style="padding: 20px; color: white; background: #f00;">
    <h1>❌ Error</h1>
    <pre>${error}</pre>
  </div>`;
}
