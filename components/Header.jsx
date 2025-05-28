"use client";
import React, { use, useContext } from 'react';
import { CursorContext } from './CursorContext';

import { motion } from 'framer-motion';
import Link from "next/link"
import Image from "next/image"

const Header = () => {
    const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
    return (
        <header className="pb-6 xl:pb-[50px] fixed z-40 w-full bg-accent-100 xl:bg-transparent">

            {/*topbar*/}
            <div className='bg-secondary-100 mb-6 xl:mb-[50px] xl:h-[50px] py-4 xl:py-0'>Topbar</div>

            <div className="container">
                {/* {logo} */}
                <div>
                    <Link href="/">
                        <Image src="/assets/next.svg" 
                        width={120}
                        height={40}
                        priority
                        alt=""
                        />
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header