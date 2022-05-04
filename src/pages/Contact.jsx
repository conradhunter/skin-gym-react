import React from 'react';

const Contact = () => {
    return (
        <div className="contact__page">
            <div className="row">
                <div className="contactForm__container">
                    <h1>Get in touch with us!</h1>
                    <div className="contactForm">
                        <div className='labelInput__container'>
                            <label htmlFor="">First Name</label>
                            <input type="text" />
                        </div>
                        <div className='labelInput__container'>
                            <label htmlFor="">Last Name</label>
                            <input type="text" />
                        </div>
                        <div className='labelInput__container'>
                            <label htmlFor="">Email</label>
                            <input type="email" />
                        </div>
                        <div className='labelInput__container'>
                            <label htmlFor="">Phone Number</label>
                            <input type="tel" />
                        </div>
                        <div className='labelInput__container' id='textArea'>
                            <label htmlFor="">Message</label>
                            <textarea name="message" placeholder='Leave a message with any questions or enquiries!' id="" cols="30" rows="10"></textarea>
                        </div>
                    </div>
                    <button className="btn contact__btn">Send it our way!</button>
                </div>
            </div>
        </div>
    );
}

export default Contact;
