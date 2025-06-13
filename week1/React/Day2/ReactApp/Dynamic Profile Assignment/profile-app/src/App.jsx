import React from 'react';
import ProfileCard from './components/ProfileCard';
import './App.css';

const users = [
  {
    name: "Manas Narkhede",
    title: "Full Stack Developer",
    avatar: "https://via.placeholder.com/100",
    bio: "Passionate about building full stack apps.",
    skills: ["Java", "React", "Node.js"],
    email: "manas@example.com",
    social: ["https://github.com/manas", "https://linkedin.com/in/manas"]
  },
  {
    name: "Aarav Sharma",
    title: "Backend Engineer",
    skills: ["Node.js", "MongoDB"],
    layout: "compact"
  },
  {
    name: "Riya Desai",
    title: "Frontend Intern",
    bio: "Learning frontend technologies.",
    email: "riya@example.com"
  }
];

function App() {
  return (
    <div className="app">
      {users.map((user, i) => (
        <ProfileCard key={i} {...user} />
      ))}
    </div>
  );
}

export default App;
