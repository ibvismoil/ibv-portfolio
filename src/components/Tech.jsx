import React from 'react'
import { CSSIcon, FIGMAIcon, GitBashIcon, GitHubIcon, HTMLIcon, JSIcon, NextJSIcon, NodeJSIcon, NPMIcon, ReactIcon, SASSIcon, ShadcnUiIcon, TailwindCSSIcon, TSIcon, VercelIcon,  } from '../assets/icon'

const Tech = () => {
    return (
        <div className='containers justify-center items-center text-center'>
            <h1 className='text-3xl font-semibold'>My Tech Stack</h1>
            <div className="items-center gap-8 mt-8 grid grid-cols-6 flex-wrap justify-center text-center">
                <span className='w-[140px] h-[130px]'><HTMLIcon /></span>
                <span className='w-[140px] h-[130px]'><CSSIcon /></span>
                <span className='w-[140px] h-[130px]'><JSIcon /></span>
                <span className='w-[140px] h-[130px]'><GitBashIcon /></span>
                <span className='w-[140px] h-[130px]'><TailwindCSSIcon /></span>
                <span className='w-[140px] h-[130px]'><ReactIcon /></span>
                <span className='w-[140px] h-[130px]'><NextJSIcon /></span>
                <span className='w-[140px] h-[130px] test '><GitHubIcon /></span>
                <span className='w-[140px] h-[130px] test '><ShadcnUiIcon /></span>
                <span className='w-[140px] h-[130px]'><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" /></span>
                <span className='w-[140px] h-[130px] test '><NodeJSIcon /></span>
                <span className='w-[140px] h-[130px] test '><NPMIcon /></span>
                <span className='w-[140px] h-[130px] test '><SASSIcon /></span>
                <span className='w-[140px] h-[130px] test '><VercelIcon /></span>
                <span className='w-[140px] h-[130px] test '><FIGMAIcon /></span>
                <span className='w-[140px] h-[130px] test '><TSIcon /></span>
            </div>
        </div>
    )
}

export default Tech
