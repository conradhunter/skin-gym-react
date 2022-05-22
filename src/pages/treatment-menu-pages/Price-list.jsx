import React from 'react';
import { Link } from 'react-router-dom';

const PriceList = () => {
    return (
        <div className="priceList__page">
            <div className="row">
                <div className="priceList__container">
                    <h1 id='priceList__heading'>Price List</h1>
                    <div className="priceList__info">
                        <p id='priceList__para--small'>
                            All treatments include a consultation and home care recommendations. Products 
                            are available to purchase at the salon to align with recommendations.
                        </p>
                        <a href="https://bookings.gettimely.com/skingymsylvania/book" target="_blank">
                            <button className="btn skinNeedling__btn">Book Now</button>
                        </a>
                    </div>
                    <div className="treatment__price--container">
                        <h3>Skin Needling</h3>
                        <p id='priceList__para--small' className='skinNeedling__prices'>
                            Face - <span className='bold__text--priceList'>$225</span>
                            <br></br>
                            Face & Neck - <span className='bold__text--priceList'>$265</span>
                            <br></br>
                            Face & Neck - <span className='bold__text--priceList'>$265</span>
                            <br></br>
                            Face, Neck & décolletage - <span className='bold__text--priceList'>$300</span>
                            <br></br>
                            LED add on - <span className='bold__text--priceList'>$40</span>
                            <br></br>
                        </p>
                        <h4>Skin Needling Packages</h4>
                        <p id='priceList__para--small' className='skinNeedling__packages'>
                            Skin needling is recommended in a course of treatments for optimal results.
                            <br></br>
                            Purchase 3 skin needling treatments and get 10% off, purchase 6 and get 20% off.
                            <br></br>
                            <br></br>
                            3 x face - <span className='bold__text--priceList'>$607.50 (10% off)</span>
                            <br></br>
                            3 x face & neck - <span className='bold__text--priceList'>$715.50 (10% off)</span>
                            <br></br>
                            3 x face, neck & décolletage - <span className='bold__text--priceList'>$810 (10% off)</span>
                            <br></br>
                            LED add on - <span className='bold__text--priceList'>$108 (10% off)</span>
                            <br></br>
                            6 x face - <span className='bold__text--priceList'>$1080 (20% off)</span>
                            <br></br>
                            6 x face & neck - <span className='bold__text--priceList'>$1272 (20% off)</span>
                            <br></br>
                            6 x face, neck & décolletage - <span className='bold__text--priceList'>$1440 (20% off)</span>
                            <br></br>
                            LED add on - <span className='bold__text--priceList'>$192 (20% off)</span>
                            <br></br>
                        </p>
                        <button className="btn skinNeedling__btn">
                            <Link to="/skin-needling" className='priceList__link' >Learn More</Link>
                        </button>
                    </div>
                    <div className="treatment__price--container">
                        <h3>Facials</h3>
                        <h5 className='facial__option--heading'>Platinum Facial</h5>
                        <p id='priceList__para--small'>
                            Express - <span className='bold__text--priceList'>$130</span>
                            <br></br>
                            Deluxe - <span className='bold__text--priceList'>$150</span>
                        </p>
                        <h5 className='facial__option--heading'>Pore Refining Facial</h5>
                        <p id='priceList__para--small'>
                            Express - <span className='bold__text--priceList'>$120</span>
                            <br></br>
                            Deluxe - <span className='bold__text--priceList'>$140</span>
                        </p>
                        <h5 className='facial__option--heading'>Clarity Facial</h5>
                        <p id='priceList__para--small'>
                            Express - <span className='bold__text--priceList'>$110</span>
                            <br></br>
                            Deluxe - <span className='bold__text--priceList'>$130</span>
                        </p>
                        <h5 className='facial__option--heading'>Claming & Hydrating Facial</h5>
                        <p id='priceList__para--small'>
                            Express - <span className='bold__text--priceList'>$110</span>
                            <br></br>
                            Deluxe - <span className='bold__text--priceList'>$130</span>
                        </p>
                        <h5 className='facial__option--heading'>LED Add on & Facial</h5>
                        <p id='priceList__para--small'>
                            LED add on (All Facials) - <span className='bold__text--priceList'>$40</span>
                            <br></br>
                            LED Express Facial - <span className='bold__text--priceList'>$80</span>
                        </p>
                        <button className="btn skinNeedling__btn">
                            <Link to="/facials" className='priceList__link' >Learn More</Link>
                        </button>
                    </div>
                    <div className="treatment__price--container">
                        <h3>Chemical Peels</h3>
                        <p id='priceList__para--small' className='priceList__prices'>
                            Introductory Peels - <span className='bold__text--priceList'>$120</span>
                            <br></br>
                            Level 1 Peels - <span className='bold__text--priceList'>$120</span>
                            <br></br>
                            Level 2 Peels - <span className='bold__text--priceList'>$140</span>
                            <br></br>
                            LED add on - <span className='bold__text--priceList'>$40</span>
                            <br></br>
                        </p>
                        <h4>Chemical Peel Packages</h4>
                        <p id='priceList__para--small' className='priceList__packages'>
                            Chemical Peels are recommended in a course of treatments for optimal results.
                            <br></br>
                            Purchase 3 chemical peel treatments and get 10% off, purchase 6 and get 20% off.
                            <br></br>
                            <br></br>
                            3 x Introductory/Level 1 Peels - <span className='bold__text--priceList'>$324 (10% off)</span>
                            <br></br>
                            3 x Level 2 Peels - <span className='bold__text--priceList'>$378 (10% off)</span>
                            <br></br>
                            3 x LED add on - <span className='bold__text--priceList'>$108 (10% off)</span>
                            <br></br>
                            6 x Introductory/Level 1 Peels - <span className='bold__text--priceList'>$576 (20% off)</span>
                            <br></br>
                            6 x Level 2 Peels - <span className='bold__text--priceList'>$672 (20% off)</span>
                            <br></br>
                            6 x LED add on - <span className='bold__text--priceList'>$192 (20% off)</span>
                        </p>
                        <button className="btn skinNeedling__btn">
                            <Link to="/chemical-peels" className='priceList__link' >Learn More</Link>
                        </button>
                    </div>
                    <div className="treatment__price--container">
                        <h3>LED Light Therapy</h3>
                        <p id='priceList__para--small' className='priceList__prices'>
                            Express LED Facial - <span className='bold__text--priceList'>$80</span>
                        </p>
                        <h4>LED Light Therapy Packages</h4>
                        <p id='priceList__para--small' className='priceList__packages'>
                            LED treatments are recommended in a course of treatments for optimal results.
                            <br></br>
                            Purchase 6 LED treatments and get 10% off, purchase 12 and get 20% off.
                            <br></br>
                            <br></br>
                            6 x Express LED Facials - <span className='bold__text--priceList'>$432 (10% off)</span>
                            <br></br>
                            12 x Express LED Facials - <span className='bold__text--priceList'>$768 (20% off)</span>
                        </p>
                        <button className="btn skinNeedling__btn">
                            <Link to="/LED-light-therapy" className='priceList__link' >Learn More</Link>
                        </button>
                    </div>
                    <a href="https://bookings.gettimely.com/skingymsylvania/book" target="_blank">
                        <button className="btn skinNeedling__btn">Book Now</button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default PriceList;
