import React from 'react'

import Head from 'next/head'

import {FaPen, FaCode, FaServer, FaLongArrowAltRight} from 'react-icons/fa'
import {HiMenu} from 'react-icons/hi'

const Home = () => {
  return (
    <React.Fragment>
    <Head>
    <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@800&family=Poppins:wght@400;500;700&display=swap" rel="stylesheet"></link>
    </Head>

    <div className='md:p-12 p-6'>
      
      <div className='flex justify-between items-center'>
        <div className='font-heebo md:text-4xl text-2xl'>Edie</div>
        <div>
         <div className='md:flex hidden'>
          <ul className='flex gap-14 text-2xl'>
              <li className='cursor-pointer'>Home</li>
              <li className='cursor-pointer'>Services</li>
              <li className='cursor-pointer'>Our Works</li>
              <li className='cursor-pointer'>Clients</li>
              <li className='cursor-pointer'>Contact</li>
            </ul>
         </div>
        <div className='md:hidden flex'><HiMenu size={24} /></div>
        </div>
      </div>

      <div className='md:mx-56 px-6 md:mt-24 mt-16'>
        <div className='text-[#2D9CDB] md:text-lg text-xs'>Unhappy with your website?</div>
        <div className='md:text-5xl text-2xl md:w-2/3 pr-4 leading-relaxed mt-2'>We create beautiful and fast web services</div>
      </div>

      <div className='rounded-2xl mt-10'>
        <img className='rounded-2xl' src="./assets/images/heroImage.jpg" alt="heroImage" />
      </div>

      <div className='md:mx-56 px-6 mt-10 w-96'>
        <div className='md:text-5xl text-2xl leading-relaxed'>Story, emotion and purpose</div>
        <div className='text-[#4F4F4F] md:text-lg text-xs mt-12 font-normal'>We help transform your ideas into real world applications that will outperform your toughest competition and help you achieve your strategic goals in short period of time.</div>
        <div className='mt-10'>
          <div className='text-[#828282] text-sm'>Want us to contact you?</div>
          <div className='flex items-center rounded-xl w-full bg-[#F2F2F2] p-2'>
           <div className='h-full w-full'><input className='w-full outline-none px-2 bg-transparent h-full placeholder:text-[#BDBDBD]' type="text" placeholder='Email' /></div>
           <div className='bg-[#2D9CDB] w-max rounded-xl text-[#F2F2F2] text-lg px-6 py-2 select-none cursor-pointer hover:text-white transition-all'>Join</div>
          </div>
        </div>
      </div>


      <div className='md:mx-28 md:mt-52 mt-20'>
        <div className='text-4xl w-80'>We offer high demand services  </div>

        <div className='grid md:grid-cols-3 grid-cols-1 gap-4 mt-12'>

          <div className='bg-white group px-8 py-12 rounded-3xl hover:shadow-[0px_10px_30px_rgba(51,51,51,0.1)] cursor-pointer transition-all duration-500'>
            <div className='bg-[#2D9CDB] p-5 w-max text-white rounded-xl'><FaPen size={20} /></div>
            <div className='text-2xl mt-8 font-bold'>UI/UX Design</div>
            <div className='text-base font-normal text-[#4F4F4F] mt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.</div>
            <div className='px-4 py-2 text-[#828282] group-hover:bg-[#2D9CDB] bg-[#E0E0E0] group-hover:text-white transition-all rounded-xl w-max mt-6'>Get started</div>
          </div>
          <div className='bg-white group px-8 py-12 rounded-3xl hover:shadow-[0px_10px_30px_rgba(51,51,51,0.1)] cursor-pointer transition-all duration-500'>
            <div className='bg-[#27AE60] p-5 w-max text-white rounded-xl'><FaCode size={20} /></div>
            <div className='text-2xl mt-8 font-bold'>Front End</div>
            <div className='text-base font-normal text-[#4F4F4F] mt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.</div>
            <div className='px-4 py-2 text-[#828282] group-hover:bg-[#27AE60] bg-[#E0E0E0] group-hover:text-white transition-all rounded-xl w-max mt-6'>Get started</div>
          </div>
          <div className='bg-white group px-8 py-12 rounded-3xl hover:shadow-[0px_10px_30px_rgba(51,51,51,0.1)] cursor-pointer transition-all duration-500'>
            <div className='bg-[#EB5757] p-5 w-max text-white rounded-xl'><FaServer size={20} /></div>
            <div className='text-2xl mt-8 font-bold'>Back End</div>
            <div className='text-base font-normal text-[#4F4F4F] mt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.</div>
            <div className='px-4 py-2 text-[#828282] group-hover:bg-[#EB5757] bg-[#E0E0E0] group-hover:text-white transition-all rounded-xl w-max mt-6'>Get started</div>
          </div>

        </div>
      </div>


    <div className='md:mx-28 md:mt-52 mt-20'>
      <div className='text-4xl leading-relaxed w-96'>Good design means good business</div>

      <div className='flex md:flex-row flex-col gap-4'>
        <div className='mt-44'>
        <div className='rounded-xl'><img className='rounded-xl' src="./assets/images/box/smarthome.jpg" alt="" /></div>
        <div className='text-[#828282] text-sm mt-4 font-light'>Full stack application</div>
        <div className='text-2xl mt-2'>Smart home dashboard</div>
        </div>
        <div>
        <div className='rounded-xl'><img className='rounded-xl' src="./assets/images/box/onboard.png" alt="" /></div>
        <div className='text-[#828282] text-sm mt-4 font-light'>UX/UI design</div>
        <div className='text-2xl mt-2'>Onboard application</div>
        </div>
      </div>

      <div className='flex md:flex-row flex-col gap-4'>
        <div className='mt-44'>
        <div className='rounded-xl'><img className='rounded-xl' src="./assets/images/box/booking.png" alt="" /></div>
        <div className='text-[#828282] text-sm mt-4 font-light'>Mobile application</div>
        <div className='text-2xl mt-2'>Booking system</div>
        </div>
        <div>
        <div className='rounded-xl'><img className='rounded-xl' src="./assets/images/box/juice-product.png" alt="" /></div>
        <div className='text-[#828282] text-sm mt-4 font-light'>Front End applicati on</div>
        <div className='text-2xl mt-2'>Juice product homepage</div>
        </div>
      </div>

      <div className='flex group gap-2 text-[#2D9CDB] items-center justify-end cursor-pointer'>
        <div className='text-2xl'>seemore</div>
        <div className='group-hover:translate-x-3 transition-all'><FaLongArrowAltRight size={20} /></div>
      </div>

    </div>

    <div className='flex md:mx-28 justify-between items-center md:mt-52 mt-20'>
      <div className='w-96'>
        <div className='text-[#EB5757] text-lg mt-2'>Meet the team</div>
        <div className='text-4xl pr-24 leading-relaxed mt-2'>We are chilled and a laidback team</div>
        <div className='text-[#4F4F4F] text-base font-normal mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
      </div>
      <div className='flex items-center gap-5'>
        <div className='rounded-3xl'>
          <img className='rounded-3xl' src="./assets/images/person/person3.png" alt="person1" />
          </div>
        <div className='flex flex-col gap-5'>
          <div className='rounded-3xl'><img className='rounded-3xl' src="./assets/images/person/person1.png" alt="person2" /></div>
          <div className='rounded-3xl'><img className='rounded-3xl' src="./assets/images/person/person2.png" alt="person3" /></div>
        </div>
      </div>
    </div>

    <div className='px-28 mt-52'>
      <div className='text-4xl pr-44 leading-relaxed'>“Fast and outstanding resutls. Edie understands their customer’s needs. They have a young and talented team.”    </div>
      <div className='flex gap-6 items-center mt-12'>
        <div className='w-20 rounded-lg'><img className='rounded-lg' src="./assets/images/person/person4.png" alt="" /></div>
        <div>
          <div className='text-2xl'>Carlos Tran</div>
          <div className='text-lg text-[#828282]'>The Decorate Gatsby</div>
        </div>
      </div>
    </div>


    </div>

    <footer className='bg-[#100E1D]'>
      <div className='flex md:flex-row flex-col justify-between py-16 text-white px-44'>
      <div>
        <ul className='flex flex-col gap-4 font-normal text-lg'>
          <li className='cursor-pointer'>Home</li>
          <li className='cursor-pointer'>Services</li>
          <li className='cursor-pointer'>Our Works</li>
          <li className='cursor-pointer'>Clients</li>
          <li className='cursor-pointer'>Contact</li>
        </ul>
      </div>
      <div>
      <div className='font-heebo text-4xl'>Edie</div>
        <div className='flex gap-2 mt-3'>
          <div><img src="./assets/images/social/instagram.svg" alt="instagram" /></div>
          <div><img src="./assets/images/social/linkedin.svg" alt="linkedin" /></div>
          <div><img src="./assets/images/social/twitter.svg" alt="twitter" /></div>
        </div>
      </div>
      <div>
      <div className='text-[#F2F2F2] text-sm'>Want us to contact you?</div>
          <div className='flex items-center rounded-xl w-full bg-[#F2F2F2] p-2 mt-2'>
           <div className='h-full w-full text-[#100E1D]'><input className='w-full outline-none px-2 bg-transparent h-full placeholder:text-[#BDBDBD]' type="text" placeholder='Email' /></div>
           <div className='bg-[#2D9CDB] w-max rounded-xl text-[#F2F2F2] text-lg px-6 py-2 select-none cursor-pointer hover:text-white transition-all'>Join</div>
          </div>
      </div>
      </div>
    </footer>

    </React.Fragment>
  )
}

export default Home