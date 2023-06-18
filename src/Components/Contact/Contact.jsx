import React from 'react'
import '../Contact/Contact.scss'
import contact from '../img/contact.svg'

function Contact() {
    return (
        <div className='contact-container'>
            <div className="contact-box">
                <div className="contact-image">
                    <img src={contact} alt="contact" />
                </div>
                <div className="contact-form">
                    <h1>Embark on an Unforgettable Journey: Book Your Istanbul Tour Today!</h1>

                    <form id="contact-form" method="post">
                    
                        <input type="text" id="name" name="name" placeholder="Your Full Name" required />
                       
                        <input type="email" id="email" name="email" placeholder="Your Email Address" required />
                        <input rows="6" placeholder="Your Message" id="message" name="message" required></input>

                       <div className="buttons">
                       <button type="submit" id="submit" name="submit">Send</button>
                       </div>

                    </form>
                </div>
            </div>
        </div>
    )
}



export default Contact

