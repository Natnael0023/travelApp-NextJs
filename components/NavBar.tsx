'use client'

import { NAV_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Button from './Button'



const NavBar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav  className=' max-w-[1440px]  flex items-center justify-between mx-auto px-6 lg:px-52 3xl:px-0 py-2 md:gap-28 lg:py-5 '>
      <Link href={"/"} className=' flex items-center'>
        <Image src="/hilink-logo.svg" width={40} height={29} alt=''/>
        <h2 className=''>Traveler</h2>
      </Link>

      <ul className=' hidden  50 lg:flex gap-12 h-full  '>
          {NAV_LINKS.map((link)=>(
            <Link href={link.href} key={link.key} className='  cursor-pointer pb-1.5 transition-all hover:font-bold'>
              {link.label}
            </Link>
          ))}
      </ul>

      <div className=' hidden lg:flex lg:items-center'>
            <Button 
            type="button" 
            title="Login" 
            icon="" 
            variant='bg-emerald-950 text-white'/>
      </div>

{/* mobile nav */}
      <div className=' lg:hidden '>
        <div className="dropdown dropdown-end z-50 ">
          <label tabIndex={0} className="">
            <Image 
              src="/menu.svg" 
              width={30} 
              height={30} 
              alt=''
              className=' inline-block cursor-pointer lg:hidden'
              />
          </label>
          <ul tabIndex={0} className=" dropdown-content z-[1] menu p-3 gap-4 shadow bg-base-100 rounded-box w-52 ">
            {NAV_LINKS.map((link)=>(
            <Link href={link.href} key={link.key} className=' cursor-pointer pb-1.5 transition-all hover:font-bold text-[1rem] border-b border-gray-10'>
              {link.label}
            </Link>
            ))}
          </ul>
        </div>
      </div>
      
    </nav>
  )
}

export default NavBar