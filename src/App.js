import Navbar from './components/Navbar';
import GoogleSearch from './components/GoogleSearch';
import Calendar from './pages/Calendar';
import Weather from './pages/Weather';
import ToDo from './pages/ToDo';
import Headlines from './pages/Headlines';
import Stocks from './pages/Stocks';
import Art from './pages/Art';
import './index.css';

function App() {
  return (
    <>
      <Navbar />
      <main className='components'>
        {/* <GoogleSearch /> */}
        {/* <Calendar /> */}
        <ToDo />
        <section id='weather' className='component-card'>
          <Weather />
        </section>
        <section id='headlines' className='component-card'>
          <Headlines />
        </section>
        <section id='stocks' className='component-card'>
          <Stocks />
        </section>
        <section id='art' className='component-card'>
          <Art />
        </section>
      </main>
    </>
  );
}

export default App;
