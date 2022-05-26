import React from 'react'
import ReactDom from 'react-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'normalize.css';
import './index.css'
import { store } from './store'
import { Provider } from 'react-redux'
import App from './App'



ReactDom.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
    document.getElementById('root')
)
