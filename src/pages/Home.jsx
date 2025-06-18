import Hero from '../components/Hero';
import Header from '../components/Header';
import React from 'react'; 
import Projects from '../components/Projects';
import Tech from '../components/Tech';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <Tech/>
      <Projects/>
      <Contact/>
      {/* <Footer/> */}
    </>
  )
}

export default Home
