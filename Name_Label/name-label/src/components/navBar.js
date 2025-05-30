// Navbar.js
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar App navbar-expand-lg justify-content-center navbar-dark bg-dark mb-4">
      <div className="container-fluid justify-content-center">
        <Link className="navbar-brand" to="/">My App</Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/click-count">Click Count</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/nz-holiday-list">NZ Holidays List</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/fruit-list">Fruits List</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/country-list">Countries List</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
