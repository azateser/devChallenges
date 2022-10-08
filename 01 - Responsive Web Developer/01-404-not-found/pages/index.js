import React from 'react'

import Head from 'next/head'

const Home = () => {
  return (
    <React.Fragment>
      <Head>
      <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
      </Head>

      <div>
        <div className='font-inconsolata tracking-tighter lg:px-20 px-7 lg:py-9 py-5 text-2xl'>4041 NOT FOUND</div>

        <div className='flex lg:flex-row flex-col items-start justify-center lg:px-20 px-8 lg:my-40 my-10'>
          <div className='lg:w-2/3  w-full lg:pr-28'><img src="./Scarecrow.png" alt="Scarecrow" /></div>
          <div className='flex flex-col md:mt-3 mt-16'>
            <div className='font-bold lg:text-6xl text-5xl leading-normal'>I have bad news for you</div>
            <div className='w-96 lg:text-2xl text-xl text-[#4F4F4F] mt-8'>The page you are looking for might be removed or is temporarily unavailable</div>
            <div className='lg:mt-20 my-12'><button className='bg-[#333333] text-white uppercase px-10 py-6 text-sm' type="button">Back to homepage</button></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Home