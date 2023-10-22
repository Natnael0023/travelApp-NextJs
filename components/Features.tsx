import { FEATURES } from '@/constants'
import Image from 'next/image'
import React from 'react'


type FeatureItem ={
  title: string;
  icon: string;
  variant: string;
  desc: string;
}

const Features = () => {
  return (
    <section className=' flex  items-center overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24 max-w-[1440px]  mx-auto  px-6 lg:px-52 3xl:px-0 md:gap-28 lg:py-5'>
      <div className=' flex justify-between '>
        <div className=' hidden lg:block lg:ml-16 lg:mt-5'>
            <Image
              src={"/phone.png"}
              alt=''
              width={440}
              height={1000}
              className=' lg:block rotate-12'
            />
          </div>
          <div className='z-20 flex w-full flex-col lg:w-[60%]'>
            <div>
              <Image
                src={"/camp.svg"}
                alt=''
                width={50}
                height={50}
              />
              <h2 className='bold-40 lg:bold-64'>Our Features</h2>
            </div>
            <ul className=' mt-5 grid gap-10 md:grid-cols-2 lg:mt-10 lg:gap-20'>
              {FEATURES.map((feature)=>(
                <FeatureItem 
                title={feature.title}
                key={feature.title}
                icon={feature.icon}
                variant={feature.variant}
                desc={feature.description}
                />
              ))}
            </ul>
        </div>
      </div>
    </section>
  )
}

const FeatureItem = ({title, icon, variant, desc}: FeatureItem) =>{
  return (
    <li className=' flex w-full flex-1 flex-col items-start gap-3'>
      <div className=' rounded-full p-4 lg:p-7 bg-green-50'>
        <Image
        src={icon}
        alt=''
        width={28}
        height={28}
        />
      </div>
      <h2 className=' text-2xl font-bold'>
        {title}
      </h2>
      <p className=' text-gray-30'>
        {desc}
      </p>
    </li>
  )
}

export default Features