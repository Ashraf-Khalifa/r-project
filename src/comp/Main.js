import React from 'react';
import { Link } from 'react-router-dom';

export default function Main() {
  return (
    <main>
      <section id="hero" className="d-flex justify-content-start align-items-center" style={{ backgroundImage: 'url(https://example.com/background-image.jpg)' }}>
        <div className="container position-relative" data-aos="zoom-in" data-aos-delay="100" id="home" style={{ textAlign: 'left' }}>
          <h1 style={{ color: 'white', fontFamily: "Raleway, sans-serif", margin: 0, fontSize: 48, fontWeight: 150, lineHeight: '56px' }}>Discover the wonders of Jordan</h1>
          <p style={{ color: 'white', fontFamily: "Raleway, sans-serif", margin: 0, fontWeight: 40, lineHeight: '56px' }}>Explore iconic archaeological sites and indulge in the warm hospitality of its people.</p>
          <li className="main-list">
            <Link className="main-link btn-get-started" to="/tourist" style={{ color: 'white' }}>Explore Jordan</Link>
          </li>
        </div>
      </section>

      
    </main>
  );
}
