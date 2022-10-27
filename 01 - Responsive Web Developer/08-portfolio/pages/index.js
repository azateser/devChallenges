import React from 'react'

import Head from 'next/head'

import {HiMail,HiPhone,HiChevronLeft,HiDotsHorizontal,HiChevronRight} from 'react-icons/hi'

const Home = () => {
  return (
    <React.Fragment>
    <Head>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600&display=swap" rel="stylesheet" />
    </Head>
    
    <div className='grid grid-cols-5 lg:max-w-[66rem] max-w-full m-auto lg:px-0 px-6 lg:py-16 py-8 lg:gap-20 gap-10'>
      
      {/* Personal Card Horizontal */}
      <div className='lg:flex hidden col-span-5 bg-white rounded-xl px-8 py-6'>
        <div className='rounded-xl'><img className='rounded-xl' src="./assets/images/profile.jpeg" alt="" /></div>
        <div className='ml-10'>
          <div className='flex justify-between items-center mb-8'>
            <div>
              <div className='text-[#4F4F4F] font-semibold text-2xl'>Azat ESER</div>
              <div className='text-[#828282]'>Front-end developer</div>
            </div>
            <div className='flex gap-2 flex-col justify-between'>
              <div className='flex items-center gap-2 text-[#4F4F4F]'>
                <div><HiMail size={24} /></div>
                <div>billy@example.com</div>
              </div>
              <div className='flex items-center gap-2 text-[#4F4F4F]'>
                <div><HiPhone size={24} /></div>
                <div>(+603) 546 624 342</div>
              </div>
            </div>
          </div>
          <div>Self-motivated developer, who is willing to learn and create outstanding UI applications. 

Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. 
          </div>
</div>
      </div>

      {/* Personal Card Vertical */}
      <div className='grid lg:col-span-2 col-span-5 bg-white rounded-xl px-5 py-6'>
      <div className='rounded-xl'><img className='rounded-xl' src="./assets/images/profile.jpeg" alt="" /></div>
      <div className='mt-4'>
          <div className='text-[#4F4F4F] font-semibold text-2xl'>Azat ESER</div>
          <div className='text-[#828282]'>Front-end developer</div>
      </div>
      <div className='flex gap-2 mt-4 flex-col justify-between'>
              <div className='flex items-center gap-2 text-[#4F4F4F]'>
                <div><HiMail size={24} /></div>
                <div>billy@example.com</div>
              </div>
              <div className='flex items-center gap-2 text-[#4F4F4F]'>
                <div><HiPhone size={24} /></div>
                <div>(+603) 546 624 342</div>
              </div>
      </div>
      <div className='mt-4 text-base'>Self-motivated developer, who is willing to learn and create outstanding UI applications.</div>
      </div>

      {/* Blog Card Horizontal */}
      <div className='lg:grid hidden col-span-5 bg-white rounded-xl px-5 py-6'>
      <div className='flex'>
        <div className='rounded-xl'><img className='rounded-xl' src="./assets/images/recipe.png" alt="" /></div>
        <div className='flex flex-col justify-between ml-12'>
         <div>
         <div className='flex gap-2 text-[#4F4F4F] text-base'>
            <div>#HTML</div>
            <div>#CSS</div>
            <div>#responsive</div>
          </div>
          <div className='text-[#333333] text-2xl mt-6'>Recipe Blog</div>
          <div className='mt-4'>In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. </div>
          
         </div>
         <div className='flex gap-3'>
            <div className='bg-[#2F80ED] border border-[#2F80ED] px-8 py-2 rounded-xl text-white w-max cursor-pointer'>Demo</div>
            <div className='bg-white border border-[#2F80ED] px-8 py-2 rounded-xl text-[#2F80ED] w-max cursor-pointer'>Code</div>
          </div>
        </div>
      </div>
      </div>

      {/* Blog Card Vertical */}
      <div className='grid lg:col-span-2 col-span-5 bg-white rounded-xl px-5 py-6'>
      <div className='flex flex-col'>
        <div className='rounded-xl'><img className='rounded-xl' src="./assets/images/recipe.png" alt="" /></div>
        <div className='flex flex-col justify-between'>
         <div>
         <div className='flex gap-2 mt-4 text-[#4F4F4F] text-base'>
            <div>#HTML</div>
            <div>#CSS</div>
            <div>#responsive</div>
          </div>
          <div className='text-[#333333] text-2xl mt-6'>Recipe Blog</div>
          <div className='my-4 text-base'>In this project, I work with HTML and CSS to create a responsive page. This page is similiar with instagram profile page. The design is from devchallenge.io</div>
          
         </div>
         <div className='flex gap-3'>
            <div className='bg-[#2F80ED] border border-[#2F80ED] px-8 py-2 rounded-xl text-white w-max cursor-pointer'>Demo</div>
            <div className='bg-white border border-[#2F80ED] px-8 py-2 rounded-xl text-[#2F80ED] w-max cursor-pointer'>Code</div>
          </div>
        </div>
      </div>
      </div>

      {/* Progess Bar Horizontal */}
      <div className='lg:grid hidden col-span-5 bg-white rounded-xl px-5 py-6'>
        <div className='text-lg text-[#4F4F4F] mb-10'>Front end</div>
        <div className='flex gap-4'>
          <div className='flex flex-col gap-4 w-full'>
          <div className='flex items-center gap-2'>
          <div className='w-36 text-base text-[#4F4F4F]'>React</div>
          <div class="w-full bg-[#C4C4C4] rounded-full h-2.5">
            <div class="bg-[#2F80ED] w-[75%] h-2.5 rounded-full"></div>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <div className='w-36 text-base text-[#4F4F4F]'>Javascript</div>
          <div class="w-full bg-[#C4C4C4] rounded-full h-2.5">
            <div class="bg-[#2F80ED] w-[80%] h-2.5 rounded-full"></div>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <div className='w-36 text-base text-[#4F4F4F]'>Css</div>
          <div class="w-full bg-[#C4C4C4] rounded-full h-2.5">
            <div class="bg-[#2F80ED] w-[90%] h-2.5 rounded-full"></div>
          </div>
        </div>
          </div>
          <div className='flex flex-col gap-4 w-full'>
          <div className='flex items-center gap-2'>
          <div className='w-36 text-base text-[#4F4F4F]'>Vue</div>
          <div class="w-full bg-[#C4C4C4] rounded-full h-2.5">
            <div class="bg-[#2F80ED] w-[75%] h-2.5 rounded-full"></div>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <div className='w-36 text-base text-[#4F4F4F]'>Redux</div>
          <div class="w-full bg-[#C4C4C4] rounded-full h-2.5">
            <div class="bg-[#2F80ED] w-[80%] h-2.5 rounded-full"></div>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <div className='w-36 text-base text-[#4F4F4F]'>React Native</div>
          <div class="w-full bg-[#C4C4C4] rounded-full h-2.5">
            <div class="bg-[#2F80ED] w-[90%] h-2.5 rounded-full"></div>
          </div>
        </div>
          </div>
        </div>
      </div>

      {/* Progess Bar Vertical */}
      <div className='grid lg:col-span-2 col-span-5 bg-white rounded-xl px-5 py-6'>
        <div className='text-lg text-[#4F4F4F] mb-10'>Front end</div>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-4 w-full'>
          <div className='flex items-center gap-2'>
          <div className='w-36 text-base text-[#4F4F4F]'>React</div>
          <div class="w-full bg-[#C4C4C4] rounded-full h-2.5">
            <div class="bg-[#2F80ED] w-[75%] h-2.5 rounded-full"></div>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <div className='w-36 text-base text-[#4F4F4F]'>Javascript</div>
          <div class="w-full bg-[#C4C4C4] rounded-full h-2.5">
            <div class="bg-[#2F80ED] w-[80%] h-2.5 rounded-full"></div>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <div className='w-36 text-base text-[#4F4F4F]'>Css</div>
          <div class="w-full bg-[#C4C4C4] rounded-full h-2.5">
            <div class="bg-[#2F80ED] w-[90%] h-2.5 rounded-full"></div>
          </div>
        </div>
          </div>
          <div className='flex flex-col gap-4 w-full'>
          <div className='flex items-center gap-2'>
          <div className='w-36 text-base text-[#4F4F4F]'>Vue</div>
          <div class="w-full bg-[#C4C4C4] rounded-full h-2.5">
            <div class="bg-[#2F80ED] w-[75%] h-2.5 rounded-full"></div>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <div className='w-36 text-base text-[#4F4F4F]'>Redux</div>
          <div class="w-full bg-[#C4C4C4] rounded-full h-2.5">
            <div class="bg-[#2F80ED] w-[80%] h-2.5 rounded-full"></div>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <div className='w-36 text-base text-[#4F4F4F]'>React Native</div>
          <div class="w-full bg-[#C4C4C4] rounded-full h-2.5">
            <div class="bg-[#2F80ED] w-[90%] h-2.5 rounded-full"></div>
          </div>
        </div>
          </div>
        </div>
      </div>


      {/* Blog Post Horizontal */}
      <div className='lg:grid hidden col-span-5 bg-white rounded-xl pl-5 py-6'>
        <div className='flex gap-8'>
          <div className='flex flex-col justify-between w-1/2'>
            <div className='text-[#E0E0E0] text-base'>Blog</div>
            <div>
              <div className='text-[#333333] text-2xl mb-6 w-44'>How to organize your CSS</div>
              <div className='text-base'>In this article I tell the story about Proin eu justo sit amet lacus bibendum tincidunt. Vivamus non volutpat nisl, a luctus mi.  
                <br />
                <br />
                Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.</div>
            </div>
            <div className='text-base text-[#2F80ED] cursor-pointer'>dev.to</div>
          </div>
          <div className='w-1/2 rounded-l-xl h-96'><img className='h-auto w-full object-cover max-h-full max-w-full rounded-l-xl' src="./assets/images/blog.png" alt="blog" /></div>
        </div>
      </div>

      {/* Blog Post Vertical */}
      <div className='grid lg:col-span-3 col-span-5 bg-white rounded-xl pl-5 py-6'>
        <div className='flex justify-between gap-8'>
          <div>
            <div className='text-[#E0E0E0] text-base mb-6'>Blog</div>
            <div className='text-[#333333] text-2xl mb-6 w-44'>How to organize your CSS</div>
          </div>
          <div className='w-1/2 rounded-l-xl h-72'><img className='h-auto w-full object-cover max-h-full max-w-full rounded-l-xl' src="./assets/images/blog.png" alt="blog" /></div>
        </div>
        <div className='mt-10'>
        <div className='text-base'>In this article I tell the story about Proin eu justo sit amet lacus bibendum tincidunt. Vivamus non volutpat nisl, a luctus mi.  
                <br />
                <br />
                Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.
        </div>
        <div className='text-base text-[#2F80ED] cursor-pointer mt-16'>dev.to</div>
        </div>
      </div>

      {/* Experiences Horizontal */}
      <div className='lg:grid hidden col-span-5 bg-white rounded-xl px-5 py-6'>
        <div className='text-2xl text-[#4F4F4F] mb-10'>Experiences</div>
        <div className='grid grid-cols-3 justify-between gap-12'>
          <div className='flex'>
            <div className='w-1/3'><img className='w-1/2' src="./assets/images/adidas.svg" alt="adidas logo" /></div>
            <div className='w-2/3'>
              <div>
                <div className='text-xs mb-2'>Feb 2017 - Current</div>
                <div className='text-base font-semibold text-[#333333]'>Front-end developer</div>
              </div>
              <div className='text-base mt-5'>Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.</div>
            </div>
          </div>
          <div className='flex'>
            <div className='w-1/3'><img className='w-1/2' src="./assets/images/hm.svg" alt="h&m logo" /></div>
            <div className='w-2/3'>
              <div>
                <div className='text-xs mb-2'>Aug 2016 - Feb 2018</div>
                <div className='text-base font-semibold text-[#333333]'>Full-stack developer</div>
              </div>
              <div className='text-base mt-5'>Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.</div>
            </div>
          </div>
          <div className='flex'>
            <div className='w-1/3'><img className='w-1/2' src="./assets/images/nivea.svg" alt="nivea logo" /></div>
            <div className='w-2/3'>
              <div>
                <div className='text-xs mb-2'>Jun 2015 - Aug 2016</div>
                <div className='text-base font-semibold text-[#333333]'>Junior front-end developer</div>
              </div>
              <div className='text-base mt-5'>Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Experiences Vertical */}
      <div className='grid lg:col-span-2 col-span-5 bg-white rounded-xl px-5 py-6'>
        <div className='text-2xl text-[#4F4F4F] mb-10'>Experiences</div>
        <div className='flex flex-col gap-12'>
          <div className='flex'>
            <div className='flex items-start w-1/3 mt-6'><img className='w-2/3' src="./assets/images/adidas.svg" alt="adidas logo" /></div>
            <div className='w-2/3'>
              <div>
                <div className='text-xs mb-2'>Feb 2017 - Current</div>
                <div className='text-base font-semibold text-[#333333]'>Front-end developer</div>
              </div>
              <div className='text-base mt-5'>Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.</div>
            </div>
          </div>
          <div className='flex'>
            <div className='flex items-start w-1/3 mt-6'><img className='w-2/3' src="./assets/images/hm.svg" alt="h&m logo" /></div>
            <div className='w-2/3'>
              <div>
                <div className='text-xs mb-2'>Aug 2016 - Feb 2018</div>
                <div className='text-base font-semibold text-[#333333]'>Full-stack developer</div>
              </div>
              <div className='text-base mt-5'>Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.</div>
            </div>
          </div>
          <div className='flex'>
            <div className='flex items-start w-1/3 mt-6'><img className='w-2/3' src="./assets/images/nivea.svg" alt="nivea logo" /></div>
            <div className='w-2/3'>
              <div>
                <div className='text-xs mb-2'>Jun 2015 - Aug 2016</div>
                <div className='text-base font-semibold text-[#333333]'>Junior front-end developer</div>
              </div>
              <div className='text-base mt-5'>Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Hobbies Horizontal */}
      <div className='lg:grid hidden col-span-5 bg-white rounded-xl px-5 py-6'>
      <div className='text-2xl text-[#4F4F4F] mb-10'>Hobbies</div>
      <div className='grid grid-cols-3 justify-between gap-12'>
        <div>
          <div className='rounded-xl h-36'><img className='rounded-xl h-auto w-full object-cover max-h-full max-w-full' src="./assets/images/gaming.png" alt="" /></div>
          <div className='mt-3'>
            <div className='text-[#333333] font-semibold'>Gaming</div>
            <div className='text-base text-[#828282]'>Quisque feugiat malesuada molestie.</div>
          </div>
        </div>
        <div>
          <div className='rounded-xl h-36'><img className='rounded-xl h-auto w-full object-cover max-h-full max-w-full' src="./assets/images/cooking.png" alt="" /></div>
          <div className='mt-3'>
            <div className='text-[#333333] font-semibold'>Cooking</div>
            <div className='text-base text-[#828282]'>Quisque feugiat malesuada molestie.</div>
          </div>
        </div><div>
          <div className='rounded-xl h-36'><img className='rounded-xl h-auto w-full object-cover max-h-full max-w-full' src="./assets/images/biking.png" alt="" /></div>
          <div className='mt-3'>
            <div className='text-[#333333] font-semibold'>Biking</div>
            <div className='text-base text-[#828282]'>Quisque feugiat malesuada molestie.</div>
          </div>
        </div>
      </div>
      </div>

      {/* Hobbies Vertical */}
      <div className='grid lg:col-span-2 col-span-5 bg-white rounded-xl px-5 py-6'>
      <div className='text-2xl text-[#4F4F4F] mb-10'>Hobbies/Certifcates</div>
      <div className='flex flex-col gap-6'>
        <div>
          <div className='rounded-xl h-36'><img className='rounded-xl h-auto w-full object-cover max-h-full max-w-full' src="./assets/images/gaming.png" alt="" /></div>
          <div className='mt-3'>
            <div className='text-[#333333] font-semibold'>Gaming</div>
            <div className='text-base text-[#828282]'>Quisque feugiat malesuada molestie.</div>
          </div>
        </div>
        <div>
          <div className='rounded-xl h-36'><img className='rounded-xl h-auto w-full object-cover max-h-full max-w-full' src="./assets/images/cooking.png" alt="" /></div>
          <div className='mt-3'>
            <div className='text-[#333333] font-semibold'>Cooking</div>
            <div className='text-base text-[#828282]'>Quisque feugiat malesuada molestie.</div>
          </div>
        </div><div>
          <div className='rounded-xl h-36'><img className='rounded-xl h-auto w-full object-cover max-h-full max-w-full' src="./assets/images/biking.png" alt="" /></div>
          <div className='mt-3'>
            <div className='text-[#333333] font-semibold'>Biking</div>
            <div className='text-base text-[#828282]'>Quisque feugiat malesuada molestie.</div>
          </div>
        </div>
      </div>
      </div>


      {/* Header */}
      <div className='grid col-span-5 bg-white rounded-xl px-5 py-6'>
        <div className='text-2xl text-[#4F4F4F]'>Projects (3)</div>
      </div>

      {/* Filter */}
      <div className='grid col-span-5 bg-white rounded-xl px-5 py-6'>
        <div className='text-2xl text-[#4F4F4F]'>Projects (3)</div>
        <div className='flex lg:flex-row flex-col gap-4 mt-4'>
          <div className='w-max rounded-xl cursor-pointer bg-white border border-[#4F4F4F] hover:border-[#2F80ED] hover:text-[#2F80ED] transition-all px-8 py-1 text-[#4F4F4F]'>React</div>
          <div className='w-max rounded-xl cursor-pointer bg-white border border-[#4F4F4F] hover:border-[#2F80ED] hover:text-[#2F80ED] transition-all px-8 py-1 text-[#4F4F4F]'>Vue</div>
          <div className='w-max rounded-xl cursor-pointer bg-[#2F80ED] hover:bg-[#256fd0] transition-all px-8 py-1 text-white'>Responsive</div>
        </div>
      </div>
      
      {/* Pagination */}
      <div className='grid col-span-5'>
        <div className='flex gap-3'>
          <div className='flex items-center justify-center rounded-[4px] border text-xs text-[#4F4F4F] hover:text-[#2F80ED] border-[#4F4F4F] hover:border-[#2F80ED] transition-all w-9 h-9 text-center cursor-pointer'><HiChevronLeft size={18} /></div>
          <div className='bg-[#2F80ED] flex items-center justify-center rounded-[4px] border text-xs text-white border-[#2F80ED] transition-all w-9 h-9 text-center cursor-pointer'>1</div>
          <div className='flex items-center justify-center rounded-[4px] border text-xs text-[#4F4F4F] hover:text-[#2F80ED] border-[#4F4F4F] hover:border-[#2F80ED] transition-all w-9 h-9 text-center cursor-pointer'>2</div>
          <div className='flex items-center justify-center rounded-[4px] border text-xs text-[#4F4F4F] hover:text-[#2F80ED] border-[#4F4F4F] hover:border-[#2F80ED] transition-all w-9 h-9 text-center cursor-pointer'>3</div>
          <div className='flex items-center justify-center  text-center cursor-pointer'><HiDotsHorizontal size={18} /></div>
          <div className='flex items-center justify-center rounded-[4px] border text-xs text-[#4F4F4F] hover:text-[#2F80ED] border-[#4F4F4F] hover:border-[#2F80ED] transition-all w-9 h-9 text-center cursor-pointer'>10</div>
          <div className='flex items-center justify-center rounded-[4px] border text-xs text-[#4F4F4F] hover:text-[#2F80ED] border-[#4F4F4F] hover:border-[#2F80ED] transition-all w-9 h-9 text-center cursor-pointer'><HiChevronRight size={18} /></div>
        </div>
      </div>

    </div>
    </React.Fragment>
  )
}

export default Home