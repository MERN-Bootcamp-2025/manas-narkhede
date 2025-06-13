import React from 'react';

const Hero = () => (
  <section className="hero">
    <h1>Welcome to Our Landing Page</h1>
    <p>Today's date is {new Date().toLocaleDateString()}</p>
  </section>
);

export default Hero;
