import React from 'react'

import Head from 'next/head'

const Home = () => {
  return (
    <React.Fragment>
      <Head>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap" rel="stylesheet" />
      </Head>


      <div className='flex items-center justify-center max-w-[60rem] md:py-14 py-6 mx-auto'>
        <div>
          <div className='flex flex-col items-center'>
            <div className='md:w-40 w-28 rounded-2xl'>
              <img className='rounded-2xl' src="./assets/profilePhoto.png" alt="profilePhoto" />
            </div>
            <div className='md:text-2xl text-xl mt-5'>Rodney Cotton</div>
            <div className='text-[#A9A9A9] md:text-sm text-xs'>Helsinki, Finland</div>
            <div className='flex gap-5 mt-6'>
              <div className='bg-[#E5E5E5] rounded-xl md:px-8 px-6 md:py-3 py-2 text-center '>
                <div className='font-semibold md:text-lg text-sm '>100</div>
                <div className='font-semibold md:text-sm text-xs text-[#BDBDBD]'>Posts</div>
              </div>
              <div className='bg-[#E5E5E5] rounded-xl md:px-6 px-4 md:py-3 py-2 text-center '>
                <div className='font-semibold md:text-lg text-sm '>2,242</div>
                <div className='font-semibold md:text-sm text-xs text-[#BDBDBD]'>Follower</div>
              </div>
              <div className='bg-[#E5E5E5] rounded-xl md:px-2 px-6 md:py-3 py-2 text-center '>
                <div className='font-semibold md:text-lg text-sm '>1,432</div>
                <div className='font-semibold md:text-sm text-xs text-[#BDBDBD]'>Following</div>
              </div>
            </div>

            <div className='grid md:gap-8 gap-3 grid-cols-3 md:mt-16 mt-6 md:p-0 p-5'>

              <div className='flex w-full h-full col-span-1 rounded-xl shadow-xl'><img className='rounded-xl' src="./assets/photo1.png" alt="" /></div>
              <div className='flex w-full h-full col-span-2 rounded-xl shadow-xl'><img className='rounded-xl' src="./assets/photo2.png" alt="" /></div>
              <div className='flex w-full h-full col-span-2 rounded-xl shadow-xl'><img className='rounded-xl' src="./assets/photo3.png" alt="" /></div>
              <div className='flex w-full h-full row-span-2 rounded-xl shadow-xl'><img className='rounded-xl' src="./assets/photo4.png" alt="" /></div>
              <div className='flex w-full h-full col-span-1 rounded-xl shadow-xl'><img className='rounded-xl' src="./assets/photo5.png" alt="" /></div>
              <div className='flex w-full h-full col-span-1 rounded-xl shadow-xl'><img className='rounded-xl' src="./assets/photo6.png" alt="" /></div>
              
            </div>
          </div>
          <div></div>
        </div>
      </div>


    </React.Fragment>
  )
}

export default Home