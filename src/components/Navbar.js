import { useState, useEffect } from 'react';
import Button from './Button';
import '../index.css';

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
      <div className='nav-tabs'>
        {/* <hr className='hr-indicator' /> */}
        {/* <hr className='hr-slider' /> */}
        {/* <Slider /> */}
        {/* {<Tabs />} */}
        <Button navigation>ToDo</Button>
        <Button navigation>Weather</Button>
        <Button navigation>Headlines</Button>
        <Button navigation>Stocks</Button>
        <Button navigation>Art</Button>
      </div>
    </nav>
  );
}

/////////////////////////////////

function Tabs() {
  const [activeTab, setActiveTab] = useState('#todo'); // State to keep track of the active tab

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className='tab-container'>
      <div className='nav-tabs'>
        <a
          href='#todo'
          className={`nav-tab ${activeTab === '#todo' ? 'active' : ''}`}
          onClick={() => handleTabClick('#todo')}
        >
          Todo
        </a>
        <a
          href='#weather'
          className={`nav-tab ${activeTab === '#weather' ? 'active' : ''}`}
          onClick={() => handleTabClick('#weather')}
        >
          Weather
        </a>
        <a
          href='#headlines'
          className={`nav-tab ${activeTab === '#headlines' ? 'active' : ''}`}
          onClick={() => handleTabClick('#headlines')}
        >
          Headlines
        </a>
        <a
          href='#stocks'
          className={`nav-tab ${activeTab === '#stocks' ? 'active' : ''}`}
          onClick={() => handleTabClick('#stocks')}
        >
          Stocks
        </a>
        <a
          href='#art'
          className={`nav-tab ${activeTab === '#art' ? 'active' : ''}`}
          onClick={() => handleTabClick('#art')}
        >
          Art
        </a>
      </div>
      {/* <div className='tab-content'>
        {activeTab === '#todo' && <p>Todo Content</p>}
        {activeTab === '#weather' && <p>Weather Content</p>}
        {activeTab === '#headlines' && <p>Headlines Content</p>}
        {activeTab === '#stocks' && <p>Stocks Content</p>}
        {activeTab === '#art' && <p>Art Content</p>}
      </div> */}
    </div>
  );
}

function Slider() {
  //1) create state variable
  const [slide, setSlide] = useState(1);

  //2) use state variable in the code usually in jsx
  function handleSlide() {
    setSlide(slide + 1);
  }

  //3) update piece of state in some event handler

  ////////////////////

  return (
    <>
      <a href='#todo' className='nav-tab'></a>
      <a href='#weather' className='nav-tab'></a>
      <a href='#headlines' className='nav-tab'></a>
      <a href='#stocks' className='nav-tab'></a>
      <a href='#art' className='nav-tab'></a>
      {/* <button
        className={`nav-indicator ${slide == 5 ? 'nav-indicator-active' : ''}`}
        onClick={handleSlide}
      ></button> */}
    </>
  );
}

export default Navbar;
