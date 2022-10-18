import React from 'react'

import Head from 'next/head'

import {HiMail, HiPhone, HiUserCircle, HiHome, HiOfficeBuilding, HiGlobe, HiInboxIn } from 'react-icons/hi'


const Home = () => {
  return (
    <React.Fragment>
    <Head>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap" rel="stylesheet" />
    </Head>

    <div className='py-16 max-w-[60rem] lg:px-0 px-8 m-auto'>
      <div className='text-4xl'>Checkout</div>
      <div className='py-14'>
       
        <div className='flex lg:flex-row flex-col-reverse gap-20'>
        <div className='lg:w-2/3 mt-6'>

        <div>
          <div className='text-lg'>Contact infomation</div>
          <div className='my-2'>
            <div className='text-xs mb-2'>E-mail</div>
            <div className='flex items-center gap-2 px-3 py-3 border border-[#828282] w-full rounded-xl'>
              <div className='text-[#828282]'><HiMail size={24} /></div>
              <div className='w-full'><input className='outline-none w-full text-base placeholder:text-[#828282]' placeholder='Enter your email...' type="text" /></div>
              </div>
          </div>
          <div className='my-4'>
            <div className='text-xs mb-2'>Phone</div>
            <div className='flex items-center gap-2 px-3 py-3 border border-[#828282] w-full rounded-xl'>
              <div className='text-[#828282]'><HiPhone size={24} /></div>
              <div className='w-full'><input className='outline-none w-full text-base placeholder:text-[#828282]' placeholder='Enter your phone...' type="text" /></div>
              </div>
          </div>
        </div>

          <div className='text-lg'>Shipping address</div>
          <div className='my-2'>
            <div className='text-xs mb-2'>Full name</div>
            <div className='flex items-center gap-2 px-3 py-3 border border-[#828282] w-full rounded-xl'>
              <div className='text-[#828282]'><HiUserCircle size={24} /></div>
              <div className='w-full'><input className='outline-none w-full text-base placeholder:text-[#828282]' placeholder='Rodney Cotton' type="text" /></div>
              </div>
          </div>
          <div className='my-2'>
            <div className='text-xs mb-2'>Adress</div>
            <div className='flex items-center gap-2 px-3 py-3 border border-[#828282] w-full rounded-xl'>
              <div className='text-[#828282]'><HiHome size={24} /></div>
              <div className='w-full'><input className='outline-none w-full text-base placeholder:text-[#828282]' placeholder='Your address...' type="text" /></div>
              </div>
          </div>
          <div className='my-2'>
            <div className='text-xs mb-2'>City</div>
            <div className='flex items-center gap-2 px-3 py-3 border border-[#828282] w-full rounded-xl'>
              <div className='text-[#828282]'><HiOfficeBuilding size={24} /></div>
              <div className='w-full'><input className='outline-none w-full text-base placeholder:text-[#828282]' placeholder='Your city..' type="text" /></div>
              </div>
          </div>
          <div className='my-4 flex gap-5 justify-between'>
            <div>
            <div className='text-xs mb-2'>Country</div>
            <div className='flex items-center gap-2 px-3 py-3 border border-[#828282] w-full rounded-xl'>
              <div className='text-[#828282]'><HiGlobe size={24} /></div>
              <div> 
                <select className='outline-none w-full text-base text-[#828282]' id="cars" name="carlist" form="carform">
                  <option value="volvo">Your country...</option>
                  <option value="canada">Canada</option>
                  <option value="turkey">Turkey</option>
                  <option value="abd">ABD</option>
                </select>
                </div>
              </div>
            </div>
            <div>
            <div className='text-xs mb-2'>Postal code</div>
            <div className='flex items-center gap-2 px-3 py-3 border border-[#828282] w-full rounded-xl'>
              <div className='text-[#828282]'><HiInboxIn size={24} /></div>
              <div className='w-full'><input className='outline-none w-full text-base placeholder:text-[#828282]' placeholder='Your postal code..' type="text" /></div>
              </div>
            </div>
          </div>
            <div className='flex items-center gap-2'>
              <div><input className='cursor-pointer border-[#828282] text-[#4F4F4F] w-4 h-4' type="checkbox" id="approve" name="approve" value="Save this information for next time" /></div>
              <div><label className='cursor-pointer select-none text-xs' for="approve"> Save this information for next time</label></div>
          </div>
          <div className='flex justify-end'>
          <div className='bg-[#F2994A] hover:bg-[#d6863f] transition-all text-white text-base px-6 py-3 rounded-xl w-max cursor-pointer'>Continue</div>

          </div>
        </div>
           
        <div className='flex flex-col p-6 bg-[#F2F2F2] rounded-xl justify-between h-max lg:w-1/2'>
        <div className='flex flex-col gap-6'>
        <div className='flex gap-5  w-full'>
            <div className='rounded-xl w-32'><img className='rounded-xl' src="./assets/photo1.png" alt="" /></div>
            <div className='flex flex-col justify-between'>
              <div>
                <div className='text-base'>Vintage Backbag</div>
                <div className='flex items-center gap-2'>
                  <div className='text-[#F2994A]'>$54.99</div>
                  <div className='text-xs line-through'>$94.99</div>
                </div>
              </div>
              <div className='flex w-36  gap-3 items-center justify-between border border-[#828282] rounded-xl py-4 px-5'>
                <button className='bg-[#E0E0E0] py-1 px-2 text-center rounded leading-none cursor-pointer'>-</button>
                <div>1</div>
                <button className='bg-[#E0E0E0] py-1 px-2 text-center rounded leading-none cursor-pointer'>+</button>
              </div>
            </div>
          </div>
          <div className='flex gap-5 w-full'>
            <div className='rounded-xl w-32'><img className='rounded-xl' src="./assets/photo2.png" alt="" /></div>
            <div className='flex flex-col justify-between'>
              <div>
                <div className='text-base'>Levi Shoes</div>
                <div className='flex items-center gap-2'>
                  <div className='text-[#F2994A]'>$74.99</div>
                  <div className='text-xs line-through'>$124.99</div>
                </div>
              </div>
              <div className='flex w-36 gap-3 items-center justify-between border border-[#828282] rounded-xl py-4 px-5'>
                <button className='bg-[#E0E0E0] py-1 px-2 text-center rounded leading-none cursor-pointer'>-</button>
                <div>1</div>
                <button className='bg-[#E0E0E0] py-1 px-2 text-center rounded leading-none cursor-pointer'>+</button>
              </div>
            </div>
          </div>
        </div>
          <div className='mt-12'>
            <hr className='border-[#BDBDBD] m-0 my-3' />
            <div className='flex items-center justify-between'>
              <div className='text-lg'>Shipping</div>
              <div className='text-sm'>$19</div>
            </div>
            <hr className='border-[#BDBDBD] m-0 my-3' />
            <div className='flex items-center justify-between'>
              <div className='text-lg'>Total</div>
              <div className='text-sm'>$148.98</div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    </React.Fragment>
  )
}

export default Home