import React from 'react';
import "./pages.css";
import studio from "../assets/studio.jpg";
import service from "../assets/test__img.jpg";
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
                        <a href="https://bookings.gettimely.com/skingymsylvania/book?uri=https%3A%2F%2Fbook.gettimely.com%2FBooking%2FLocation%2F180523%3Fmobile%3DTrue%26params%3D%25253fclient-login%25253dtrue" target="_blank">
                            <button className="btn__home">Book Now</button>
                        </a>
                    </div>
                    <div className="book">
                        <p className='book__para'>If you would like to purchase a gift voucher for a friend or family, click the link below!</p>
                        <a href="https://bookings.gettimely.com/skingymsylvania/purchase?uri=https%3A%2F%2Fbook.gettimely.com%2FGiftVoucher%2FDetails%2F180523%3FisMobile%3DTrue%26giftVoucherId%3D190447%26params%3D%25253fclient-login%25253dtrue%252526giftVoucherId%25253d190447" target="_blank">
                            <button className="btn__home">Purchase Gift Voucher</button>
                        </a>
                    </div>
                </div>
                <div className="services__home">
                    <div className="service__container">
                        <figure>
                            <img src={service} className="service__img" alt="" />
                        </figure>
                        <h3 className='service__heading'>Skin Needling</h3>
                    </div>
                    <div className="service__container">
                        <figure>
                            <img src={service} className="service__img" alt="" />
                        </figure>
                        <h3 className='service__heading'>Skin Needling</h3>
                    </div>
                    <div className="service__container">
                        <figure>
                            <img src={service} className="service__img" alt="" />
                        </figure>
                        <h3 className='service__heading'>Skin Needling</h3>
                    </div>
                    <div className="service__container">
                        <figure>
                            <img src={service} className="service__img" alt="" />
                        </figure>
                        <h3 className='service__heading'>Skin Needling</h3>
                    </div>
                    <div className="service__container">
                        <figure>
                            <img src={service} className="service__img" alt="" />
                        </figure>
                        <h3 className='service__heading'>Skin Needling</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
