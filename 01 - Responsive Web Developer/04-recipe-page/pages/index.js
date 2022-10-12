import React from 'react'

import Head from 'next/head'

import {HiOutlineClock} from 'react-icons/hi'
import {GiRiceCooker} from 'react-icons/gi'


const Home = () => {
  return (
  <React.Fragment>
    <Head>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet"></link>
    </Head>

    <div className='flex flex-col lg:px-60 px-3 lg:gap-8 gap-5 lg:py-12 py-8 '>
      <div>
        <div className='font-playfair font-bold lg:text-5xl text-2xl'>Classic Cheesecake Recipe</div>
        <div className='flex gap-2 text-[#4F4F4F] mt-7'>
          <div className='flex flex-col text-[#C4C4C4] pt-1'>
          <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="1.5" cy="1.5" r="1.5" fill="#C4C4C4"/>
            <circle cx="1.5" cy="6.5" r="1.5" fill="#C4C4C4"/>
            <circle cx="6.5" cy="1.5" r="1.5" fill="#C4C4C4"/>
            <circle cx="6.5" cy="6.5" r="1.5" fill="#C4C4C4"/>
            <circle cx="11.5" cy="1.5" r="1.5" fill="#C4C4C4"/>
            <circle cx="11.5" cy="6.5" r="1.5" fill="#C4C4C4"/>
            </svg>
          </div>
          <div className='font-medium lg:text-sm text-xs w-[36rem] italic'>Look no further for a creamy and ultra smooth classic cheesecake recipe! Paired with a buttery graham cracker crust, no one can deny its simple decadence. For the best results, bake in a water bath.</div>
        </div>
      </div>
      <div className='rounded-xl'>
       <img className='rounded-xl' src="./assets/photo1.png" alt="cheescake" />
      </div>
      <div className='flex lg:flex-row flex-col-reverse justify-between'>
        <div className='lg:w-2/3'>
          <div className='font-playfair font-bold text-2xl'>Ingredients</div>
          <div className='mt-8'>
          <div className='font-playfair !font-normal lg:text-lg text-base italic mb-5'>Graham Cracker Crust</div>
          <div className='flex gap-2 items-start'>
          <input className='border-[#828282] w-1/12 h-5 cursor-pointer' type="checkbox" name="" value="" />
          <span className='lg:text-base text-sm w-11/12'>1 and 1/2 cups (150g) <b>graham cracker crumbs</b> (about 10 full sheet graham crackers)</span>
          </div>
          <div className='flex gap-2 items-start mt-4'>
          <input className='border-[#828282] w-1/12 h-5 cursor-pointer' type="checkbox" name="" value="" />
          <span className='text-base w-11/12'>5 Tablespoons (70g) <b>unsalted butter</b>, melted</span>
          </div>
          <div className='flex gap-2 items-start mt-4'>
          <input className='border-[#828282] w-1/12 h-5 cursor-pointer' type="checkbox" name="" value="" />
          <span className='text-base w-11/12'>1/4 cup (50g) <b>granulated sugar</b></span>
          </div>
          </div>

          <div className='mt-8'>
          <div className='font-playfair !font-normal text-lg italic mb-5'>Cheesecake</div>
          <div className='flex gap-2 items-start '>
          <input className='border-[#828282] w-1/12 h-5 cursor-pointer' type="checkbox" name="" value="" />
          <span className='text-base w-11/12'>four 8-ounce blocks (904g) full-fat <b>cream cheese</b>, softened to room temperature</span>
          </div>
          <div className='flex gap-2 items-start mt-4'>
          <input className='border-[#828282] w-1/12 h-5 cursor-pointer' type="checkbox" name="" value="" />
          <span className='text-base w-11/12'>1 cup (200g) <b>granulated sugar</b></span>
          </div>
          <div className='flex gap-2 items-start mt-4'>
          <input className='border-[#828282] w-1/12 h-5 cursor-pointer' type="checkbox" name="" value="" />
          <span className='text-base w-11/12'>1 cup (240g) full-fat <b>sour cream</b>, at room temperature</span>
          </div>
          <div className='flex gap-2 items-start mt-4'>
          <input className='border-[#828282] w-1/12 h-5 cursor-pointer' type="checkbox" name="" value="" />
          <span className='text-base w-11/12'>1 teaspoon <b>pure vanilla extract</b></span>
          </div>
          <div className='flex gap-2 items-start mt-4'>
          <input className='border-[#828282] w-1/12 h-5 cursor-pointer' type="checkbox" name="" value="" />
          <span className='text-base w-11/12'>2 teaspoons <b>fresh lemon juice</b> (optional, but recommended)</span>
          </div>
          <div className='flex gap-2 items-start mt-4'>
          <input className='border-[#828282] w-1/12 h-5 cursor-pointer' type="checkbox" name="" value="" />
          <span className='text-base w-11/12'>3 large <b>eggs</b>, at room temperature</span>
          </div>
          <div className='flex gap-2 items-start mt-4'>
          <input className='border-[#828282] w-1/12 h-5 cursor-pointer' type="checkbox" name="" value="" />
          <span className='text-base w-11/12'>topping suggestions: salted caramel, lemon curd, strawberry  topping, chocolate ganache, red wine chocolate ganache, fresh  fruit, whipped cream, or raspberry sauce (recipe in notes) </span>
          </div>
          </div>
          <div className='font-playfair font-bold text-2xl mt-12 mb-6'>Ingredients</div>

          <div className="flex flex-col">
            <div className='flex items-start gap-3 mt-4'>
              <div className='w-1/12 text-center font-playfair font-bold text-2xl !w-9 h-8 leading-none  rounded-md bg-[#F2994A] text-white'><div>1</div></div>
              <div className='w-11/12 text-base !font-normal'>Adjust the oven rack to the lower-middle position and preheat oven to 350°F (177°C).</div>
            </div>
            <div className='flex items-start gap-3 mt-4'>
              <div className='w-1/12 text-center font-playfair font-bold text-2xl !w-9 h-8 leading-none rounded-md bg-[#F2994A] text-white'>2</div>
              <div className='w-11/12 text-base !font-normal'><b>Make the crust: </b> Using a food processor, pulse the graham crackers into crumbs. Pour into a medium bowl and stir in sugar and melted butter until combined. (You can also pulse it all together in the food processor.) Mixture will be sandy. Press firmly into the bottom and slightly up the sides of a 9-inch or 10-inch springform pan. No need to grease the pan first. I use the bottom of a measuring cup to pack the crust down tightly. Pre-bake for 8 minutes. Remove from the oven and place the hot pan on a large piece of aluminum foil. The foil will wrap around the pan for the water bath in step 4. Allow crust to slightly cool as you prepare the filling.</div>
            </div>
            <div className='flex items-start gap-3 mt-4'>
              <div className='w-1/12 text-center font-playfair font-bold text-2xl !w-9 h-8 leading-none rounded-md bg-[#F2994A] text-white'>3</div>
              <div className='w-11/12 text-base !font-normal'><b>Make the filling: </b> Using a handheld or stand mixer fitted with a paddle attachment, beat the cream cheese and granulated sugar together on medium-high speed in a large bowl until the mixture is smooth and creamy, about 2 minutes. Add the sour cream, vanilla extract, and lemon juice then beat until fully combined. On medium speed, add the eggs one at a time, beating after each addition until just blended. After the final egg is incorporated into the batter, stop mixing. To help prevent the cheesecake from deflating and cracking as it cools, avoid over-mixing the batter as best you can.</div>
            </div>
            <div className='flex items-start gap-3 mt-4'>
              <div className='w-1/12 text-center font-playfair font-bold text-2xl !w-9 h-8 leading-none rounded-md bg-[#F2994A] text-white'>4</div>
              <div className='w-11/12 text-base !font-normal'><b>Prepare the simple water bath (see note) </b> Boil a pot of water. You need 1 inch of water in your roasting pan for the water bath, so make sure you boil enough. I use an entire kettle of hot water. As the water is heating up, wrap the aluminum foil around the springform pan. Pour the cheesecake batter on top of the crust. Use a rubber spatula or spoon to smooth it into an even layer. Place the pan inside of a large roasting pan. Carefully pour the hot water inside of the pan and place in the oven. (Or you can place the roasting pan in the oven first, then pour the hot water in. Whichever is easier for you.</div>
            </div>
            <div className='flex items-start gap-3 mt-4'>
              <div className='w-1/12 text-center font-playfair font-bold text-2xl !w-9 h-8 leading-none rounded-md bg-[#F2994A] text-white'>5</div>
              <div className='w-11/12 text-base !font-normal'>Bake cheesecake for 55-70 minutes or until the center is almost set. When it’s done, the center of the cheesecake will slightly wobble if you gently shake the pan. Turn the oven off and open the oven door slightly. Let the cheesecake sit in the oven in the water bath as it cools down for 1 hour. Remove from the oven and water bath, then cool cheesecake completely at room temperature. Then refrigerate the cheesecake for at least 4 hours or overnight.</div>
            </div>
            <div className='flex items-start gap-3 mt-4'>
              <div className='w-1/12 text-center font-playfair font-bold text-2xl !w-9 h-8 leading-8 rounded-md bg-[#F2994A] text-white'>6</div>
              <div className='w-11/12 text-base !font-normal'>Use a knife to loosen the chilled cheesecake from the rim of the springform pan, then remove the rim. Using a clean sharp knife, cut into slices for serving. For neat slices, wipe the knife clean and dip into warm water between each slice.</div>
            </div>
            <div className='flex items-start gap-3 mt-4'>
              <div className='w-1/12 text-center font-playfair font-bold text-2xl !w-9 h-8 leading-none rounded-md bg-[#F2994A] text-white'>7</div>
              <div className='w-11/12 text-base !font-normal'>Serve cheesecake with desired toppings. Cover and store leftover cheesecake in the refrigerator for up to 5 days.</div>
            </div>
          </div>
          <div className='mt-16 lg:text-base text-sm !font-normal text-[#BDBDBD] italic'>Source: https://sallysbakingaddiction.com/classic-cheesecake/ </div>
        </div>
        <div className='lg:mb-0 mb-6 grid grid-cols-3 lg:flex lg:flex-col lg:gap-8 gap-4 lg:bg-white lg:py-12 lg:px-6 h-max lg:w-60 lg:shadow-lg rounded-xl text-[#333333]'>
          <div className='flex items-center gap-2'>
            <div className='text-[#F2994A]'><GiRiceCooker size={32} /></div>
            <div>
              <div className='font-bold lg:text-[10px] text-[8px] text-[#BDBDBD] uppercase'>Yields</div>
              <div className='lg:text-sm text-[10px] text-[#F2994A]'>12 servings</div>
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <div><HiOutlineClock size={32} /></div>
            <div>
              <div className='font-bold lg:text-[10px] text-[8px] text-[#BDBDBD] uppercase'>Prep TIme</div>
              <div className='lg:text-sm text-[10px]'>45 minutes</div>
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <div><HiOutlineClock size={32} /></div>
            <div>
              <div className='font-bold lg:text-[10px] text-[8px] text-[#BDBDBD] uppercase'>Cook Time </div>
              <div className='lg:text-sm text-[10px]'>1 hour</div>
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <div><HiOutlineClock size={32} /></div>
            <div>
              <div className='font-bold lg:text-[10px] text-[8px] text-[#BDBDBD] uppercase'>Total Time </div>
              <div className='lg:text-sm text-[10px]'>7,75 hours</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
  )
}

export default Home