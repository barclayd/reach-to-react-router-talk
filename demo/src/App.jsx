import { useState } from 'react';
import { LocationProvider } from '@reach/router';
import { Routes } from './Routes';
import { Nav } from './components/Nav';

export const App = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  return (
    <LocationProvider>
      <Nav />
      <Routes isAuthorized={isAuthorized} />
      {!isAuthorized && (
        <div style={{ marginTop: '50px' }}>
          <button
            onClick={() => {
              setIsAuthorized(true);
            }}
          >
            Login
          </button>
        </div>
      )}
    </LocationProvider>
  );
};
