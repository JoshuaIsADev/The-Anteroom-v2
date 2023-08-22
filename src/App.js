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
      {/* <GoogleSearch /> */}
      <Calendar />
      <ToDo />
      <Weather />
      <Headlines />
      <Stocks />
      <Art />
    </>
  );
}

export default App;
