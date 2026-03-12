import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="contact-header">
        <p>Visit Us</p>
        <h1>Get In Touch</h1>
      </div>

      <div className="contact-container">

        {/* Location */}

        <div className="contact-card">
          <div className="contact-icon">🗺</div>

          <h3>Location</h3>

          <p>
            Palnadu Bus Stand,<br/>
            Narasaraopet,<br/>
            Guntur District, Andhra Pradesh
          </p>
        </div>

        {/* Phone */}

        <div className="contact-card">
          <div className="contact-icon">☎</div>

          <h3>Call Us</h3>

          <p>
            +91 9553027227 <br/>
            +91 9398569497
          </p>
        </div>

        {/* Email */}

        <div className="contact-card">
          <div className="contact-icon">✉</div>

          <h3>Email</h3>

          <p>
            kgndumbiryani@gmail.com
          </p>
        </div>

      </div>

    </section>
  );
}

export default Contact;