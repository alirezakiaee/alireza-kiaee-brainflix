import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import logo from '../../assets/logo/Logo-brainflix.svg';

import './Nav.scss';

// Nav bar element
const Nav = () => {
    return (
        <nav className="nav">
            <Link to="/">
                <img className="nav__logo" src={logo} alt="BrainFlix logo" />
            </Link>
            <SearchBar />
        </nav>
    )
}

export default Nav;
