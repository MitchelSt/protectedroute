import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import SignIn from './SignIn'
import SecretPage from './SecretPage'
import ProtectedRoute from './ProtectedRoute'
import NavBar from './NavBar'


function App() {
  const [authed, setAuthed] = useState(false)

  const handleSignIn = e => {
    e.preventDefault()
    setAuthed(true)
  }

  return (
    <Router>
      <Route path='/' component={NavBar} />
      <Route
        path='/login'
        render={(props) => (<SignIn handleSignIn={handleSignIn} {...props}/>)} />
      <ProtectedRoute path='/secret' authed={authed} component={SecretPage} />
    </Router>
  )
}

export default App;
