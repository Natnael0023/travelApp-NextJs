import { PEOPLE_URL } from '@/constants';
import Image from 'next/image';
import React from 'react'

interface campProps {
  bgImg: string;
  title:string;
  subtitle:string;
  ppl:string;
}

const CampSite = ({bgImg, title,subtitle,ppl}:campProps) =>{
  return (
    <div className={` h-full w-full min-w-[1100px] ${bgImg} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl` }>
      <div className=' flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10'>
        <div className=' flex justify-center gap-4'>
          <div className=' rounded-full bg-green-50 p-4'>
            <Image 
              src="/folded-map.svg"
              alt=""
              width={20}
              height={20}
            />
          </div>
          <div className=' flex flex-col gap-1'>
            <h4 className=' text-white font-semibold'>{title}</h4>
            <p className=' text-white'>{subtitle}</p>
          </div>
        </div>
        <div className=' flex items-center gap-6'>
          <span className=' flex -space-x-5'>
            {PEOPLE_URL.map((url)=>(
              <Image
               src={url}
               key={url}
               alt='person'
               width={52}
               height={52}
              />
            ))}
          </span>
          <p className=' font-semibold text-white'>{ppl}</p>
        </div>
      </div>
    </div>
  )
}

const Camp = () => {
  return (
    <section className=' relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20 mx-auto max-w-[1440px]'>
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
          <CampSite
            bgImg="bg-bg-img-1"
            title="Gamo Gofa"
            subtitle="lorem ipsum dolor sit amet"
            ppl="10"
          />

          <CampSite
          bgImg="bg-bg-img-2"
          title="Awash"
          subtitle="lorem ipsum dolor sit amet"
          ppl="20"
          />
      </div>

      <div className=' flex items-end mt-10 px-6 lg:-mt-60 lg:mr-6'>
        <div className=' text-white bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl'>
          <h2 className=' text-3xl'>
            <strong className=' text-4xl'>Feeling Lost</strong> And not knowing the way?
          </h2>
          <p className=' mt-3'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, quaerat deleniti maiores, numquam aperiam velit sit tempore officiis eligendi nisi quo! Accusantium provident 
          </p>
          <Image
            src="/quote.svg"
            alt=''
            width={186}
            height={219}
            className='camp-quote'
          />
        </div>
      </div>
    </section>
  )
}

export default Camp