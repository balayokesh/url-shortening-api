import './styles/app.css';
import axios from 'axios';

import logo from './images/logo.svg';
import illustrationWorking from './images/illustration-working.svg';
import iconBrandRecognition from './images/icon-brand-recognition.svg';
import iconDetailedRecords from './images/icon-detailed-records.svg';
import iconFullyCustomizable from './images/icon-fully-customizable.svg';
import iconFacebook from './images/icon-facebook.svg';
import iconInstagram from './images/icon-instagram.svg';
import iconPinterest from './images/icon-pinterest.svg';
import iconTwitter from './images/icon-twitter.svg';
import { useEffect, useState } from 'react';
import Link from './components/Link';

function App() {

  const [links, setLinks] = useState([]);

  useEffect(() => {
    // Get links from localStorage
    let links = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      links.push({ key, value });
      console.log(links);
    }
    setLinks(links);
  }, []);

  const shortenLink = () => {
    let fullUrl = document.getElementById('full-url').value;
    console.log(fullUrl);

    if (!fullUrl) {
      document.getElementById('error-msg').classList.remove('d-none');
      document.getElementById('full-url').focus();
      document.getElementById('full-url').style.border = '2px solid red';
    }
    else {
      axios.post(`https://api.shrtco.de/v2/shorten?url=${fullUrl}`).then(response => {
        const shortLink = response.data.result.full_short_link;
        localStorage.setItem(fullUrl, shortLink);
        setLinks([...links, { fullUrl, shortLink }])
      }).catch(err => {
        alert("Error occured: " + err);
      })

      document.getElementById('full-url').value = "";
      document.getElementById('error-msg').classList.add('d-none');
      document.getElementById('full-url').style.border = 'none';
    }
  }

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
            <button className='btn px-4 cyan-btn button-hover'>Sign Up</button>
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
          <button className='btn px-4 py-2 cyan-btn button-hover' id='get-started-btn' onClick={() => window.location.href='#section2'}>Get Started</button>
        </div>
        <div id='image-container'>
          <img src={illustrationWorking} alt='Illustration working' />
        </div>
      </section>

      <div id='color-wrapper'>
        <section id='section2' className='mx-sm-5 px-sm-5'>
          <div className='p-sm-5 d-flex align-items-center justify-content-around' id='link-form'>
            <div className='w-100 p-4 p-sm-0'>
              <input type="text" className='form-control py-3' id='full-url' placeholder='Shorten a link here...' />
              <span className='d-none text-danger fst-italic text-start' id='error-msg'>Please add a link</span>
            </div>
            <button className='cyan-btn py-sm-3 button-hover' onClick={shortenLink} id='shorten-btn'>Shorten it!</button>
          </div>
        </section>
      </div>

      <div className='py-3 p-3 px-sm-5' style={{ background: '#eff1f7' }}>
        <div id='links-container' className='mx-sm-5'>
          {
            links.map((pair, index) => (
              <Link key={index} link={pair.key} shortLink={pair.value} />
            ))
          }
        </div>
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
        <button className='cyan-btn px-5 py-2 mt-3 button-hover' onClick={() => window.location.href='#section2'}>Get Started</button>
      </section>

      <footer className='d-flex p-5 justify-content-around flex-wrap'>
        <h3>
          Shortly
        </h3>
        <div>
          <h6>Features</h6>
          <p>Link Shortening</p>
          <p>Branded Links</p>
          <p>Analytics</p>
        </div>
        <div>
          <h6>Resources</h6>
          <p>Blog</p>
          <p>Developers</p>
          <p>Support</p>
        </div>
        <div>
          <h6>Company</h6>
          <p>About</p>
          <p>Our Team</p>
          <p>Careers</p>
          <p>Contact</p>
        </div>
        <div>
          <a href="#">
            <img src={iconFacebook} alt="Facebook" />
          </a>
          <a href="#">
            <img src={iconTwitter} alt="Twitter" />
          </a>
          <a href="#">
            <img src={iconPinterest} alt="Pinterest" />
          </a>
          <a href="#">
            <img src={iconInstagram} alt="Instagram" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
