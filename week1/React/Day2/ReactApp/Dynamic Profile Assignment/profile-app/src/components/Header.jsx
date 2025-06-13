import React from 'react';

const Header = ({ name, title, avatar }) => (
  <header className="header">
    {avatar && <img src={avatar} alt={name} className="avatar" />}
    <h2>{name}</h2>
    <p>{title}</p>
  </header>
);

export default Header;
