import React from 'react';
import "./treatmentMenu.css";

const Facials = () => {
    return (
        <div className="facials__page">
            <div className="row">
                <div className="facials__container">
                    <h1>Facials</h1>
                    <div className="facial__outline--container">
                        <h2 className='facial__heading'>Platinum Facial</h2>
                        <p id='facial__intro--para'>
                            Our relaxing age-defying facial that rejuvenates and firms the skin for a more 
                            youthful appearance. This facial brings radiance and luminosity to the skin. The 
                            ultimate facial that will have you leaving the salon with your skin absolutely 
                            glowing!
                        </p>
                        <div className="facial__option">
                            <h3>Deluxe Platinum Facial - 60 minutes</h3>
                            <p>
                                Includes a deep cleanse, exfoliating treatment, personalised face mask, 
                                facial massage and luxurious hand massage.
                                <br></br>
                                <br></br>
                                <span className='bold__text'>$150</span>
                            </p>
                        </div>
                        <div className="facial__option">
                            <h3>Express Platinum Facial - 45 minutes</h3>
                            <p>
                                Includes a deep clease, exfoliating treatment, personalised face mask and 
                                luxurious hand massage.
                                <br></br>
                                <br></br>
                                <span className='bold__text'>$130</span>
                            </p>
                        </div>
                    </div>
                    <div className="facial__outline--container">
                        <h2 className='facial__heading'>Pore Refining Facial</h2>
                        <p>
                            The perfect facial to minimise pores and visibly decongest the skin. Targeted 
                            actives and gentle exfoliation are used to gently break down pore blockages promoting 
                            the appearance of a smoother complexion with less visible, enlarged pores. 
                        </p>
                        <div className="facial__option">
                            <h3>Deluxe Pore Refining Facial - 60 minutes</h3>
                            <p>
                                Includes a deep cleanse, exfoliating treatment, personalised face mask, 
                                facial massage and luxurious hand massage.
                                <br></br>
                                <br></br>
                                <span className='bold__text'>$140</span>
                            </p>
                        </div>
                        <div className="facial__option">
                            <h3>Express Pore Refining Facial - 45 minutes</h3>
                            <p>
                                Includes a deep clease, exfoliating treatment, personalised face mask and 
                                luxurious hand massage.
                                <br></br>
                                <br></br>
                                <span className='bold__text'>$120</span>
                            </p>
                        </div>
                    </div>
                    <div className="facial__outline--container">
                        <h2 className='facial__heading'>Clarity Facial</h2>
                        <p>
                            A deeply clarifying facial targeting oily, blemished and problematic skin. 
                            Rebalancing ingredients soothe, calm and generate a clearer complexion.
                        </p>
                        <div className="facial__option">
                            <h3>Deluxe Clarity Facial - 60 minutes</h3>
                            <p>
                                Includes a deep cleanse, exfoliating treatment, personalised face mask, 
                                facial massage and luxurious hand massage.
                                <br></br>
                                <br></br>
                                <span className='bold__text'>$130</span>
                            </p>
                        </div>
                        <div className="facial__option">
                            <h3>Express Clarity Facial - 45 minutes</h3>
                            <p>
                                Includes a deep clease, exfoliating treatment, personalised face mask and 
                                luxurious hand massage.
                                <br></br>
                                <br></br>
                                <span className='bold__text'>$110</span>
                            </p>
                        </div>
                    </div>
                    <div className="facial__outline--container">
                        <h2 className='facial__heading'>Calming & Hydrating Facial</h2>
                        <p>
                            A gentle, soothing facial to instantly soothe inflamed, flushed or sensitive 
                            skin. Our calming facial uses intelligent formulations to aid skin recovery.
                        </p>
                        <div className="facial__option">
                            <h3>Deluxe Calming & Hydrating Facial - 60 minutes</h3>
                            <p>
                                Includes a deep cleanse, exfoliating treatment, personalised face mask, 
                                facial massage and luxurious hand massage.
                                <br></br>
                                <br></br>
                                <span className='bold__text'>$130</span>
                            </p>
                        </div>
                        <div className="facial__option">
                            <h3>Express Calming & Hydrating Facial - 45 minutes</h3>
                            <p>
                                Includes a deep clease, exfoliating treatment, personalised face mask and 
                                luxurious hand massage.
                                <br></br>
                                <br></br>
                                <span className='bold__text'>$110</span>
                            </p>
                        </div>
                    </div>
                    <div className="facial__outline--container">
                        <h2 className='facial__heading'>LED Facial</h2>
                        <p>
                            An LED treatment involves a Light Emitting Diode (LED) placed over the face or 
                            part of the body. LED is a non invasive treatment that delivers clinically proven 
                            therapeutic light energy for rejuvenating and corrective benefits. LED is used 
                            for skin rejuvenation, mature skin, dry skin, pigmentation, acne, vascular 
                            redness, rosacea, sensitive skin, psoriasis and for wound healing. Specific 
                            wavelengths absorbed by the skin stimulate cell renewal and collagen production.
                        </p>
                        <div className="facial__option">
                            <h3>Express LED Facial - 40 minutes</h3>
                            <p>
                                Includes a deep cleanse, LED treatment and luxurious had massage.
                                <br></br>
                                <br></br>
                                <span className='bold__text'>$80</span>
                            </p>
                        </div>
                    </div>
                    <a href="https://bookings.gettimely.com/skingymsylvania/book" target="_blank">
                        <button className="btn skinNeedling__btn">Book Now</button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Facials;
