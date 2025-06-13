import React from 'react';

const features = ["Fast", "Responsive", "Modern"];

const Features = () => (
  <section id="features" className="features">
    <h2>Features</h2>
    <div className="feature-grid">
      {features.map((item, index) => (
        <div className="feature-card" key={index}>
          <h3>{item}</h3>
        </div>
      ))}
    </div>
  </section>
);

export default Features;
