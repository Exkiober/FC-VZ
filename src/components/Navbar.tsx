'use client'

import  { forwardRef } from 'react';
import {  FaBars, FaTimes } from "react-icons/fa"
import { useLocation } from 'react-router-dom';



interface NavbarProps {
    isOpen: boolean;
    toggleMenu: () => void;
}

const Navbar = forwardRef<HTMLDivElement, NavbarProps>((props) => {
    const { isOpen, toggleMenu } = props; // Destructure props
    const location = useLocation();
    const pathname = location.pathname;
    
    return (
            <div className='flex justify-between items-center mt-4'>

                <p className='text-[20px] text-white text-galaxy-gradient'>Exkiober</p>

                <div className=' md:hidden text-white absolute top-14 right-[4.5vw] cursor-pointer' onClick={toggleMenu}>
                    {isOpen ? '' : <FaBars className="text-white" />}
                </div>

                {/* mobile menu */}
                {isOpen && (
                    <div className='absolute flex flex-col p-4 gap-4 md:hidden items-center fixed inset-0 bg-neutral-500/50 justify-center backdrop-blur-lg'>
                        <div>
                            <FaTimes className="text-white absolute top-14 right-[4.5vw] cursor-pointer" onClick={toggleMenu}/>
                        </div>
                        <ul className=''>
                            <a href='/' className={`flex flex-row items-center `}>
                                <p className={`text-[20px] text-white ${pathname === '/' ? 'border-b-4 border-zinc-500 dark:border-white inline-block' : ''}`}>Home</p>
                            </a>
                            {/* <a href='/Project' className={`flex flex-row items-center `}>
                                <p className={`text-[20px] text-white ${pathname === '/Project' ? 'border-b-4 border-zinc-500 dark:border-white inline-block' : ''}`}>Project</p>
                            </a>
                            <a href='/Resume' className={`flex flex-row items-center `}>
                                <p className={`text-[20px] text-white ${pathname === '/Resume' ? 'border-b-4 border-zinc-500 dark:border-white inline-block' : ''}`}>Resume</p>
                            </a> */}
                        </ul>
                    </div>
                )}
                <div className='hidden md:flex flex-row gap-8'>
                    <a href='/' className={`flex flex-row `}>
                        <p className={`text-[20px] text-white ${pathname === '/' ? 'border-b-4 border-zinc-500 dark:border-white inline-block' : ''}`}>Home</p>
                    </a>
                    {/* <a href='/Project'>
                        <div className={`flex flex-row `}>
                            <p className={`text-[20px] text-white ${pathname === '/Project' ? 'border-b-4 border-zinc-500 dark:border-white inline-block' : ''}`}>Project</p>
                        </div>
                    </a>
                    <a href='/Resume'>
                        <div className={`flex flex-row `}>
                            <p className={`text-[20px] text-white ${pathname === '/Resume' ? 'border-b-4 border-zinc-500 dark:border-white inline-block' : ''}`}>Resume</p>
                        </div>
                    </a> */}
                </div>
            </div>

    );
});

// Set the display name for better debugging
Navbar.displayName = 'Navbar';

export default Navbar;

