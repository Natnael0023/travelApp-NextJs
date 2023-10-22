import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
    <section className='  max-w-[1440px] mx-auto px-6 lg:px-52 3xl:px-0 py-2 md:gap-28 lg:py-5'>
      <div className='  '>
        <Image
          src={"/camp.svg"}
          alt=''
          width={50}
          height={50}
        />
        <p className=' uppercase -mt-1 mb-3 text-green-50'>
          We are here for you!
        </p>
        <div className=' flex flex-wrap justify-between gap-5 lg:gap-10'>
          <h2 className='text-3xl lg:text-5xl xl:text-6xl lg:font-bold font-bold xl:max-w-[390px] '>Guide You to Easy Path</h2>
          <p className=' text-gray-20 xl:max-w-[520px]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, autem commodi. Labore, a voluptate officiis esse quidem nostrum, alias consequuntur eum quae optio, quam temporibus.
          </p>
        </div>
      </div>

      <div className='flex items-center relative w-full mt-4 py-16'>
        <Image
          src={"/boat.png"}
          alt=''
          width={1440}
          height={580}
          className='w-full object-cover object-center 2xl:rounded-5xl'
          />

          <div className=' absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] left-[13%] lg:top-30'>
            <Image
              src={"/meter.svg"}
              alt=''
              width={26}
              height={58}
              />
            <div className=' flex justify-between flex-col'>
                <div>
                  <div className='flex justify-between w-full'>
                    <p className=' text-gray-20'>Destination</p>
                    <p className=' font-bold text-green-50'>30 min</p>
                  </div>
                  <p className=' text-xl font-bold mt-2'>Jegool</p>
                </div>
                <div>
                  <div className='flex w-full justify-between'>
                    <p className=' text-gray-20'>Start track</p>
                  </div>
                  <p className=' text-xl font-bold mt-2'>Addis Ababa</p>
                </div>
            </div>

          </div>
      </div>
    </section>
  )
}

export default Guide