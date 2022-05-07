import React from 'react';
import "./treatmentMenu.css";

const SkinNeedling = () => {
    return (
        <div className="skinNeedling__page">
            <div className="row">
                <div className="skinNeedling__container">
                    <h1>Skin Needling</h1>
                    <div className="heading__para--container">
                        <h3>What is skin needling?</h3>
                        <p>
                            Skin needling is the #1 skin rejuvenation treatment worldwide. Otherwise known
                            as micro-needling or collagen induction therapy, skin needling involves using
                            tiny needles to create micro trauma in the skin causing an inflammatory or 
                            wound healing response. This natural healing response encourages the skin to 
                            heal by stimulating collagen production and growth factors within the skin.
                        </p>
                    </div>
                    <div className="heading__para--container">
                        <h3>What is skin needling used to treat?</h3>
                        <p>
                            Skin needling treats a variety of skin conditions including premature ageing,  acne
                            scarring, rosacea, pigmentation, congestion, melasma, milia, enlarged pores and more! 
                        </p>
                    </div>
                    <div className="heading__para--container">
                        <h3>Is skin needling painful?</h3>
                        <p>
                            Whilst we wouldn't say it it painful, it would more be described as a warm, 
                            'scratchy' feeling.
                        </p>
                    </div>
                    <div className="heading__para--container">
                        <h3>How many sessions will I need?</h3>
                        <p>
                            This completely depends on the individual! One treatment will always have benefits 
                            but usually to target a specific skin condition multiple sessions are needed. (That’s why 
                            we offer pack discounts!) Different skin conditions not only require a different amount of 
                            sessions but a different amount of time between sessions.
                        </p>
                    </div>
                    <div className="heading__para--container">
                        <h3>What is the downtime involved?</h3>
                        <p>
                            There is minimal downtime involved. Inflammation and some redness is common for 
                            the first 24 hours. The next 1 - 2 days the skin can feel tight and a bit 
                            sensitive. 3 - 5 days following some clients will experience flakiness.
                            Downtime will always depend on the condition of the individuals skin.
                        </p>
                    </div>
                    <div className="heading__para--container">
                        <h3>What is the duration of the treatment?</h3>
                        <p>
                            Face - approximately 25 minutes, all treatments include a consultation and home 
                            care recommendations so allow 45 minutes.
                            <br></br>
                            Face & neck - approximately 40 minutes, all treatments include a consultation 
                            and home care recommendations so allow an hour.
                            <br></br>
                            Face, neck & décolletage - approximately an hour, all treatments include a 
                            consultation and home care recommendations so allow an hour and 15 minutes
                        </p>
                    </div>
                    <div className="heading__para--container">
                        <h3>How much does it cost?</h3>
                        <p>
                            Face - $225
                            <br></br>
                            Face & neck  - $265
                            <br></br>
                            Face, neck and décolletage - $300
                            <br></br>
                            LED Add on - $40
                            <br></br>
                            Skin needling is recommended in a course of treatments for optimal results.
                        </p>
                    </div>
                    <div className="heading__para--container">
                        <h3>Purchase 3 skin needling treatments and get 10% off, purchase 6 and get 20% off.</h3>
                        <p>
                            3 x face - $607.50 (10% off)
                            <br></br>
                            3 x face and neck - $715.50 (10% off)
                            <br></br>
                            3 x face, neck and décolletage - $810 (10% off)
                            <br></br>
                            LED add on $108 (10% off)
                            <br></br>
                            6 x face - $1080 (20% off)
                            <br></br>
                            6 x face and neck - $1272 (20% off)
                            <br></br>
                            6 x face, neck and décolletage - $1440 (20% off)
                            <br></br>
                            LED add on $192 (20% off)
                        </p>
                    </div>
                    <div className="heading__para--container">
                        <h3>Should I also have an LED treatment in conjunction with my skin needling?</h3>
                        <p>
                            For optimal results we highly recommend adding on an LED treatment to your skin 
                            needling treatment.
                            LED in conjunction with needling provides optimal results by aiding in recovery, 
                            enhancing cell renewal and destroying acne bacteria. 
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

export default SkinNeedling;
