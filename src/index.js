import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { firebasecontext } from './store/firebasecontext'
import Context from './store/firebasecontext'
import firebase from './firebase/config'
ReactDOM.render(
  <firebasecontext.Provider value={{ firebase }}>
    <Context>
      <App />
    </Context>
  </firebasecontext.Provider>,
  document.getElementById('root'),
)
