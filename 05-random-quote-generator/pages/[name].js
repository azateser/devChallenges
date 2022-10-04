import Link from 'next/link'
import Head from 'next/head'
import {useState} from 'react'
import { useRouter } from 'next/router'

import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const Name = ({data}) => {
  const router = useRouter();
  const name = router.query.name;
  
  const [show, setShow] = useState(false);

  setTimeout(() => setShow(true), 1000)
  
  return (
    
        <div>
    <Head> 
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@500;700&display=swap" rel="stylesheet"></link>
    </Head>
        <Link href="/">
        <div className='flex items-center gap-2 justify-end lg:px-24 px-4 py-8 text-[#4F4F4F] cursor-pointer group'>
            <div><KeyboardBackspaceIcon /></div>
            <div>Back</div>
        </div>
        </Link>
         <div className='flex items-center lg:px-80 px-12 font-bold lg:text-4xl text-2xl py-8 text-[#4F4F4F]'>
        {name}
        </div>
        {!show && <div className='flex justify-center items-center'>
      <img src="loader.gif" alt="" />
    </div>}
    <div className='flex flex-col lg:px-80 px-4 items-start justify-center'>
     { show &&
      data.data.map((data,index) => (
        <div key={index} className='flex w-full justify-start items-center lg:py-20 py-8'>
        <div className='lg:text-4xl text-xl px-12 border-l-[8px] border-[#F7DF94]'>&quot;{data.quoteText}&ldquo;</div>
         </div>
      ))
    }
    </div>
     
    
    </div>

  )
}

export async function getServerSideProps(context) {
  const { name } = context.query;
  const response = await fetch(`https://quote-garden.herokuapp.com/api/v3/quotes/?author=${name}`)
  const data = await response.json();
  return {
    props:{
      data,
    }
  }
}

export default Name