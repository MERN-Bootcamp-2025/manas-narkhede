import React from 'react';

const Skills = ({ skills }) => (
  <section className="skills">
    <h3>Skills</h3>
    <ul>
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  </section>
);

export default Skills;
