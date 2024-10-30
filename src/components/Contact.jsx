import React from 'react';
import 'boxicons/css/boxicons.min.css';
import '../styles/contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_y42pnao', 'template_1ck56w7', e.target, 'NwRwKi3HKwJUJAGMl')
            .then((result) => {
                alert("Message sent successfully!");
                console.log(result.text);
            }, (error) => {
                alert("Failed to send the message, please try again.");
                console.log(error.text);
            });
        e.target.reset(); // Reset form after submission
    };

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
                    <form onSubmit={sendEmail}>
                        <input type="text" name="from_name" placeholder="Name" required />
                        <input type="email" name="from_email" placeholder="Email" required />
                        <textarea name="message" placeholder="Message" rows="4" required></textarea>
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
