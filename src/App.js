import Navbar from './components/Navbar';
import GoogleSearch from './components/GoogleSearch';
import Calendar from './components/Calendar';
import Weather from './components/Weather';
import ToDo from './components/ToDo';
import Headlines from './components/Headlines';
import Stocks from './components/Stocks';
import TheMet from './components/TheMet';

function App() {
  return (
    <>
      <Navbar />
      <Calendar />
      <GoogleSearch />
      <Weather />
      <ToDo />
      <Headlines />
      <Stocks />
      <TheMet />
    </>
  );
}

export default App;
