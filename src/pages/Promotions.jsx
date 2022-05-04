import React from 'react';
import { Link } from 'react-router-dom';
import promotion from "../assets/april-promotions.jpg";

const Promotions = () => {
    return (
        <div className="promotions__page">
            <div className="row">
                <div className="promotions__container">
                    <figure>
                        <img src={promotion} alt="" className="promotion" />
                    </figure>
                    <div className="promotion__info">
                        <h1>April Promotions</h1>
                        <h5>20% off your first treatment at Skin Gym Sylvania</h5>
                        <p>Only valid on single full priced treatments, packages are not included. Discount
                            applied in salon. Cannot be used in conjunction with other promotions.
                        </p>
                        <a href="https://bookings.gettimely.com/skingymsylvania/book" target="_blank">
                            <button className="btn promotions__btn">Book Now</button>
                        </a>
                        <h4>15% OFF PRODUCTS STOREWIDE</h4>
                        <h5>Valid until the 30th of April, in store and online.</h5>
                        <p>Can’t find an item in stock online? Let us know at info@skingymsylvania.com so we 
                            can get that to you as soon as we restock.
                        </p>
                        <Link to="/store">
                            <button className="btn promotions__btn">Store</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Promotions;
