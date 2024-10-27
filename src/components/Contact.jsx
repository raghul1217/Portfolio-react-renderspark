import React from 'react';
import 'boxicons/css/boxicons.min.css';
import '../styles/contact.css';

const Contact = () => {
    return (
        <div className="contact-section" id='contactid'>
            <h2 className="section-heading">Contact <span>Me</span></h2>
            <div className="contact-container">
                <div className="contact-info">
                    <h3>Contact <span>Information</span></h3>
                    <div className="c-info">
                        <p><i className='bx bxs-phone' /> +91 9345546946</p>
                        <p><i className='bx bxs-envelope' /> raghulramakrishnan2004@gmail.com</p>
                        <p><i className='bx bxs-map' /> Sengattu Colony, Cuddalore-607402</p>
                    </div>
                </div>
                <div className="contact-form">
                    <h3>Send Me a <span>Message</span></h3>
                    <form>
                        <input type="text" placeholder="Name" required />
                        <input type="email" placeholder="Email" required />
                        <textarea placeholder="Message" rows="4" required></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
            <footer className="footer">
                &copy; {new Date().getFullYear()} RenderSpark. All rights reserved.
            </footer>
        </div>
    );
};

export default Contact;
