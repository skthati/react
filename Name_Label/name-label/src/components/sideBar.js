import { Link } from 'react-router-dom';

function SideBar() {
  return (
    <div className="sidebar App d-flex flex-column p-3 bg-light">
      <h5 className="mb-4">My App</h5>
      <ul className="nav nav-pills flex-column">
        <li className="nav-item mb-2">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item mb-2">
          <Link className="nav-link" to="/click-count">Click Count</Link>
        </li>
        <li className="nav-item mb-2">
          <Link className="nav-link" to="/nz-holiday-list">NZ Holidays List</Link>
        </li>
        <li className="nav-item mb-2">
          <Link className="nav-link" to="/dog-facts">Dog Facts</Link>
        </li>
        <li className="nav-item mb-2">
          <Link className="nav-link" to="/fruit-list">Fruits List</Link>
        </li>
        <li className="nav-item mb-2">
          <Link className="nav-link" to="/country-list">Countries List</Link>
        </li>
        <li className="nav-item mb-2">
          <Link className="nav-link" to="/year-selector">Year Selector</Link>
        </li>
        <li className="nav-item mb-2">
          <Link className="nav-link" to="/fullname-textbox">Fullname Textbox</Link>
        </li>
        <li className="nav-item mb-2">
          <Link className="nav-link" to="/track-numbers">Track Numbers</Link>
        </li>
        <li className="nav-item mb-2">
          <Link className="nav-link" to="/field-components">Form Fields</Link>
        </li>
        <li className="nav-item mb-2">
          <Link className="nav-link" to="/discount-calculator">Discount calculator</Link>
        </li>
        <li className="nav-item mb-2">
          <Link className="nav-link" to="/components/chef/chef-app">Chef App</Link>
        </li>
        <li className="nav-item mb-2">
          <Link className="nav-link" to="/list-of-countries">List of Countries</Link>
        </li>
        <li className="nav-item mb-2">
          <Link className="nav-link" to="/list-of-holidays">list Of Holidays</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
