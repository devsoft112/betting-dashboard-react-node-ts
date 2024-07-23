import React, { useState } from 'react';
import Modal from 'react-modal';
import { FaTimes } from 'react-icons/fa';
import { useAuth } from '../../context/AuthContext';

interface RegisterModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onRequestClose }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useAuth();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    await register(username, email, password);
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal"
      overlayClassName="overlay"
      ariaHideApp={false}
    >
      <div className="modal-content">
        <button onClick={onRequestClose} className="close-button">
          <FaTimes />
        </button>
        <h2 className="modal-title">Create Account</h2>
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="form-group">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms" style={{ display: 'inline' }}>I agree with the <a href="/">Terms of Service</a> and I am 18+</label>
          </div>
          <div className="form-group">
            <input type="checkbox" id="offers" />
            <label htmlFor="offers" style={{ display: 'inline' }}>I want to receive News and Offers</label>
          </div>
          <button type="submit" className="submit-button">Start Playing</button>
        </form>
      </div>
    </Modal>
  );
};

export default RegisterModal;
