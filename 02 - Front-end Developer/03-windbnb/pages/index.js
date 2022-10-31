import React from 'react'
import {useState, useEffect} from 'react'

import Head from 'next/head'

import classNames from 'classnames'
import {Animated} from "react-animated-css";

import {HiOutlineSearch, HiStar, HiLocationMarker, HiPlusSm, HiMinusSm} from 'react-icons/hi'

import Data from '../public/assets/stays.json';

const Home = () => {

  const [stays,setStays] = useState([
    {
      "id": "1",
      "city": "Helsinki",
      "country": "Finland",
      "superHost": false,
      "title": "Stylist apartment in center of the city",
      "rating": 4.4,
      "maxGuests": 3,
      "type": "Entire apartment",
      "beds": 2,
      "photo": "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80"
    },
    {
      "id": "2",
      "city": "Turku",
      "country": "Finland",
      "superHost": false,
      "title": "Nice apartment in center of Helsinki",
      "rating": 4.2,
      "maxGuests": 5,
      "type": "Entire apartment",
      "beds": 3,
      "photo": "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
    },
    {
      "id": "3",
      "city": "Helsinki",
      "country": "Finland",
      "superHost": true,
      "title": "Arty interior in 1900 wooden house",
      "rating": 4.5,
      "maxGuests": 10,
      "type": "Entire house",
      "beds": 6,
      "photo": "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
    },
    {
      "id": "4",
      "city": "Helsinki",
      "country": "Finland",
      "superHost": false,
      "title": "Apartment next to market spuare",
      "rating": 4.48,
      "maxGuests": 3,
      "type": "Entire apartment",
      "beds": null,
      "photo": "https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
    },
    {
      "id": "5",
      "city": "Turku",
      "country": "Finland",
      "superHost": true,
      "title": "Villa Aurora guest-house",
      "rating": 4.75,
      "maxGuests": 9,
      "type": "Entire house",
      "beds": null,
      "photo": "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2249&q=80"
    },
    {
      "id": "6",
      "city": "Vaasa",
      "country": "Finland",
      "superHost": true,
      "title": "A cosy family house",
      "rating": 4.95,
      "maxGuests": 6,
      "type": "Entire house",
      "beds": null,
      "photo": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
    },
    {
      "id": "7",
      "city": "Vaasa",
      "country": "Finland",
      "superHost": false,
      "title": "Lovely Studio near Railway Station",
      "rating": 4.68,
      "maxGuests": 2,
      "type": "Private room",
      "beds": null,
      "photo": "https://images.unsplash.com/photo-1505693314120-0d443867891c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2591&q=80"
    },
    {
      "id": "8",
      "city": "Oulu",
      "country": "Finland",
      "superHost": false,
      "title": "Peaceful little home in city center",
      "rating": 4.12,
      "maxGuests": 6,
      "type": "Entire house",
      "beds": 3,
      "photo": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
    },
    {
      "id": "9",
      "city": "Oulu",
      "country": "Finland",
      "superHost": false,
      "title": "Beautiful new studio apartment nearby the center",
      "rating": 4.49,
      "maxGuests": 2,
      "type": "Entire apartment",
      "beds": 1,
      "photo": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2255&q=80"
    },
    {
      "id": "10",
      "city": "Oulu",
      "country": "Finland",
      "superHost": true,
      "title": "Cozy woodhouse flat with wooden sauna",
      "rating": 4.38,
      "maxGuests": 4,
      "type": "Entire house",
      "beds": null,
      "photo": "https://images.unsplash.com/photo-1522156373667-4c7234bbd804?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=930&q=80"
    },
    {
      "id": "11",
      "city": "Vaasa",
      "country": "Finland",
      "superHost": false,
      "title": "Brand new studio apartment near the harbour",
      "rating": 4.89,
      "maxGuests": 6,
      "type": "Entire apartment",
      "beds": 3,
      "photo": "https://images.unsplash.com/photo-1494203484021-3c454daf695d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
    },
    {
      "id": "12",
      "city": "Helsinki",
      "country": "Finland",
      "superHost": false,
      "title": "Beautiful and comfortable old wooden house",
      "rating": 4.63,
      "maxGuests": 10,
      "type": "Entire house",
      "beds": null,
      "photo": "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
    },
    {
      "id": "13",
      "city": "Turku",
      "country": "Finland",
      "superHost": false,
      "title": "Turku Nordic Home near city center",
      "rating": 4.24,
      "maxGuests": 5,
      "type": "Entire apartment",
      "beds": 3,
      "photo": "https://images.unsplash.com/photo-1519643381401-22c77e60520e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE3MzYxfQ&auto=format&fit=crop&w=2253&q=80"
    },
    {
      "id": "14",
      "city": "Turku",
      "country": "Finland",
      "superHost": true,
      "title": "Nice 2 room apartment close to everything",
      "rating": 4.34,
      "maxGuests": 6,
      "type": "Entire apartment",
      "beds": 3,
      "photo": "https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1275&q=80"
    }
  ]
  );


  const[showFilter, setShowFilter] = useState(false);

  const [locationShow, setLocationShow] = useState(true);
  const [guestsShow, setGuestsShow] = useState(false);

  const [search, setSearch] = useState(0);

  const searchHandle = () =>{
    setSearch(1);
    setShowFilter(!filter);
  }


  const [filter, setFilter] = useState({
    location : "Helsinki",
    guests : {
      adults: 1,
      children:  0,
    }
  });

  const locationHandle = () => {
    setShowFilter(true);
    setLocationShow(true);
    setGuestsShow(false);
  }
  
  const guestsHandle = () => {
    setShowFilter(true);
    setGuestsShow(true);
    setLocationShow(false);
  }

  useEffect(() => {
    if(search === 1){
      setStays(stays.filter((item) => item.city === filter.location && filter.guests.adults + filter.guests.children <= item.maxGuests));
      setSearch(0);
    }
  }, [search]);

  useEffect(() => {
    setStays(Data);
  }, [filter]);


  return (
    <React.Fragment>
    <Head>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&family=Mulish:wght@400;700;800&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
    </Head>

    <div className='xl:max-w-[78rem] lg:max-w-5xl md:max-w-3xl md:py-8 py-5 md:px-0 px-4 m-auto'>
      <header className='flex md:flex-row flex-col md:items-center md:justify-between'>
        <div className='cursor-pointer' onClick={() => setStays(Data)}><img src="./assets/images/logo.svg" alt="logo" /></div>
        <div className='flex md:mt-0 mt-8 md:mx-0 mx-5 shadow-[0px_1px_6px_rgba(0,0,0,0.1)] rounded-2xl'>
          <div onClick={locationHandle} className='md:py-4 py-5 px-4 w-max font-mulish text-sm cursor-pointer'>{filter.location}, Finland</div>
          <div onClick={guestsHandle} className='md:py-4 py-5 px-4 border-x border-[#F2F2F2] font-mulish text-sm text-[#BDBDBD] cursor-pointer'>{filter.guests.adults != 1 ?`${filter.guests.adults} adut, ${filter.guests.children} children` : `Add guests`}</div>
          <div onClick={() => setShowFilter(true)} className='md:py-4 py-5 px-4 text-[#EB5757] cursor-pointer'><HiOutlineSearch size={20} /></div>
        </div>
        {showFilter && <div onClick={() => setShowFilter(false)} className='fixed top-0 left-0 w-full h-full bg-black/50'></div>}


        {showFilter &&
        <Animated className='z-50 top-0 left-0 w-full fixed' animationIn="fadeInDown" animationOut="fadeOutUp">
            <div className='fixed top-0 left-0 bg-white w-full md:px-24 px-2 md:py-24 py-1'>
              <div className='md:grid md:grid-cols-3 md:mt-0 mt-8 md:mx-0 mx-5 shadow-[0px_1px_6px_rgba(0,0,0,0.1)] rounded-2xl'>
                <div onClick={locationHandle} className={classNames({
                  'cursor-pointer md:py-2 py-3 px-6 w-full rounded-2xl': true,
                  'border border-[#333333]': locationShow
                })}>
                  <div className='font-mulish font-extrabold text-[9px] uppercase mb-1'>Location</div>
                  <div className='font-mulish text-sm'>{filter.location}, Finland</div>
                </div>
                <div onClick={guestsHandle} className={classNames({
                  'cursor-pointer md:py-2 py-3 px-6 border-x border-[#F2F2F2]': true,
                  'border border-[#333333] rounded-2xl': guestsShow
                })}>
                  <div className='font-mulish font-extrabold text-[9px] uppercase mb-1'>Guests</div>
                  <div className='font-mulish text-sm text-[#BDBDBD]'>{filter.guests.adults != 1 ?`${filter.guests.adults} adut, ${filter.guests.children} children` : `Add guests`}</div>
                </div>
                <div onClick={searchHandle} className='md:flex hidden items-center justify-center gap-2 text-base rounded-r-2xl md:py-2 py-5 px-6 bg-[#EB5757] text-white cursor-pointer'>
                  <div><HiOutlineSearch size={20} /></div> 
                  <div>Search</div> 
                </div>
              </div>
              <div className='md:grid md:grid-cols-3 mt-8'>
              {!locationShow &&
              <div></div>
              }
                 {locationShow && 
                 <div className='flex flex-col gap-8 ml-4'>
                   <div className='flex items-center gap-2 text-[#4F4F4F] hover:text-[#EB5757] transition-all cursor-pointer'>
                     <div><HiLocationMarker size={20} /></div>
                     <div onClick={() => setFilter({...filter, location:"Helsinki"})} className='font-mulish text-sm '>Helsinki, Finland</div>
                   </div>
                   <div className='flex items-center gap-2 text-[#4F4F4F] hover:text-[#EB5757] transition-all cursor-pointer'>
                     <div><HiLocationMarker size={20} /></div>
                     <div onClick={() => setFilter({...filter, location:"Turku"})} className='font-mulish text-sm '>Turku, Finland</div>
                   </div>
                   <div className='flex items-center gap-2 text-[#4F4F4F] hover:text-[#EB5757] transition-all cursor-pointer'>
                     <div><HiLocationMarker size={20} /></div>
                     <div  onClick={() => setFilter({...filter, location:"Oulu"})} className='font-mulish text-sm '>Oulu, Finland</div>
                   </div>
                   <div className='flex items-center gap-2 text-[#4F4F4F] hover:text-[#EB5757] transition-all cursor-pointer'>
                     <div><HiLocationMarker size={20} /></div>
                     <div  onClick={() => setFilter({...filter, location:"Vaasa"})} className='font-mulish text-sm '>Vaasa, Finland</div>
                   </div>
                 </div>
                 }
                 {guestsShow && 
                 <div className='ml-6'>
                   <div>
                     <div className='font-mulish text-sm'>
                       <div className='font-bold'>Adults</div>
                       <div className='text-[#BDBDBD]'>Ages 13 or above</div>
                     </div>
                     <div className='flex items-center gap-4 mt-4'>
                       <button onClick={() => setFilter({...filter, guests:{adults: filter.guests.adults <= 0 ? filter.guests.adults : filter.guests.adults-- , ...filter.guests} })} className={classNames({
                         'text-[#828282] border border-[#828282] p-1 rounded': true,
                         'cursor-no-drop opacity-50 select-none touch-none': filter.guests.adults === 0
                       })}><HiMinusSm /></button>
                       <div className='font-mulish font-bold text-sm'>{filter.guests.adults}</div>
                       <button onClick={() => setFilter({...filter, guests:{adults: filter.guests.adults++, ...filter.guests} })} className='text-[#828282] border border-[#828282] p-1 rounded'><HiPlusSm /></button>
                     </div>
                   </div>
                   <div className='mt-12'>
                     <div className='font-mulish text-sm'>
                       <div className='font-bold'>Children</div>
                       <div className='text-[#BDBDBD]'>Ages 2-12</div>
                     </div>
                     <div className='flex items-center gap-4 mt-4'>
                     <button onClick={() => setFilter({...filter, guests:{children: filter.guests.children <= 0 ? filter.guests.children : filter.guests.children-- , ...filter.guests} })} className={classNames({
                         'text-[#828282] border border-[#828282] p-1 rounded': true,
                         'cursor-no-drop opacity-50 select-none touch-none': filter.guests.children === 0
                       })}><HiMinusSm /></button>
                       <div className='font-mulish font-bold text-sm'>{filter.guests.children}</div>
                       <button onClick={() => setFilter({...filter, guests:{children: filter.guests.children++, ...filter.guests} })} className='text-[#828282] border border-[#828282] p-1 rounded'><HiPlusSm /></button>
                     </div>
                   </div>
                 </div>
                 }
                  <div onClick={searchHandle} className='my-6 md:hidden flex items-center justify-center gap-2 text-base rounded-2xl md:py-2 py-5 px-6 bg-[#EB5757] text-white cursor-pointer'>
                  <div><HiOutlineSearch size={20} /></div> 
                  <div>Search</div> 
                </div>
                 <div></div>
               </div>
               </div>
       </Animated>
        }

      </header>

      <section className='md:mt-16 mt-8'>
        <div className='flex justify-between items-center'>
          <div className='font-bold md:text-2xl text-lg'>Stays in Finland</div>
          <div className='text-[#4F4F4F] text-sm'>{stays.length}+ stays</div>
        </div>
        
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 md:mt-7 mt-5'>
          {stays.map((stay) => (
            <section key={stay.id}>
            <div className='rounded-3xl max-h-[269px]'><img className='rounded-3xl h-auto w-full object-cover max-h-[269px] max-w-full' src={stay.photo} alt={`${stay.title} ${stay.type}`} /></div>
            <div className='md:mt-4 mt-2'>
              <div className='flex items-center justify-between '>
                <div className='flex items-center gap-2'>
                  {
                  stay.superHost && 
                  <div className='flex items-center justify-center text-center leading-none font-bold md:text-xs text-[10px] text-[#4F4F4F] border border-[#4F4F4F] px-2 py-2 rounded-xl uppercase'>Super host</div>
                  }
                  <div className='text-[#828282] md:text-sm text-xs py-2'>{stay.type} {stay.beds != null && `. ${stay.beds} beds`}</div>
                </div>
                <div className='flex items-center gap-1'>
                  <div className='text-[#EB5757] md:opacity-100 opacity-75'><HiStar size={24} /></div>
                  <div className='text-[#4F4F4F] md:text-sm text-xs'>{stay.rating}</div>
                </div>
              </div>
              <div className='font-semibold md:text-base text-sm md:mt-2 mt-1'>{stay.title}</div>
            </div>
          </section>
          ))}
          
        </div>

      </section>


    </div>
    </React.Fragment>
  )
}

export default Home