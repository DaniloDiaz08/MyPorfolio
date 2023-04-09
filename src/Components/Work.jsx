import React from 'react';
import Calculator from '../assets/Calculator.jpg';
import Dezeer from '../assets/Deezer.jpg';
import GithubPer from '../assets/GithuDPerfilesImg.jpg';
import Zshop from '../assets/Zshop.jpeg';
import OQA from '../assets/OQA.jpg';
import PrSchool from '../assets/PrSchool.jpg';

const Work = () => {
    return (
        <div name="Work" className='w-full mt-20 text-gray-300 bg-[#424242]'>

            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-ful h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#44cde3]'>Work</p>
                    <p className='py-6'>| Check out some of my recent Work</p>
                </div>

                {/* Grid Items */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6'>
                    <div style={{ backgroundImage: `url(${Zshop})` }}
                        className='shadow-lg shadow-[#44cde3] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Zshop Home Page
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#424242] font-bold text-lg'>Demo</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#424242] font-bold text-lg'>Code</button>
                                </a>

                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${GithubPer})` }}
                        className='shadow-lg shadow-[#44cde3] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Api Profiles Github
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#424242] font-bold text-lg'>Demo</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#424242] font-bold text-lg'>Code</button>
                                </a>

                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${Dezeer})` }}
                        className='shadow-lg shadow-[#44cde3] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white rounded-lg tracking-wider'>
                                Dezeer Imitation
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#424242] font-bold text-lg'>Demo</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#424242] font-bold text-lg'>Code</button>
                                </a>

                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${Calculator})` }}
                        className='shadow-lg shadow-[#44cde3] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white  rounded-lg tracking-wider'>
                                Calculator In Js
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#424242] font-bold text-lg'>Demo</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#424242] font-bold text-lg'>Code</button>
                                </a>

                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${OQA})` }}
                        className='shadow-lg shadow-[#44cde3] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white rounded-lg tracking-wider'>
                                OQA online store
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#424242] font-bold text-lg'>Demo</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#424242] font-bold text-lg'>Code</button>
                                </a>

                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${PrSchool})` }}
                        className='shadow-lg shadow-[#44cde3] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white rounded-lg tracking-wider'>
                                Programate School
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#424242] font-bold text-lg'>Demo</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#424242] font-bold text-lg'>Code</button>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Work