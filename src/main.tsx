import React from 'react'
import ReactDom from 'react-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'normalize.css';
import './index.css'
import App from './App'



ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
    document.getElementById('root')
)
