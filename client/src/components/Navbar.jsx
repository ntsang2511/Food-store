import '../pagesCss/Navbar.css';
import UserMenu from './UserMenu';
function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__item">
        <a href="/" className="navbar__item-home">
          Sang store
        </a>
        <div className="navbar__item-menu">
          <a href="/about" className="navbar__item-menu-btn">
            About
          </a>
          <a href="/menu" className="navbar__item-menu-btn">
            Menu
          </a>
          <a href="/add-food" className="navbar__item-menu-btn">
            Add food
          </a>
          <div href="/contact" className="navbar__item-menu-btn">
            <UserMenu/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
