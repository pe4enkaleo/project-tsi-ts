import React from 'react'

const Footer = () => {
    return (
        <div className='fixed bottom-0 w-full h-[300px] bg-gray-800'>
            <div className='flex w-[90%] justify-center mt-10 text-white'>
                <div className='flex flex-col mr-30'>
                    <p>Pages</p>
                    <div className='underline flex flex-col'>
                        <a href = "/">Home</a>
                        <a href = "/about">About</a>
                        <a href = "/blog">Blog</a>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <p>Info</p>
                    <div className='underline'>
                        <p>Privacy policy</p>
                        <p>Terms of service</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Footer