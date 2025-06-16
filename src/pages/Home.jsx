import Hero from '../components/Hero';
import Header from '../components/Header';
import React from 'react'; 
import Projects from '../components/Projects';
import Tech from '../components/Tech';

const Home = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <Tech/>
      <Projects/>
    </>
  )
}

export default Home
