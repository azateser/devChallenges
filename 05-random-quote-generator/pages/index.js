import Link from 'next/link'
import Head from 'next/head'


import { useState, useEffect, useCallback } from 'react';

import axios from "axios";

import AutorenewIcon from '@mui/icons-material/Autorenew';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


import classNames from 'classnames';

const Home = () => {

  const baseURL = "https://quote-garden.herokuapp.com/api/v3/quotes";

  const [show, setShow] = useState(false);

  const [effect, setEffect] = useState(false);

  const [quote, setQuote] = useState("");

  const getRandomQuote = () => {
    axios.get(`${baseURL}/random`).then((response) => {
      setQuote(response.data.data[0]);
      setShow(true)
    });
  }

useEffect(() => {
  getRandomQuote();
  }, []);

  const handleClick = useCallback(() => {
    setShow(false)
    getRandomQuote();
    setEffect(true);
        setInterval(function() {setEffect(false);}, 1000);
  }, []);

  return (
    <div>
       <Head> 
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@500;700&display=swap" rel="stylesheet"></link>
    </Head>
    <div onClick={handleClick} className='flex items-center gap-2 justify-end lg:px-24 px-4 py-8 text-[#4F4F4F] cursor-pointer group'>
        <div>Random</div>
        <div className={classNames({
            "duration-700 transition-all": true,
            "rotate-180 group": effect,
        })}><AutorenewIcon /></div>
    </div>
    
    {!show && <div className='flex justify-center items-center'>
      <img src="loader.gif" alt="" />
    </div>}
  {show && <div className='flex flex-col lg:px-80 px-4 items-center justify-center'>
   <div className='flex w-full justify-center items-center py-20'>
    <div className='lg:text-4xl text-xl border-l-[8px] border-[#F7DF94] px-12'>&quot;{quote.quoteText}&ldquo;</div>
    </div>
    <Link href={`/${quote.quoteAuthor}`} query={quote.quoteAuthor}>
   <div className='flex lg:px-24 w-full group cursor-pointer transition-all duration-200'>
   <div className='flex justify-between items-center w-full py-10 px-6 text-[#4F4F4F;] group-hover:text-[#F2F2F2] group-hover:bg-[#333333]'>
        <div className='flex flex-col'>
        <div className='font-bold lg:text-2xl text-lg'>{quote.quoteAuthor}</div>
                <div className='text-[#828282] text-sm'>{quote.quoteGenre}</div>
        </div>
        <div className='group-hover:translate-x-2 transition-all duration-500'> <ArrowRightAltIcon /> </div>
    </div>
   </div>
   </Link>
   </div>}

</div>
  )
}

export default Home