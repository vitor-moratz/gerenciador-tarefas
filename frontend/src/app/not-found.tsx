import React from 'react';
import '@styles/not-found.css';

const NotFound = () => {
  return (
    <div>
        <title>404 Page Not Found</title>
      <div className="error-container">
        <h1 className="error-title">404</h1>
        <p className="error-text">
        Ops! Parece que você está perdido no escuro...{' '}
          <span className="animate-blink">????</span>
        </p>
      </div>
    </div>
  );
};

export default NotFound;