import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Signup from './Pages/Signup'
import { useEffect, useContext } from 'react'
import { AuthContext, firebasecontext } from './store/firebasecontext'
import Create from './Pages/Create'
/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home'
import Login from './Components/Login/Login'

function App() {
  const { setUser } = useContext(AuthContext)
  const { firebase } = useContext(firebasecontext)
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user)
    })
  })
  return (
    <div>
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
      </Router>
    </div>
  )
}

export default App
