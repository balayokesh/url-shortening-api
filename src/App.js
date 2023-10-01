import './App.css';

import logo from './images/logo.svg';
import illustrationWorking from './images/illustration-working.svg';
import iconBrandRecognition from './images/icon-brand-recognition.svg';
import iconDetailedRecords from './images/icon-detailed-records.svg';
import iconFullyCustomizable from './images/icon-fully-customizable.svg';
import bgBoostDesktop from './images/bg-boost-desktop.svg';

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

      <section className='d-flex align-items-center ms-sm-5 ps-sm-5 mb-5' id='section1'>
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
        <section id='section2' className='mx-sm-5 px-sm-5'>
          <div className='border p-sm-5 d-flex align-items-center justify-content-around'>
            <input type="text" className='form-control p-sm-3 w-sm-75' placeholder='Shorten a link here...' />
            <button className='cyan-btn py-sm-3'>Shorten it!</button>
          </div>
        </section>
      </div>

      <section id='section3' className='pt-5 pb-5'>
        <div className='text-center my-sm-5'>
          <h1>Advanced statistics</h1>
          <p className='pt-3 pb-5'>Track how your links are performing across the web with our
            advanced statistics dashboard.</p>
        </div>

        <div className='d-flex px-sm-5 mx-sm-5 mt-5' id='features'>
          <div className='bg-white rounded m-3 p-4 position-relative align-self-start'>
            <div className='d-flex justify-content-center align-items-center position-absolute' >
              <img src={iconBrandRecognition} alt='Brand Recognition' />
            </div>
            <h4 className='mt-4'>Brand Recognition</h4>
            <p>Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your content.</p>
          </div>
          <hr className='blue-ruler' />
          <div className='bg-white rounded m-3 p-4 position-relative align-self-center'>
            <div className='d-flex justify-content-center align-items-center position-absolute'>
              <img src={iconDetailedRecords} alt='Brand Recognition' />
            </div>
            <h4 className='mt-4'>Detailed Records</h4>
            <p>Gain insights into who is clicking your links. Knowing when and where
              people engage with your content helps inform better decisions.</p>
          </div>
          <hr className='blue-ruler' />
          <div className='bg-white rounded m-3 p-4 position-relative align-self-end'>
            <div className='d-flex justify-content-center align-items-center position-absolute'>
              <img src={iconFullyCustomizable} alt='Brand Recognition' />
            </div>
            <h4 className='mt-4'>Fully Customizable</h4>
            <p>Improve brand awareness and content discoverability through customizable
              links, supercharging audience engagement.</p>
          </div>
        </div>
      </section>

      <section id='section4' className='p-3 py-4 p-sm-5'>
        <h2>Boost your links today</h2>
        <button className='cyan-btn px-5 py-2 mt-3'>Get Started</button>
      </section>
    </div>
  );
}

export default App;
