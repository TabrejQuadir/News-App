import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = ({ setCategory, setNewsType }) => {
  const [info, setInfo] = useState(new Date());
  const [navbar, setNavbar] = useState(false);

  const handleClick = (e) => {
    setNewsType(e.target.innerHTML);
    setCategory(e.target.innerHTML);
  }

  useEffect(() => {
    const intervalId = setInterval(() => setInfo(new Date()), 1000);
    window.addEventListener('scroll', changeBackground);
    return () => {
      clearInterval(intervalId);
      window.removeEventListener('scroll', changeBackground);
    }
  }, []);

  const changeBackground = () => {
    if (window.scrollY > 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  return (
    <nav className={navbar ? "navv active navbar-expand-lg" : "navbar-expand-lg navv"}>
      <div className="container-fluid">
        <div className='small d-lg-none'>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className='logo-mobile d-lg-none'>
          <span>Live News</span>
        </div>
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {['Technology', 'Business', 'Health', 'Sports', 'Entertainment'].map((category, index) => (
              <li className="nav-item" key={index}>
                <a className="nav-link" onClick={handleClick}>{category}</a>
              </li>
            ))}
          </ul>
          <div className='dateTimeInfo d-none d-lg-flex'>
            <span className='date'>{info.toLocaleDateString()}</span>
            <span className='time'>{info.toLocaleTimeString()}</span>
          </div>
        </div>
        {/* <div className='logo-mobile d-block d-lg-none'>
          <span>LiveNews</span>
        </div> */}
      </div>
    </nav>
  );
}

export default Navbar;
