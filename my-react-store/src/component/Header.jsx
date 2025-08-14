import "./Navbar.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="welcome-message">
          <h2>Welcome to Our Amazing Store!</h2>
          <p>Discover incredible products at unbeatable prices</p>
        </div>
        <div className="header-actions">
          <ul className="menu">
            <li className="menu-item">
              <Link to="/home" className="nav-link">
                Home
              </Link>
            </li>

            <li className="menu-item">
              <Link to="/catalog" className="nav-link">
                Catalog
              </Link>
            </li>

            <li className="menu-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/contact" className="nav-link">
                Contact US
              </Link>
            </li>
          </ul>

          {/* <div className="search-bar">
            <input
              type="text"
              placeholder="Search products..."
              className="search-input"
            />
            <button className="search-button">🔍</button>
          </div> */}
          <div className="cart-icon">
            <Link to="/cart">
              <span className="cart-symbol">🛒</span>
              <span className="cart-count">0</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
