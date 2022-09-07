import { useState } from 'react';
import { Routes } from './Routes';
import { Nav } from './components/Nav';

export const App = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  return (
    <>
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
    </>
  );
};
