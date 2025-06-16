import React from 'react';

const Hero = () => {

  return (
    <section className="containers h-screen flex flex-col justify-center items-center text-center px-4">
      <h1>
        <span className="text-5xl font-semibold">Front-end Developer</span><br />
        <span className="text-4xl font-semibold text-gray-500 dark:text-gray-400">
          Ibragimov Ismoil
        </span>
      </h1>
      <h3 className="mt-5 text-lg w-[765px]">
        I’m a Front-end Developer focused on creating responsive, accessible, and visually 
        appealing web interfaces using modern technologies like React, JavaScript, Node js,
        Tailwind CSS... I care about writing clean, efficient code and building smooth user experiences.
        Always learning and improving, I aim to deliver fast, user-friendly websites that work great on any device.
      </h3>
    </section>
  );
};

export default Hero;
