import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from "../assets/logo_trans-cropped.png";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <div className="contact__info">
                <h5 className='footer__info'>Email: <a className='footer__info--link' href="mailto:info@skingymsylvania.com">info@skingymsylvania.com</a></h5>
                <h5 className='footer__info'>Text: <a className='footer__info--link' href="sms:0431735333">0431 735 333</a></h5>
                <h5 className='footer__info'><a className='footer__info--link' href="https://goo.gl/maps/XJdFrn6DPXMvzHh39" target="_blank">11/3 Richmond Avenue, Sylvania Waters, NSW, 2224</a></h5>
            </div>
            <div id="footer__logo--links">
                <figure>
                    <img src={logo} id="footer__logo" alt="" />
                </figure>
                <ul className="footer__links">
                    <li>
                        <Link to="/" className='footer__link'>Home</Link>
                    </li>
                    <li>
                        <Link to="/price-list" className='footer__link'>Treatment Menu</Link>
                    </li>
                    <li>
                        <Link to="/promotions" className='footer__link'>Promotions</Link>
                    </li>
                    <li>
                        <Link to="/blog" className='footer__link'>Blog</Link>
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
            <div className="mailing__list">
                <h3 id='mailingList__heading'>Join our mailing list!</h3>
                <div className="input__container">
                    <input id='footer__input' type="email" />
                    <button className='btn' id='footer__mailingList--btn'>Join</button>
                </div>
            </div>
        </div>
    );
}

export default Footer;
