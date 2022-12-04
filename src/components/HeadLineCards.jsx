import React from 'react'

const HeadLineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 flex items-center  justify-between		 gap-6'>
      {/* Cards */}
    <div className='rounded-xl relative w-1/3	'>
      {/* Overlay */}
      <div className='absolute w-full h-full  bg-black/50 rounded-xl text-white  cursor-pointer hover:scale-102	transition-all duration-500'>
        <p className='font-bold text-2xl px-2 pt-4 '>Sun's Out, Bogo's Out </p>
        <p className='px-2'>Through 8/26</p>
        <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
      </div>
      <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl ' src="https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400" alt="/" />
    </div>
      {/* Cards */}
    <div className='rounded-xl relative w-1/3'>
      {/* Overlay */}
      <div className='absolute w-full h-full  bg-black/50 rounded-xl text-white cursor-pointer'>
        <p className='font-bold text-2xl px-2 pt-4 '>New Restaurants</p>
        <p className='px-2'>Added Daily</p>
        <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
      </div>
      <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl ' src="https://images.pexels.com/photos/14459158/pexels-photo-14459158.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
    </div>
      {/* Cards */}
    <div className='rounded-xl relative w-1/3'>
      {/* Overlay */}
      <div className='absolute w-full h-full  bg-black/50 rounded-xl text-white cursor-pointer'>
        <p className='font-bold text-2xl px-2 pt-4 '>We Deliver Deserts Too</p>
        <p className='px-2'>Tasty Treats</p>
        <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
      </div>
      <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl ' src="https://images.pexels.com/photos/5602724/pexels-photo-5602724.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
    </div>
    </div>
  )
}

export default HeadLineCards