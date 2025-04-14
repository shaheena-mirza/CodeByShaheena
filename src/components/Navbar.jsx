import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>My Portfolio</h1>
      <ul>
        <li><a href="/src/assets/resume.pdf" target="_blank" rel="noreferrer">Resume</a></li>
        <li><a href="https://linkedin.com/in/shaheena-mirza-25864b333" target="_blank" rel="noreferrer">LinkedIn</a></li>
        <li><a href="#projects">Projects</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;