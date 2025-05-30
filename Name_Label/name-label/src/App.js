import './App.css';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import MyName from './components/myName.js'
import ClickCount from './components/clickCount.js';
import NZHolidaysList from './components/NZHolidaysList.js';
import FruitsList from './components/fruitsList.js';
import CountriesList from './components/countriesList.js';
import Navbar from './components/navBar.js';


function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        {/* <nav>
          <Link className="nav-link" to="/">Home</Link>
          <Link to="/click-count">Click Count</Link>
          <Link to="/nz-holiday-list">NZ Holidays List</Link>
          <Link to="/fruit-list">Fruits List</Link>
          <Link to="/country-list">Countries List</Link>
        </nav> */}

        <Routes>
          <Route path='/' element={<MyName />} />
          <Route path='/click-count' element= {<ClickCount />} />
          <Route path='/nz-holiday-list' element= {<NZHolidaysList />} />
          <Route path='/fruit-list' element= {<FruitsList />} />
          <Route path='/country-list' element= {<CountriesList />} />
        </Routes>
      </Router>
    </div>

    
    //   <MyName />
    //   <ClickCount />
    //   <NZHolidaysList />
    //   <FruitsList />
    //   <CountriesList />
  );
}

export default App;
