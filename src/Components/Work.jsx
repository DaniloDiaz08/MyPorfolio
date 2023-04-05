import React from 'react'

const Work = () => {
    return (
        <div className='w-full h-screen text-gray-300 bg-[#424242]'>
            <div className='max-w-[1000px] mx-auto p-4 felx flex-col justify-center w-ful h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#44cde3]'>Work</p>
                    <p className='py-6'>| Check out some of my recent Work</p>
                </div>

                <div className='grid sm:grid-cols- md:grid-cols-3 gap-4'>
                    <div className='shadow-lg shadow-[#44cde3] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div>
                            <span>

                            </span>
                            <div>
                                <a href="">
                                    <button></button>
                                </a>
                                <a href="">
                                    <button></button>
                                </a>
                                <a href="">
                                    <button></button>
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