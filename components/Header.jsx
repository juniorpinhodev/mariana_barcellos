"use client";
import React, { use, useContext, useState } from 'react';
import { CursorContext } from './CursorContext';

import { motion } from 'framer-motion';
import Link from "next/link"
import Image from "next/image"

import { AiOutlineMenu } from 'react-icons/ai'

//Components
import MobileNav from './MobileNav';
import Nav from './Nav';
import Socials from './Socials';
import { TbPhysotherapist } from "react-icons/tb";

const Header = () => {
    const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
    const [mobileNav, setMobileNav] = useState(false);
    return (
        <header className='pb-3 xl:pb-[50px] fixed z-40 w-full bg-accent-100 xl:bg-transparent'>

            {/*topbar - outra cor para topBar: bg-accent-100 */} 
            <div className='bg-secondary-100 mb-1 xl:mb-[20px] xl:h-[50px] py-4 xl:py-0'>
                <div className="container mx-auto h-full">
                    <div className='flex items-center justify-between h-full'>
                        {/* telefone e email */}
                        <motion.div 
                            onMouseEnter={mouseEnterHandler}
                            onMouseLeave={mouseLeaveHandler} 
                            className='flex flex-col lg:flex-row items-center h-full gap-2 xl:gap-6 w-full justify-between xl:w-auto xl:justify-normal'>
                            
                            {/* email */}
                            <div className='flex items-center gap-1 text-white text-[13px]'>
                                <TbPhysotherapist />
                                <span>FISIOTERAPEUTA&nbsp;|&nbsp;CREFITO - 10 &nbsp;|&nbsp;341816 - F</span>
                            </div>
                            
                        </motion.div>
                        {/* Mídias sociais */}
                        <div className='hidden xl:block'>
                            <Socials containerStyles='flex gap-6 text-white'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto flex items-center p justify-between px-2">
                {/* {logo} */}
                <div>
                    <Link href="/">
                        <Image 
                        src="/assets/LogoModifDra.png" 
                        width={300}
                        height={20}
                        priority
                        alt=""
                        />
                    </Link>
                </div>
                {/* mobile nav trigger */}
                <div className='xl:hidden cursor-pointer'
                onClick={()=> setMobileNav(!mobileNav)}
                >
                    <AiOutlineMenu className='text-3xl text-primary' />
                </div>
                {/* mobile nav */}
                <motion.div 
                    initial={{ right: "-100%" }}
                    animate={{ right: mobileNav ? 0 : "-100%" }}
                    className='fixed bg-primary top-0 bottom-0 right-0 w-[300px] xl:hidden z-50'
                > 
                <MobileNav setMobileNav={setMobileNav} />
                </motion.div>
                {/* desktop nav */}
                <div 
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler} 
                className='hidden xl:block'>
                    <Nav />
                </div>
            </div>
        </header>
    );
};

export default Header

