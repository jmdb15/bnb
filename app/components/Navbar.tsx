import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SearchFilters from './SearchFilters'
import globe from '@/public/globe.svg'

const Navbar = () => {
  return (
    <nav className='w-full z-10 fixed top-0 py-4 shadow-md border-b border-b-amber-400 bg-amber-100'>
        <div className='max-w-[1500px] mx-auto px-6'>
            <div className='flex justify-between items-center'>
                <Link href={"/"}>
                    <Image 
                        src={globe} 
                        alt={"logo"} 
                        width={30}
                        height={30}
                    />
                </Link>

                <div className='hidden md:flex items-center space-x-6'>
                    <SearchFilters />
                </div>

                <div id="burger" className='flex items-center space-x-6'>
                    burger
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
