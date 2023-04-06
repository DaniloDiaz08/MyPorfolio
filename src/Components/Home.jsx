import React from 'react';

const Home = () => {
    return (
        <div className='w-full bg-[#424242]'>

            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-[#44CDE3] mt-32'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#CCD6F6]'>Danilo Díaz</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Full Stack Developer.</h2>
                <p className='text-white py-4 max-w-[700px]'>I am a junior web developer with skills in HTML, CSS, JavaScript, React.js, Node.js, MySQL, MongoDB and Express.js, with interest in user experience through modern and efficient web designs. <br /><br /> Thanks to my background I have done coding projects individually and in groups, which has allowed me to develop skills in SCRUM methodologies, teamwork and active listening. </p>
                <div>
                    <a href="#_" class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-[#44cde3] transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-[#424242] group">
                        <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#44cde3] group-hover:h-full"></span>
                        <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                            <svg class="w-5 h-5 text-[#1b9db1]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                            <svg class="w-5 h-5 text-[#1b9db1]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">View Work</span>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Home