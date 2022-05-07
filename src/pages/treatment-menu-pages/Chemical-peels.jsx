import React from 'react';

const ChemicalPeels = () => {
    return (
        <div className="chemicalPeels__page">
            <div className="row">
                <div className="chemicalPeels__container">
                    <h1>Chemical Peels</h1>
                    <div className="chemicalPeel__outline--container">
                        <h3>What is a Chemical Peel?</h3>
                        <p>
                            Chemical peels are a deep, exfoliating treatment involving a chemical solution 
                            being applied to the skin, leaving skin feeling smoother and improving the 
                            brightness of the skin. Peels help to decrease the signs of ageing, pigmentation, 
                            uneven skin tone, fine lines, dullness, acne and more.
                        </p>
                        <h3>Skin Gym Sylvania Peels</h3>
                        <p>
                            Skin Gym Sylvania offers a range of chemical peels to target a number of skin 
                            conditions. It is always recommended with peels to “go slow and go low”, we need 
                            to ensure your skin can tolerate the acidity before going any stronger. 
                            We recommend starting with an introductory peel and consultation. This gives us 
                            the opportunity to complete a full skin analysis and introduce the skin to the 
                            chemical peels. 
                            Going too hard and too fast will just create more skin concerns.
                        </p>
                    </div>
                    <div className="chemicalPeel__outline--container">
                        <h2>Introductory Peels</h2>
                        <div className='chemicalPeel__option'>
                            <h3>Universal Peel</h3>
                            <p>
                                Our Universal AHA is a light peel which gently resurfaces the skin to 
                                enhance smoothness and clarity. It is suitable for everyone, particularly 
                                for clients who are newer to peeling treatments. 
                                <br></br>
                                <br></br>
                                <span className='bold__text'>$120</span>
                            </p>
                        </div>
                        <div className='chemicalPeel__option'>
                            <h3>Sensitive Peel</h3>
                            <p>
                                This peel is designed for sensitive, redness-prone skin types, the peel 
                                formulation helps to trigger healthy skin regeneration, resulting in luminous, 
                                retextured and smooth skin.
                                <br></br>
                                <br></br>
                                <span className='bold__text'>$120</span>
                            </p>
                        </div>
                    </div>
                    <div className="chemicalPeel__outline--container">
                        <h2>Level 1 Peels</h2>
                        <div className='chemicalPeel__option'>
                            <h3>Rewind Peel</h3>
                            <p>
                                Our signature Rewind Peel is specifically formulated to target premature 
                                ageing, fine lines, wrinkles and dullness. Using a powerful combination of 
                                hydroxy acids to help reduce the appearance of fine lines and wrinkles, 
                                fading away imperfections to leave the skin smooth and renewed.
                                <br></br>
                                <br></br>
                                <span className='bold__text'>$120</span>
                            </p>
                        </div>
                        <div className='chemicalPeel__option'>
                            <h3>Even Peel</h3>
                            <p>
                                Our signature Even Peel is specifically formulated to target hyperpigmented 
                                skin types. Using a combination of acids to reduce pigmentation, age spots 
                                and post inflammatory discolourations and markings. It leaves the skin with 
                                improved clarity, an even tone and a natural glow.
                                <br></br>
                                <br></br>
                                <span className='bold__text'>$120</span>
                            </p>
                        </div>
                        <div className='chemicalPeel__option'>
                            <h3>Clarity Peel</h3>
                            <p>
                                Our signature Clarity Peel has been specifically formulated to target 
                                blemish-prone, problematic and congested skin types. It contains a 
                                supercharged combination of acids to unblock pores, minimise the formation 
                                of blemishes and morale cell turnover.
                                <br></br>
                                <br></br>
                                <span className='bold__text'>$120</span>
                            </p>
                        </div>
                    </div>
                    <div className="chemicalPeel__outline--container">
                        <h2>Level 2 Peels</h2>
                        <div className='chemicalPeel__option'>
                            <h3>Rewind Peel with Mono Acid Addition</h3>
                            <p>
                                Our Level 2 Rewind Peel involves our signature Level 1 peel with a specially 
                                formulated acid addition to target areas of priority for an advanced peels 
                                treatment.
                                <br></br>
                                <br></br>
                                <span className='bold__text'>$140</span>
                            </p>
                        </div>
                        <div className='chemicalPeel__option'>
                            <h3>Even Peel with Mono Acid Addition</h3>
                            <p>
                                Our Level 2 Even Peel involves our signature Level 1 peel with a specially 
                                formulated acid addition to target areas of priority for an advanced peels 
                                treatment.
                                <br></br>
                                <br></br>
                                <span className='bold__text'>$140</span>
                            </p>
                        </div>
                        <div className='chemicalPeel__option'>
                            <h3>Clarity Peel with Mono Acid Addition</h3>
                            <p>
                                Our Level 2 Clarity Peel involves our signature Level 1 peel with a 
                                specially formulated acid addition to target areas of priority for an 
                                advanced peels treatment.
                                <br></br>
                                <br></br>
                                <span className='bold__text'>$140</span>
                            </p>
                        </div>
                    </div>
                    <div className="chemicalPeel__outline--container">
                        <h2>Chemical Peel Packages</h2>
                        <p>Chemical Peels are recommended in a course of treatments for optimal results.</p>
                        <div className="packages__container">
                            <h3>Purchase 3 chemical peel treatments and get 10% off, purchase 6 and get 20% off.</h3>
                            <p>3 x Introductory / Level 1 Peels - $324 (10% off)</p>
                            <p>3 x Level 2 Peels - $378 (10% off)</p>
                            <p>LED add on - $108 (10% off)</p>
                            <p>6 x Introductory / Level 1 Peels - $576 (20% off)</p>
                            <p>6 x Level 2 Peels - $672 (20% off)</p>
                            <p>LED add on - $192 (20% off)</p>
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

export default ChemicalPeels;
