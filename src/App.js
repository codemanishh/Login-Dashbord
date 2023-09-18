import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Navbar from './components/Navbar';
import Loginpage from './components/Login';

function App() {
  const { isAuthenticated } = useAuth0();

  // If the user is authenticated, redirect them to the Navbar page.
  if (isAuthenticated) {
    return <Navbar />;
  }

  // Otherwise, render the Login page.
  return <>
  <Loginpage />
  </>;
}

export default App;
