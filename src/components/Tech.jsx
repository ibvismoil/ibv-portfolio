import React from 'react';
import {
  CSSIcon, FIGMAIcon, GitBashIcon, GitHubIcon, HTMLIcon, JSIcon,
  NextJSIcon, NodeJSIcon, NPMIcon, ReactIcon, SASSIcon, ShadcnUiIcon,
  TailwindCSSIcon, TSIcon, VercelIcon,
} from '../assets/icon';

const Tech = () => {
  return (
    <div id='skills' className='containers justify-center items-center text-center'>
      <h1 className='text-3xl font-semibold'>My Tech Stack</h1>
      <div className="mt-8 flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
  <span className='w-28 h-28 max-[640px]:w-20 max-[640px]:h-20'><HTMLIcon /></span>
  <span className='w-28 h-28 max-[640px]:w-20 max-[640px]:h-20'><CSSIcon /></span>
  <span className='w-28 h-28 max-[640px]:w-20 max-[640px]:h-20'><JSIcon /></span>
  <span className='w-28 h-28 max-[640px]:w-20 max-[640px]:h-20 max-[640px]:hidden'><GitBashIcon /></span>
  <span className='w-28 h-28 max-[640px]:w-20 max-[640px]:h-20'><TailwindCSSIcon /></span>
  <span className='w-28 h-28 max-[640px]:w-20 max-[640px]:h-20'><ReactIcon /></span>
  <span className='w-28 h-28 max-[640px]:w-20 max-[640px]:h-20'><NextJSIcon /></span>
  <span className='w-28 h-28 max-[640px]:w-20 max-[640px]:h-20'><GitHubIcon /></span>
  <span className='w-28 h-28 max-[640px]:w-20 max-[640px]:h-20 max-[640px]:hidden'><ShadcnUiIcon /></span>
  <span className='w-28 h-28 max-[640px]:w-20 max-[640px]:h-20'>
    <img title='VSCode' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" />
  </span>
  <span className='w-28 h-28 max-[640px]:w-20 max-[640px]:h-20 max-[500px]:hidden'><NodeJSIcon /></span>
  <span className='w-28 h-28 max-[640px]:w-20 max-[640px]:h-20 max-[500px]:hidden'><NPMIcon /></span>
  <span className='w-28 h-28 max-[640px]:w-20 max-[640px]:h-20 max-[640px]:hidden'><SASSIcon /></span>
  <span className='w-28 h-28 max-[850px]:hidden'><VercelIcon /></span>
  <span className='w-28 h-28 max-[640px]:w-20 max-[640px]:h-20'><FIGMAIcon /></span>
  <span className='w-28 h-28 max-[640px]:w-20 max-[640px]:h-20'><TSIcon /></span>
</div>

    </div>
  );
};

export default Tech;
