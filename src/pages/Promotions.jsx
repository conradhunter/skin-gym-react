import React from 'react';
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
                        <h1 id='promotions__heading'>May Promotions</h1>
                        <h5>20% off your first treatment at Skin Gym Sylvania</h5>
                        <p>Only valid on single full priced treatments, packages are not included. Discount
                            applied in salon. Cannot be used in conjunction with other promotions.
                        </p>
                        <a href="https://bookings.gettimely.com/skingymsylvania/book" target="_blank">
                            <button className="btn promotions__btn">Book Now</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Promotions;
