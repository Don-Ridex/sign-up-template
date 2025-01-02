import React, { useState } from 'react';
import logo from './logo.svg';
// import './App.css';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faApple } from '@fortawesome/free-brands-svg-icons';
import { faUser, faEnvelope, faLock, faPhone, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle menu state
  };

  return (
    <div className="main-container">
      <div className="sub-container">
        <div className="hamburger-menu" >
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars}
            className="hamburger-icon" onClick={toggleMenu} />
        </div>
        <nav className={`nav-bar ${menuOpen ? '' : 'hidden'}`}>

          <ul >
            <li><a href="#home">Product</a></li>
            <li><a href="#products">Pricing</a></li>
            <li><a href="#pricing">Learn</a></li>
          </ul>
        </nav>


        {/* Button Container */}
        <div className='btn-container'>
          <button className='login'>Login</button>
          <button className='signup'>Sign Up</button>
        </div>

        {/* Main Content */}
        <main className="main-content">
          <h2>Joining Lightning</h2>
              <form>
          <div className='form-group'>
            <FontAwesomeIcon className='form-group-icon' icon={faGoogle} />
            <input type='text' placeholder='Sign in with Google' />
          </div>
          <div className='form-group'>
            <FontAwesomeIcon className='form-group-icon' icon={faApple} />
            <input type='text' placeholder='Sign up with Apple' />
          </div>
          <h6>Or</h6>

          <div className="form-group">
            <FontAwesomeIcon className='form-group-icon' icon={faEnvelope} />
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className="form-group">
            <FontAwesomeIcon className='form-group-icon' icon={faLock} />
            <input type="password" placeholder="Enter your password" />
          </div>

          <button type="submit" className='submit-btn'>Sign Up</button>
          </form>
        </main>
      </div>
    </div>
  );
}

export default App;
