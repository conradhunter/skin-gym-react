import React from 'react';

const LedLightTherapy = () => {
    return (
        <div className="LEDLightTherapy__page">
            <div className="row">
                <div className="lightTherapy__container">
                    <h1>LED Light Therapy</h1>
                    <div className="heading__para">
                        <h3 id='LED__heading'>What is LED Light Therapy?</h3>
                        <p id='LED__para'>
                            An LED treatment involves a Light Emitting Diode (LED) placed over the face or 
                            part of the body.
                            <br></br>
                            <br></br>
                            LED is a non invasive treatment that delivers clinically proven therapeutic 
                            light energy for rejuvenating and corrective benefits.
                            <br></br>
                            <br></br>
                            Specific wavelengths absorbed by the skin stimulate cell renewal and collagen 
                            production.
                        </p>
                    </div>
                    <div className="heading__para">
                        <h3 id='LED__heading'>What does LED treat?</h3>
                        <p id='LED__para'>
                            LED is used for skin rejuvenation, mature skin, dry skin, pigmentation, acne, 
                            vascular redness, rosacea, sensitive skin, psoriasis and for wound healing.
                        </p>
                    </div>
                    <div className="heading__para">
                        <h3 id='LED__heading'>What are the different lights/colours and what do they treat?</h3>
                        <p id='LED__para'>
                            Blue: Antibacterial for acne and congestion.
                            <br></br>
                            <br></br>
                            Red: Stimulates collagen production and elastic synthesis for firmer addingsmoother skin.
                            <br></br>
                            <br></br>
                            Near infrared: Healing for redness, irritation and vascular repair.
                        </p>
                    </div>
                    <div className="heading__para">
                        <h3 id='LED__heading'>Course Reccomendations</h3>
                        <p id='LED__para'>
                            A general recommendation is a course of 12 LED treatments of 30 minutes at a 
                            frequency of 2 sessions per week. Courses are tailored to the individuals 
                            specific skin concerns and ideally work in conjunction with a home care regime.
                        </p>
                    </div>
                    <div className="heading__para">
                        <h3 id='LED__heading'>Add Ons</h3>
                        <p id='LED__para'>
                            LED is a beneficial add on for all skin treatments offered at Skin Gym Sylvania. 
                            In conjunction with a facial treatment LED will aid cell stimulation, skin 
                            recovery and enhance results. LED add ons go for a duration of 20 minutes and are 
                            highly recommended to all clients to get the most out of your treatment.
                            <br></br>
                            <br></br>
                            Add on to a skin needling, facial or chemical peel treatment:<span className='bold__text'>$40</span>
                            <br></br> 
                            <br></br> 
                            40 minute LED facial:<span className='bold__text'>$80</span>
                        </p>
                    </div>
                    <div className="heading__para">
                        <h3 id='LED__heading'>Packages</h3>
                        <p id='LED__para'>
                            6 x 40 minute LED facials:<span className='bold__text'>$432 (10% off)</span>
                            <br></br> 
                            <br></br> 
                            12 x 40 minute LED facials:<span className='bold__text'>$768 (20% off)</span> 
                        </p>
                    </div>
                    <div className="heading__para">
                        <h3 id='LED__heading'>LED explained in more detail</h3>
                        <p id='LED__para'>
                            Specific wavelengths interact with biological systems and activate key cell 
                            receptors which consequently trigger a transfer of light energy to cellular 
                            energy. Skin cells that are energised function better and can renew faster to 
                            promote youthful, healthy and radiant skin.
                        </p>
                    </div>
                    <a href="https://bookings.gettimely.com/skingymsylvania/book" target="_blank">
                        <button className="btn skinNeedling__btn">Book Now</button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default LedLightTherapy;
