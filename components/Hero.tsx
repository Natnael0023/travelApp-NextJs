import React from 'react'
import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  return (
    <section className=' mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 flex flex-col items-start  gap-20 py-10 md:gap-28 lg:py-20 xl:flex-row '>
        <div className="hero-map"/>
            <div className=" relative z-1 flex flex-col xl:w-1/2">
                <Image
                    src="/camp.svg"
                    alt=""
                    width={100}
                    height={100}
                    className='absolute left-0 top-0 w-20 lg:w-14'
                    />
                <h1 className=' lg:text-8xl sm:text-4xl text-3xl mt-12 font-bold lg:font-bold z-50'>Lorm ipsm dolor</h1>
                <p className=' mt-6 text-gray-20 xl:max-w-100'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ea suscipit modi laborum obcaecati, impedit exercitationem laboriosam. Consequatur, molestiae maxime.</p>
                <div className=' my-11 flex flex-wrap gap-5 '>
                    <div className=' flex items-center gap-2  '>
                        {Array(5).fill(1).map((_,index)=>(
                            <Image
                                src="/star.svg"
                                key={index}
                                alt=''
                                width={24}
                                height={24}
                            />
                        ))}
                        <p className=' font-bold'>198K</p>
                        <span className=' ml-1'>Excellent Reviews</span>
                    </div>

                <div className='   flex flex-col w-full gap-3 sm:flex-row'>
                        <Button
                            type='button'
                            title="Download App"
                            variant='bg-green-50'
                            />
                        <Button
                            type='button'
                            title="How we work?"
                            icon='/play.svg'
                            variant=' text-black bg-white border-2'
                            />
                </div>
            </div>
        </div>

{/* loc */}
        <div className=' w-80  border-2   gap-8 rounded-3xl px-7 py-8 z-20  bg-green-90'> 
                <div className='  flex flex-col'>
                    <div className="flex justify-between">
                        <p className=' text-slate-400'>
                            Location
                        </p>
                        <Image
                            src={"/close.svg"} 
                            alt='close'
                            width={24}
                            height={24}
                            className=' cursor-pointer'/>
                    </div>
                    <div className="">
                        <p className=' text-xl sm:text-2xl text-white font-bold '>Semen Mountains</p>
                        <div className=' flex gap-7 mt-5'>
                            <div >
                                <p className=' text-slate-400'>Distance</p>
                                <p className='  text-xl sm:text-2xl text-white font-bold'>240KM</p>
                            </div>
                            <div >
                                <p className=' text-slate-400'>Elevation</p>
                                <p className='  text-xl sm:text-2xl text-white font-bold'>5KM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
  )
}

export default Hero


