import React from 'react';

const Hero = () => {
  return (
    <section id='home' className="h-screen max-[850px]:h-[650px] flex flex-col justify-center items-center text-center px-4">
      <h1 className="mb-4">
        <span className="block text-5xl font-semibold sm:text-5xl max-[850px]:text-3xl max-[450px]:text-2xl">
          Front-end Developer
        </span>
        <span className="block text-4xl font-semibold text-gray-500 sm:text-4xl max-[450px]:text-2xl">
          Ibragimov Ismoil
        </span>
      </h1>

      <h3 className="mt-4 text-base max-w-3xl leading-relaxed max-[450px]:text-xs">
        I’m a Front-end Developer focused on building responsive, accessible, and visually appealing web interfaces using modern technologies like React, JavaScript, Node.js, and Tailwind CSS. I value clean, efficient code and seamless user experiences. Always learning and improving, I strive to deliver fast, user-friendly websites that perform well on any device.
      </h3>
    </section>
  );
};

export default Hero;
