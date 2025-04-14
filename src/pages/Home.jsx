import React from 'react';
import me from '../assets/me.jpg';

const Home = () => {
  return (
    <section className="home">
      <img src={me} alt="Me" className="profile-pic" />
      <h2>Hello, I'm Shaheena Mirza</h2>
      <p>I’m  a passionate UI design student with a keen eye for clear interfaces and human center design. My focus is on creating intuitive digital experiences that are accessible, engaging, and impactful. </p>
    </section>
  );
};

export default Home;