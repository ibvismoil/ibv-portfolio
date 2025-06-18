import React from 'react'
import { LinkIcon } from '../assets/icon';
import { Github } from 'lucide-react';

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
];

const Projects = () => {
  return (
    <div id='projects' className="containers px-4 justify-center items-center text-center py-8">
      <h2 className="text-3xl font-bold mt-5 mb-6">My Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projectData.map((project, index) => (
          <div key={index} className="border p-4 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <img className='border rounded-xl h-40 object-cover w-full' src={project.img} alt={project.title} />
            <p className="text-sm my-2 text-gray-300">{project.description}</p>
            <p className="text-xs mb-2 text-gray-400">Tech: {project.tech.join(', ')}</p>
            <div className="flex gap-4 text-sm justify-between text-blue-400">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex gap-1 hover:underline"><LinkIcon />Demo</a>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex gap-1 hover:underline"><Github width='18px' height='18px' />GitHub</a>
            </div>
            {project.error && <p className='text-red-500 mt-2 text-sm'>{project.error}</p>}
          </div>
        ))}
      </div>
      <h2 className="text-xl font-bold mt-5 mb-6">There will be more projects...</h2>
    </div>
  )
}

export default Projects
