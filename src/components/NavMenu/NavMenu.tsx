import { Link } from 'react-router-dom';
import './NavMenu.scss';

export default function NavMenu() {
  return (
    <nav className="nav-menu" role="navigation">
      <ol className="nav-menu__list">
        <li className="nav-menu__item">
          <Link className="nav-menu__link" to="./">
            Home
          </Link>
        </li>
        <li className="nav-menu__item">
          <Link className="nav-menu__link" to="./form">
            Form
          </Link>
        </li>
        <li>
          <Link className="nav-menu__link" to="./aboutus">
            About Us
          </Link>
        </li>
      </ol>
    </nav>
  );
}
