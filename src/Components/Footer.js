import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <div className="footer-widget">
              <h4 className="widget-title">About Us</h4>
              <p>Stay updated with the latest news in technology, business, health, sports, and entertainment with our news app.</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="footer-widget">
              <h4 className="widget-title">Contact Us</h4>
              <ul className="contact-info">
                <li><i className="fa fa-map-marker"></i> Kolkata, West-Bengal, India</li>
                <li><i className="fa fa-envelope"></i> info@newsapp.com</li>
                <li><i className="fa fa-phone"></i> +91 123 456 7890</li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="footer-widget">
              <h4 className="widget-title">Follow Us</h4>
              <div className="social-icons">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p>&copy; 2024 News App. All Rights Reserved.</p>
            </div>
            <div className="col-md-6">
              <ul className="footer-nav">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Use</a></li>
                <li><a href="#">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
