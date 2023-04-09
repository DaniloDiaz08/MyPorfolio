import React from 'react'

const About = () => {
    return (
        <div name='About' className='w-full h-screen mt-20 bg-[#424242] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-[#44cde3]'>About Me</p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi, I'm Danilo, glad you visit my portfolio, Please take a look at it</p>
                    </div>
                    <div>
                        <p>I consider myself a friendly, reliable person with great ability to adapt to the different challenges that arise daily in the IT sector. I like to be constantly learning and I strive to keep up to date with the latest technologies and market trends.<br /><br /> I am a person capable of working in a team, with assertive communication and able to take a leadership, carrying out analytical and problem solving skills, attention to detail, a lot of desire to learn and be at the forefront, carrying a seamless adaptability, to know how to prioritize handling multiple tasks and a good ability to make constructive decisions.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
