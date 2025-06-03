import './App.css';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import MyName from './components/myName.js'
import ClickCount from './components/clickCount.js';
import NZHolidaysList from './components/NZHolidaysList.js';
import FruitsList from './components/fruitsList.js';
import CountriesList from './components/countriesList.js';
// import Navbar from './components/navBar.js';
import SideBar from './components/sideBar.js';
import YearSelector from './components/yearSelector.js';
import FullnameTextbox from './components/fullNameTextBox.js';
import TrackNumbers from './components/trackNumbers.js';
import FieldComponents from './components/fieldComponents.js';
import DiscountCalculator from './components/discountCalculator.js';
import DogFacts from './components/dogFacts.js';
import ChefApp from './components/chef/chefApp.js';


function App() {
  return (
    <div className='App'>
      <Router>
        {/* <Navbar /> */}
        <SideBar />
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
          <Route path='/dog-facts' element={ <DogFacts />} />
          <Route path='/fruit-list' element= {<FruitsList />} />
          <Route path='/country-list' element= {<CountriesList />} />
          <Route path='/year-selector' element= {<YearSelector />} />
          <Route path='/fullname-textbox' element= {<FullnameTextbox />} />
          <Route path='/track-numbers' element= {<TrackNumbers />} />
          <Route path='/field-components' element = {<FieldComponents />} />
          <Route path='/discount-calculator' element = {<DiscountCalculator />} />
          <Route path='/chef-app' element = {<ChefApp />} />
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
