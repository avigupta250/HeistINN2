import React, { useState } from 'react';

const LoginSignupModal = ({ isOpen, onClose }) => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center ${isOpen ? 'block' : 'hidden'}`}>
      <div className="modal-container">
        <div className="modal-content">
          <div className="flex justify-between">
            <button onClick={toggleForm} className="text-blue-500">
              {isLoginForm ? 'Switch to Sign Up' : 'Switch to Login'}
            </button>
            <button onClick={onClose} className="text-red-500">Close</button>
          </div>
          {isLoginForm ? (
            <div>
              <h2>Login</h2>
              {/* Add your login form here */}
            </div>
          ) : (
            <div>
              <h2>Sign Up</h2>
              {/* Add your sign-up form here */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginSignupModal;
