import React, { Component } from 'react'


export default class Header extends Component{
    render(){
        return(
            <div className='fixed top-0 w-full h-[100px] bg-cyan-400'>
                <div className='flex w-[90%] justify-center mt-10'>
                    <div className='flex flex-col mr-30'>
                        <a href="/">Home</a>
                    </div>
                    <div className='flex flex-col mr-30'>
                        <a href="/about">About</a>
                    </div>
                    <div className='flex flex-col'>
                        <a href="/blog">Blog</a>
                    </div>
                    <div className='flex flex-col'>
                        <a href="/counter">Counter</a>
                    </div>
                </div>
            </div>
        )
    }
}