import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__links">
          <span><a href="/about">About Us</a></span>
          <span><a href="/contact">Contact Us</a></span>
          <span><a href="/careers">Careers</a></span>
          <span><a href="/terms">Terms of Service</a></span>
        </div>

        <div className="footer__social">
          <span><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></span>
          <span><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></span>
          <span><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></span>
        </div>
      </div>

      <div className="footer__demo">
        <p>&copy;2022 AirBnB clone! No rights reserved - this is a demo</p>
        <p>Privacy . Terms . Sitemap . Company Details</p>
      </div>
    </div>
  );
};

export default Footer;
