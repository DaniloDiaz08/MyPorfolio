import React from 'react'

const Contact = () => {
    return (
        <div className='w-full mt-20 bg-[#424242] flex justify-center p-4'>
            <form method='POST' action="https://getform.io/f/e21fd801-7d89-4e94-84bc-883ac052e658" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#44cde3] text-gray-300'>Contact</p>
                    <p className='text-gray-300 py-4'>|| Sumit the form below or shoot me an email - diazdanilo340qgmail.com</p>
                </div>
                <input className='bg-[#ccd6f6] p-2 rounded-xl' type="text" placeholder='Name' name='name' />
                <input className='my-4 p-2 bg-[#ccd6f6]  rounded-xl' type="text" placeholder='Email' name='Email'/>
                <textarea className='bg-[#ccd6f6] p-2  rounded-xl' name="message" rows="10" placeholder='Message'></textarea>
               <div className='flex justify-center mt-4'>
                    <a href="#_" class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-[#44cde3] transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-[#424242] group">
                        <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#44cde3] group-hover:h-full"></span>
                        <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                            <svg class="w-5 h-5 text-[#1b9db1]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                            <svg class="w-5 h-5 text-[#1b9db1]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">let's Collaborate</span>
                    </a>
               </div>
            </form>
        </div>
    )
}

export default Contact