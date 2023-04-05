import React from 'react';
import Javascript from '../assets/javascript.png';
import Reactimg from '../assets/react.png';
import Node from '../assets/node.png';
import Figma from '../assets/Figma.png';
import Github from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Html from '../assets/html.png';
import Css from '../assets/css.png';
import Mongo from '../assets/mongo.png';
import Angular from '../assets/Angular.png';
import Express from '../assets/Express.js.png';
import Git from '../assets/git.png';

const Skills = () => {
    return (
        <div name='skills' className='w-full h-screen bg-[#424242] text-gray-300'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-[#44cde3]'>Experience</p>
                    <p className='py-4'>| These are the tecnologies I've worked with</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-6 text-center py-8 rounded-lg'>

                    <div className='shadow-md shadow-[#44cde3] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto mt-4' src={Html} alt="HTML icon" />
                        <p className='my-4'>HTML</p>
                    </div>


                    <div className='shadow-md shadow-[#44cde3] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto mt-4' src={Css} alt="HTML icon" />
                        <p className='my-4'>CSS</p>
                    </div>

                    <div className='shadow-md shadow-[#44cde3] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto mt-4' src={Javascript} alt="HTML icon" />
                        <p className='my-4'>JAVASCRIPT</p>
                    </div>


                    <div className='shadow-md shadow-[#44cde3] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto mt-4' src={Reactimg} alt="HTML icon" />
                        <p className='my-4'>REACT</p>
                    </div>

                    <div className='shadow-md shadow-[#44cde3] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto mt-4' src={Node} alt="HTML icon" />
                        <p className='my-4'>NODE JS</p>
                    </div>

                    <div className='shadow-md shadow-[#44cde3] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto mt-4' src={Mongo} alt="HTML icon" />
                        <p className='my-4'>MONGO DB</p>
                    </div>

                    <div className='shadow-md shadow-[#44cde3] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto mt-4' src={Github} alt="HTML icon" />
                        <p className='my-4'>GITHUB</p>
                    </div>

                    <div className='shadow-md shadow-[#44cde3] hover:scale-110 duration-500'>
                        <img className='w-[57%] mx-auto mt-4' src={Figma} alt="HTML icon" />
                        <p className='my-4'>FIGMA</p>
                    </div>

                    <div className='shadow-md shadow-[#44cde3] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto mt-4' src={Tailwind} alt="HTML icon" />
                        <p className='my-4'>TAILWIND</p>
                    </div>

                    <div className='shadow-md shadow-[#44cde3] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto mt-4' src={Angular} alt="HTML icon" />
                        <p className='my-4'>ANGULAR</p>
                    </div>

                    <div className='shadow-md shadow-[#44cde3] hover:scale-110 duration-500'>
                        <img className='w-[65%] mx-auto mt-6 rounded' src={Express} alt="HTML icon" />
                        <p className='my-4'>EXPRESS JS</p>
                    </div>

                    <div className='shadow-md shadow-[#44cde3] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto mt-4' src={Git} alt="HTML icon" />
                        <p className='my-4'>GIT</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Skills