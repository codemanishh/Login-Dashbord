import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
    const { user, isAuthenticated, logout } = useAuth0();
   
  return (
    <div>
         {isAuthenticated && <h3>Hallow{user.given_name}</h3>}
      <header className="App-header">
          <button onClick={() => logout()}>Logout</button>
      </header>
    </div>
  )
}

export default Navbar