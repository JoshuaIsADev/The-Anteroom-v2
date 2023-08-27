import Navbar from './components/Navbar';
import GoogleSearch from './components/GoogleSearch';
import Calendar from './components/Calendar';
import Weather from './components/Weather';
import ToDo from './components/ToDo';
import Headlines from './components/Headlines';
import Stocks from './components/Stocks';
import Art from './components/Art';
import './index.css';

function App() {
  return (
    <>
      <Navbar />
      <main className='components'>
        {/* <GoogleSearch /> */}
        {/* <Calendar /> */}
        <section className='component-card'>
          <ToDo />
        </section>
        <section className='component-card'>
          <Weather />
        </section>
        <section className='component-card'>
          <Headlines />
        </section>
        <section className='component-card'>
          <Stocks />
        </section>
        <section className='component-card'>
          <Art />
        </section>
      </main>
    </>
  );
}

export default App;
