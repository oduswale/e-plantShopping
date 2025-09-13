import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import Provider to make Redux store available throughout the app
import { Provider } from 'react-redux'

// Import the global Redux store configured in store.js
import store from './store.js'

// Render the React application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Wrap App with Provider so all components can access Redux store */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
