import React from 'react';
import "./components.css";
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from "../assets/logo_trans-cropped.png";
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="nav__bar">
            <div className="logo">
                <figure>
                    <img src={logo} id="nav__logo" alt="" />
                </figure>
            </div>
            <div className="links">
                <ul className="nav__bar--links">
                    <li>
                        <Link to="/" className='nav__bar--link'>Home</Link>
                    </li>
                    <li>
                        <Link to="" className='nav__bar--link'>Treatment Menu</Link>
                    </li>
                    <li>
                        <Link to="/store" className='nav__bar--link'>Online Store</Link>
                    </li>
                    <li>
                        <Link to="/promotions" className='nav__bar--link'>Promotions</Link>
                    </li>
                    <li>
                        <Link to="blog" className='nav__bar--link'>Blog</Link>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/skingymsylvania/" target="_blank">
                            <FontAwesomeIcon className='nav__icon' icon={faInstagram} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/profile.php?id=100076745145745" target="_blank">
                            <FontAwesomeIcon className='nav__icon' icon={faFacebookF} />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="contact__btn">
                <Link to="/contact">
                    <button className="btn">Contact</button>
                </Link>
            </div>
        </div>
    );
}

export default Nav;
