import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Footer = () => {
  return (
    <footer className=' flex items-center mx-auto lg:mb-24 px-6 lg:px-0 py-16 max-w-[1440px]'>
      <div className=' flex w-full gap-14 flex-col'>
        <div className=' flex flex-col items-start justify-center gap-[10%] md:flex-row'>
          <Link href={'/'}>
            <Image src="/hilink-logo.svg" alt='' width={74} height={29}/>
            <h2>Traveler.</h2>
          </Link>
          <div className=' flex flex-wrap gap-10 sm:justify-between md:flex-1'>
            {FOOTER_LINKS.map((columns)=>(
              <FooterColumn  title={columns.title}>
                  <ul className=' flex flex-col text-gray-30 gap-4'>
                    {columns.links.map((link)=> (
                      <Link href={'/'} key={link}>
                        {link}
                      </Link>
                    ))}
                  </ul>
              </FooterColumn>
            ))}

            <div className=' flex flex-col gap-5'>
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link)=>(
                  <Link href={'/'} key={link.label} className=' flex lg:flex-row flex-col gap-4' >
                    <p className=' whitespace-nowrap'>
                      {link.label}
                    </p>
                    <p className=' whitespace-nowrap'>
                      {link.value}
                    </p>
                  </Link>
                ))}
              </FooterColumn>
            </div>
            
            <div className=' '>
              <FooterColumn title={SOCIALS.title}>
                  <ul className=' flex gap-4'>
                    {SOCIALS.links.map((link)=>(
                      <Link href={'/'} key={link}>
                        <Image src={link} alt='' width={24} height={24}/>
                      </Link>
                    ))}
                  </ul>
              </FooterColumn>
            </div>
          </div>
        </div>
        <div className=' border bg-gray-20'/>
        <p className=' w- full text-center'>Developed by Natnael Legesse 2023</p>
      </div>
    </footer>
  )
}

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
}

const FooterColumn = ({title,children}: FooterColumnProps) =>{
  return (
    <div className=' flex flex-col gap-5'>
      <h4 className=' font-bold text-xl'>{title}</h4>
      {children}
    </div>
  )
}


export default Footer