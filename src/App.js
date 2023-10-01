import './App.css';

import logo from './images/logo.svg';
import illustrationWorking from './images/illustration-working.svg';

function App() {
  return (
    <div>
      <nav className='navbar navbar-expand-lg bg-white bg-light mx-sm-5 m-3 px-sm-5 mt-4 mb-sm-5'>
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
            <button className='btn px-4 cyan-btn'>Sign Up</button>
          </div>
        </div>
      </nav>

      <section className='d-flex align-items-center ms-sm-5 ps-sm-5'>
        <div className='me-sm-5'>
          <h1 style={{ color: 'var(--VeryDarkBlue)' }}>
            More than just shorter links
          </h1>
          <p>
            Build your brand’s recognition and get detailed insights
            on how your links are performing.
          </p>
          <button className='btn px-4 py-2 cyan-btn' id='get-started-btn'>Get Started</button>
        </div>
        <div id='image-container'>
          <img src={illustrationWorking} alt='Illustration working' />
        </div>
      </section>

      <div id='color-wrapper'>
        <section id='section2' className='m-sm-5 px-sm-5'>
          <div className='border p-sm-5 d-flex align-items-center justify-content-around'>
            <input type="text" className='form-control p-sm-3 w-sm-75' placeholder='Shorten a link here...' />
            <button className='cyan-btn py-sm-3'>Shorten it!</button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
