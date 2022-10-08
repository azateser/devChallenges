import React from "react";

import Head from 'next/head'

const Home = () => {
  return (
    <React.Fragment>
      <Head>
      <link href="https://fonts.googleapis.com/css2?family=PT+Serif:wght@400;700&family=Poppins:wght@400;600&display=swap" rel="stylesheet" />
      </Head>

      <div className="flex flex-col items-center w-full md:py-28 py-16">
        <div className="flex md:flex-row flex-col md:max-w-[60rem] px-3">
          <div className="font-pt font-bold text-4xl md:w-1/2 tracking-tighter">The creative crew</div>
          <div className="md:w-1/2 md:px-4 md:mt-0 mt-12">
            <div className="text-lg font-semibold uppercase mb-2">Who we are</div>
            <div className="md:text-lg text-sm pr-3">We are team of creatively diverse.  driven.  innovative individuals working in various locations from the world.</div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-2 md:max-w-[60rem] pl-4 mt-24 gap-y-6">
          <div>
            <div className="flex relative">
              <div className="w-3/4" ><img src="./assets/photo1.png" alt="" /></div>
              <div className="absolute md:right-3 -right-2 uppercase md:top-11 top-9 md:text-xs text-[10px] rotate-90 font-pt font-normal">Product owner</div>
            </div>
            <div className="mt-4 font-bold md:text-lg text-sm">Bill Mahoney</div>
          </div>
          <div className="h-max">
            <div className="flex relative md:mt-24 mt-6">
              <div className="w-3/4" ><img src="./assets/photo2.png" alt="" /></div>
              <div className="absolute md:right-3 right-0 uppercase md:top-11 top-7 md:text-xs text-[10px] rotate-90 font-pt font-normal">Art director</div>
            </div>
            <div className="mt-4 font-bold md:text-lg text-sm">Saba Cabrera</div>
          </div>
          <div>
            <div className="flex relative">
              <div className="w-3/4" ><img src="./assets/photo3.png" alt="" /></div>
              <div className="absolute md:right-3 right-0 uppercase md:top-11 top-7 md:text-xs text-[10px] rotate-90 font-pt font-normal">Tech Lead</div>
            </div>
            <div className="mt-4 font-bold md:text-lg text-sm">Shae Le</div>
          </div>
          <div>
            <div className="flex relative">
              <div className="w-3/4" ><img src="./assets/photo4.png" alt="" /></div>
              <div className="absolute md:right-3 right-0 uppercase md:top-11 top-7 md:text-xs text-[10px] rotate-90 font-pt font-normal">UX Designer</div>
            </div>
            <div className="mt-4 font-bold md:text-lg text-sm">Skylah Lu</div>
          </div>
          <div>
            <div className="flex relative md:mt-24 mt-6">
              <div className="w-3/4" ><img src="./assets/photo5.png" alt="" /></div>
              <div className="absolute md:right-3 right-0 uppercase md:top-11 top-7 md:text-xs text-[10px] rotate-90 font-pt font-normal">Developer</div>
            </div>
            <div className="mt-4 font-bold md:text-lg text-sm">Griff Richards</div>
          </div>
          <div>
            <div className="flex relative">
              <div className="w-3/4" ><img src="./assets/photo6.png" alt="" /></div>
              <div className="absolute md:right-3 right-0 uppercase md:top-11 top-7 md:text-xs text-[10px] rotate-90 font-pt font-normal">Deverloper</div>
            </div>
            <div className="mt-4 font-bold md:text-lg text-sm">Stan John</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
