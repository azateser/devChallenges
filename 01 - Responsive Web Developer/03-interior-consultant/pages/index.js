import React, { useState } from 'react'

import Head from 'next/head'

import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'

import classNames from 'classnames'

const Home = () => {

  const [show, setShow] = useState(false)

  return (
    <React.Fragment>
      <Head>
      <link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@200&family=Lora:wght@500;700&family=Montserrat:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>

      <div className={classNames({
        'h-screen fixed z-50 w-full t-0 l-0 bg-[#181719] text-white': true,
        'hidden': !show
      })}>
        <div onClick={() => setShow(!show)}  className='flex items-end justify-end p-3 cursor-pointer'><IoMdClose size={32} /></div>
        <div className='flex items-center justify-center h-full -mt-10 text-center'>
        <ul className='flex flex-col gap-6 text-lg'>
              <li className='font-bold'>Home</li>
              <li className='hover:font-bold transition-all hover:scale-105 cursor-pointer'>Collection</li>
              <li className='hover:font-bold transition-all hover:scale-105 cursor-pointer'>About</li>
              <li className='hover:font-bold transition-all hover:scale-105 cursor-pointer'>Contact</li>
            </ul>
        </div>
      </div>

      <div className='lg:px-20 px-3 lg:py-11 py-4 text-white'>
        <div className='flex items-center justify-between'>
          <div>
            <div className='font-crimson border-2 px-3 py-1 text-sm'>THIS INTERIOR</div>
          </div>
          <div>
            <ul className='gap-20 text-lg lg:flex hidden'>
              <li className='border-b font-bold'>Home</li>
              <li>Collection</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
            <div onClick={() => setShow(!show)} className='lg:hidden flex cursor-pointer'><GiHamburgerMenu size={28} /></div>
            
          </div>
        </div>
        <div className='flex lg:flex-row flex-col items-center lg:my-40'>
          <div className='lg:w-[59rem] w-full lg:pr-36'>
            <div className='font-lora font-medium lg:text-5xl text-4xl lg:mt-12 mt-10'>Modern interior</div>
            <div className='lg:text-2xl text-sm lg:pt-10 pt-6 lg:w-auto w-56'>A full-Service residential & commercial interior design and staging company offering professional organizing & eco-services.</div>
            <div className='font-bold lg:text-lg text-sm lg:pt-10 pt-4 flex items-center gap-3 cursor-pointer group'>Read more <HiOutlineArrowNarrowRight className='group-hover:translate-x-2 transition-all duration-300' size={24} /></div>
          </div>
          <div className='relative lg:mt-0 mt-8'>
            <img src="./assets/photo1.png" alt="photo-1" />
            <div className='shadow-[0px_4px_4px_rgba(0,0,0,0.25)] lg:w-[26rem] w-72 lg:px-8 px-4 py-4 absolute -bottom-24 right-6 bg-[#181719]'>
              <div className='flex items-center gap-4'>
              <div>
                <img className='lg:w-12 w-10 rounded-full' src="./assets/photo2.png" alt="profile" />
              </div>
              <div className='flex flex-col gap-2'>
                <div className='font-medium lg:text-sm text-xs'>Aliza Webber</div>
                <div className='font-medium text-[#828282] lg:text-xs text-[10px]'>Interior designer</div>
              </div>
              </div>
              <div className='font-lora font-bold lg:text-2xl text-lg lg:pr-20 pr-12 my-4'>Designed in 2020 by Aliza Webber</div>
            </div>
          </div>
        </div>
      </div>

      </React.Fragment>
  )
}

export default Home