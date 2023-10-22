import { NAV_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from './Button'

const NavBar = () => {
  return (
    <nav className=' max-w-[1440px]  flex items-center justify-between mx-auto px-6 lg:px-52 3xl:px-0 py-2 md:gap-28 lg:py-5 '>
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

      <Image 
      src="/menu.svg" 
      width={40} 
      height={30} 
      alt=''
      className=' inline-block cursor-pointer lg:hidden'
      />

    </nav>
  )
}

export default NavBar