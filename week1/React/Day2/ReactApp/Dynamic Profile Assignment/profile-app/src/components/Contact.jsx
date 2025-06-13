import React from 'react';

const Contact = ({ email, social }) => (
  <section className="contact">
    <h3>Contact</h3>
    {email && <p>Email: {email}</p>}
    {social.length > 0 && (
      <ul>
        {social.map((link, i) => (
          <li key={i}><a href={link}>{link}</a></li>
        ))}
      </ul>
    )}
  </section>
);

export default Contact;
