import React from 'react';
import "./pages.css";
import studio from "../assets/studio.jpg";
import facial from "../assets/facial.jpg";
import chemicalPeel from "../assets/chemical-peel.jpg";
import skinNeedling from "../assets/skin-needling.jpg";
import LEDLightTherapy from "../assets/LED-light-therapy.jpg";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home__page">
            <div className="row">
                <div className="intro">
                    <figure>
                        <img src={studio} id="intro__img" alt="" />
                    </figure>
                    <div className="skinGym__info">
                        <h3 className="intro__heading">What is <span className='color__text'>Skin Gym Sylvania?</span></h3>
                        <p className='intro__para'>Skin Gym Sylvania is the Sutherland Shire’s newest skin rejuvenation clinic.</p>
                        <p className='intro__para'>Skin Gym Sylvania is focused on not only treating clients but educating them on all things skin too.</p>
                        <p className='intro__para'>Using a holistic approach combining facial treatments, skin care recommendations and lifestyle and dietary considerations to treat not only skin concerns but find the cause and incorporate preventative measures.</p>
                        <p className='intro__para'>With a range of treatment options including facials, peels, LED and skin needling, we will cover all your skins needs to bring out the best in you.</p>
                    </div>
                </div>
                <div className="book__container">
                    <div className="book">
                        <p className='book__para'>Use the link below to book an appointment. If you are unsure what treatment to book or have any questions <Link to="/contact" id='home__contact'>contact us!</Link></p>
                        <p className='book__para'>Looking forward to seeing you in the salon.</p>
                        <a href="https://bookings.gettimely.com/skingymsylvania/book" target="_blank">
                            <button className="btn__home">Book Now</button>
                        </a>
                    </div>
                    <div className="book">
                        <p className='book__para'>If you would like to purchase a gift voucher for a friend or family, click the link below!</p>
                        <a href="https://bookings.gettimely.com/skingymsylvania/purchase" target="_blank">
                            <button className="btn__home">Purchase Gift Voucher</button>
                        </a>
                    </div>
                </div>
                <div className="services__home">
                    <div className="service__container">
                        <figure>
                            <img src={skinNeedling} className="service__img" alt="" />
                        </figure>
                        <h3 className='service__heading'>Skin Needling</h3>
                        <Link to="/skin-needling">
                            <button className="btn home__services--btn">Learn More</button>
                        </Link>
                    </div>
                    <div className="service__container">
                        <figure>
                            <img src={facial} className="service__img" alt="" />
                        </figure>
                        <h3 className='service__heading'>Facials</h3>
                        <Link to="/facials">
                            <button className="btn home__services--btn">Learn More</button>
                        </Link>
                    </div>
                    <div className="service__container">
                        <figure>
                            <img src={chemicalPeel} className="service__img" alt="" />
                        </figure>
                        <h3 className='service__heading'>Chemical Peels</h3>
                        <Link to="/chemical-peels">
                            <button className="btn home__services--btn">Learn More</button>
                        </Link>
                    </div>
                    <div className="service__container">
                        <figure>
                            <img src={LEDLightTherapy} className="service__img" alt="" />
                        </figure>
                        <h3 className='service__heading'>LED Light Therapy</h3>
                        <Link to="/LED-light-therapy">
                            <button className="btn home__services--btn">Learn More</button>
                        </Link>
                    </div>
                    <div className="service__container">
                        <figure>
                            <img src={studio} className="service__img" alt="" />
                        </figure>
                        <h3 className='service__heading'>Price List</h3>
                        <Link to="/price-list">
                            <button className="btn home__services--btn">Learn More</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
