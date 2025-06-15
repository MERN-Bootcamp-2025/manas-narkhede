import React from 'react';
import Header from './Header';
import Skills from './Skills';
import Contact from './Contact';
import Bio from './Bio';
import '../App.css'; 

const ProfileCard =({
  name = "Anonymous",
  title = "No Title",
  avatar,
  bio,
  skills = [],
  email,
  social = [],
  layout = "detailed"
}) => {
  return (
    <div className={`profile-card ${layout}`}>
      <Header name={name} title={title} avatar={avatar} />
      {layout === "detailed" && (
        <>
          {bio && <Bio bio={bio} />}
          {skills.length > 0 && <Skills skills={skills} />}
          {(email || social.length > 0) && <Contact email={email} social={social} />}
        </>
      )}
    </div>
  );
};

export default ProfileCard;
