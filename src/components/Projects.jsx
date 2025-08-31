import React, { useState } from 'react';
import { LinkIcon } from '../assets/icon';
import { Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const projectData = [
  {
    title: 'Ashyo Market',
    description: 'Hardware store you can buy any hardware there at a great price',
    img: 'https://res.cloudinary.com/dfjlyazf5/image/upload/v1750089137/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2025-06-16_204906_huza9z.png',
    tech: ['React', 'Tailwind CSS'],
    link: 'https://ashyo-online-market.vercel.app',
    github: 'https://github.com/ibvismoil/Ashyo-Market',
    error: 'Error: API is not working'
  },
  {
    title: 'Green Shop',
    description: 'Flower shop',
    img: 'https://res.cloudinary.com/dfjlyazf5/image/upload/v1750090620/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2025-06-16_211642_eijdew.png',
    tech: ['React', 'Tailwind CSS', 'Lucide'],
    link: 'https://green-shop-ibv.vercel.app',
    github: 'https://github.com/ibvismoil/green-shop-ibv',
    error: ''
  },
  {
    title: 'Admin Panel',
    description: 'Admin panel where you can do CRUD students',
    img: 'https://res.cloudinary.com/dfjlyazf5/image/upload/v1750090895/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2025-06-16_212121_shm9qj.png',
    tech: ['HTML', 'CSS'],
    link: 'https://adminpanel-two-snowy.vercel.app',
    github: 'https://github.com/ibvismoil/5-oy-imtxon',
    error: ''
  },
  {
    title: 'Planture Shop',
    description: 'This is an online store for selling flowers',
    img: 'https://res.cloudinary.com/dfjlyazf5/image/upload/v1755756784/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2025-08-21_110949_wxovpg.png',
    tech: ['Vite js - frontend', 'Payload CMS - backend'],
    link: 'https://flower-shop-two-chi.vercel.app',
    github: 'https://github.com/ibvismoil/Flower-Shop',
    error: 'In development',
    backend: 'https://flower-backend-betav2.vercel.app'
  },
  {
    title: 'Polar Ice Cream',
    description: 'Ice cream shop where you can buy ice cream',
    img: 'https://res.cloudinary.com/dfjlyazf5/image/upload/v1756648192/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2025-08-31_183213_zlfnaz.png',
    tech: ['HTML', 'CSS'],
    link: 'https://ice-cream-tau-five.vercel.app',
    github: 'https://github.com/ibvismoil/Ice-Cream2',
    error: '',
    backend: ''
  },
  {
    title: 'Cosmetics Shop',
    description: 'Cosmetics shop where you can buy cosmetics',
    img: 'https://res.cloudinary.com/dfjlyazf5/image/upload/v1756650281/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2025-08-31_192419_aldxlb.png',
    tech: ['HTML', 'CSS', 'Tailwind CSS'],
    link: 'https://cosmetics-drab.vercel.app',
    github: 'hhttps://github.com/ibvismoil/Cosmetics',
    error: '',
    backend: ''
  },
  {
    title: 'Cargo',
    description: 'Cargo transportation service',
    img: 'https://res.cloudinary.com/dfjlyazf5/image/upload/v1756652168/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2025-08-31_195551_hbc9h7.png',
    tech: ['HTML', 'CSS', 'Tailwind CSS'],
    link: 'https://imtxon-sepia.vercel.app',
    github: 'https://github.com/ibvismoil/cargo',
    error: '',
    backend: ''
  },
  {
    title: 'Clock',
    description: 'Clock application',
    img: 'https://res.cloudinary.com/dfjlyazf5/image/upload/v1756652567/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2025-08-31_200218_vty5n6.png',
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://ismoil-clock.vercel.app',
    github: 'https://github.com/ibvismoil/clock',
    error: '',
    backend: ''
  },
  {
    title: 'Beuty Shop',
    description: 'Beuty shop where you can buy beuty products',
    img: 'https://res.cloudinary.com/dfjlyazf5/image/upload/v1756652866/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2025-08-31_200429_dpe1w5.png',
    tech: ['HTML', 'CSS'],
    link: 'https://shopmarket-nine.vercel.app/',
    github: 'https://github.com/ibvismoil/shop',
    error: '',
    backend: ''
  },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

  const displayedProjects = isMobile && !showAll 
    ? projectData.slice(0, 3) 
    : projectData;

  return (
    <div id='projects' className="containers px-4 justify-center items-center text-center py-8">
      <h2 className="text-3xl font-bold mt-5 mb-6">My Projects</h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className="border p-4 rounded-xl shadow hover:shadow-xl transition"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <img className='border rounded-xl h-40 object-cover w-full' src={project.img} alt={project.title} />
              <p className="text-sm my-2 text-gray-300">{project.description}</p>
              <p className="text-xs mb-2 text-gray-400">Tech: {project.tech.join(', ')}</p>
              <div className="flex gap-4 text-sm justify-between text-blue-400">
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex gap-1 hover:underline">
                    <LinkIcon />Demo
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex gap-1 hover:underline">
                    <Github width="18px" height="18px" />GitHub
                  </a>
                )}
              </div>
              {project.error && <p className='text-red-500 mt-2 text-sm'>{project.error}</p>}
              {project.backend && <Link to={project.backend} className='text-blue-400 hover:underline text-sm'>Backend</Link>}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {isMobile && (
        <motion.button
          onClick={() => setShowAll(!showAll)}
          className="mt-6 px-4 py-2 bg-none border-white text-yellow-500 rounded-lg transition"
          whileTap={{ scale: 0.95 }}>
          {showAll ? "Скрыть проекты" : "Show all projects"}
        </motion.button>
      )}

      <h2 className="text-xl font-bold mt-5 mb-6">There will be more projects...</h2>
    </div>
  )
}

export default Projects;
