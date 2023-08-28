import { useState, useEffect } from 'react';
import '../index.css';

function NavIndicator() {
  const slide = 5;

  return (
    <>
      <button
        className={`nav-indicator ${slide == 1 ? 'nav-indicator-active' : ''}`}
      ></button>
      <button
        className={`nav-indicator ${slide == 2 ? 'nav-indicator-active' : ''}`}
      ></button>
      <button
        className={`nav-indicator ${slide == 3 ? 'nav-indicator-active' : ''}`}
      ></button>
      <button
        className={`nav-indicator ${slide == 4 ? 'nav-indicator-active' : ''}`}
      ></button>
      <button
        className={`nav-indicator ${slide == 5 ? 'nav-indicator-active' : ''}`}
      ></button>
    </>
  );
}

function Navbar() {
  return (
    <nav className='nav-app'>
      <div className='nav-title'>
        <h1>The Anteroom</h1>
        <div>
          <h2>Welcome Joshua!</h2>
          <h2>Mon. Aug. 21. 23</h2>
        </div>
      </div>
      <div className='nav-scroller'>
        {/* <hr className='hr-indicator' /> */}
        {/* <hr className='hr-slider' /> */}
        <NavIndicator />
      </div>
    </nav>
  );
}

export default Navbar;
