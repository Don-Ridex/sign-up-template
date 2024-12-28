
import logo from './logo.svg';
// import './App.css';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faApple } from '@fortawesome/free-brands-svg-icons';
import { faUser, faEnvelope, faLock, faPhone } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="main-container">
      <div className="sub-container">
        <nav className="nav-bar">
          <ul>
            <li><a href="#home">Product</a></li>
            <li><a href="#products">Pricing</a></li>
            <li><a href="#pricing">Learn</a></li>
          </ul>
        </nav>
        <div className='btn-container'>
          <button className='login'>Login</button>
          <button className='signup'>Sign Up</button>
        </div>
        <main className="main-content">
          <h2>Joining Lightning</h2>

          <div className='form-group'>
            < FontAwesomeIcon className='form-group-icon' icon={faGoogle} />
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
        </main>
      </div>
    </div>
  );
}

export default App;
