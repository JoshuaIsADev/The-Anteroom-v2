import { useState, useEffect } from 'react';
import '../index.css';

function Scroller() {
  const initialLeftPercentage =
    parseFloat(sessionStorage.getItem('leftPercentage')) || 25;
  const [scrollLeftPercentage, setScrollLeftPercentage] = useState(
    initialLeftPercentage
  );

  const handleScroll = () => {
    const scrollPosition = window.scrollX;
    const containerWidth =
      document.documentElement.scrollWidth - window.innerWidth;
    const newLeftPercentage = (scrollPosition / containerWidth) * 75;
    setScrollLeftPercentage(newLeftPercentage);
    sessionStorage.setItem('leftPercentage', newLeftPercentage);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const hrIndicatorStyle = {
    left: `${scrollLeftPercentage}%`,
  };

  return <hr className='hr-indicator' style={hrIndicatorStyle} />;

  // )
}

function Navbar() {
  return (
    <nav className='container nav-app'>
      <div className='nav-title'>
        <h1>The Anteroom</h1>
        <div>
          <h2>Welcome Joshua!</h2>
          <h2>Mon. Aug. 21. 23</h2>
        </div>
      </div>
      <div className='nav-scroller'>
        <Scroller />
        {/* <hr className='hr-indicator' /> */}
        <hr className='hr-slider' />
      </div>
    </nav>
  );
}

export default Navbar;
