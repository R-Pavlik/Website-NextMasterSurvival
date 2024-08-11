import React from 'react'

export default function () {
  return (
    <div className='relative w-screen h-[450px]'>
      <div className='absolute inset-0 bg-black bg-opacity-50 z-10 flex justify-center items-center flex-col'>
        <img src="logo.png" alt="" className='w-[250px]'/>
        <h1 className='text-white md:text-6xl text-4xl font-bold'>Pravidla Serveru</h1>
        <div className=' md:w-[350px] w-[230px] h-[5px] bg-white mt-2'></div>

      </div>
      {/* Obrázek */}
      <img 
        src="/background.png" 
        alt=""  
        className='w-screen h-full object-cover absolute inset-0 -z-10' 
      />
    </div>
  )
}
