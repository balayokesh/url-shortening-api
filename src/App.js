import './App.css';
import logo from './images/logo.svg';

function App() {
  return (
    <div className='container'>
      <nav className='navbar navbar-expand-lg bg-white bg-light m-3'>
        <a className='navbar-brand' href='#'><img src={logo} alt='Shortly' /></a>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse justify-content-between' id='navbarSupportedContent'>
          <ul className='navbar-nav d-flex text-center'>
            <li className='nav-item active'>
              <a className='nav-link gray-violet' href='#'>Features</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link gray-violet' href='#'>Pricing</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link gray-violet' href='#'>Resources</a>
            </li>
          </ul>
          <hr className='text-white m-3' />
          <div className='navbar-nav'>
            <button className='btn gray-violet'>Login</button>
            <button className='btn px-4' id='sign-up-btn'>Sign Up</button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
