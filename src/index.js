import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-65r4rzphjpeti11b.us.auth0.com"
    clientId="pHD5uW1ezOMzUloZm7xzzcIcD0N2tULv"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    >
      <App/>
    </Auth0Provider>
  </React.StrictMode>
);


