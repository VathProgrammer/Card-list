"use client"
import React, { useState } from 'react'
import Image from 'next/image'

interface DataProps {
  id?: number,
  name?: string
  url?: string
}

const Card: React.FC <DataProps>  = (
  {
    id,
    name,
    url
  }
) => {
 
  return (
    <div className='w-[50vh] h-[20vh] flex justify-center items-center bg-white shadow-md border '>
      
        <div className='w-[80%] h-[80%] flex justify-between items-start'>
                <Image
                src={`${url}`}
                width={500}
                height={500}
                alt='Image card'
                className='w-20 h-20 rounded-full object-cover'
                >
                </Image>
                <div className=''>

                    <p className='mb-2'>id:{id}</p>
                    <h1 className='mb-2'>Name: {name}</h1>
                    <button className='px-10 py-1 bg-gray-400 outline-none text-white'>Prevuis</button>
                </div>
                <div className='flex justify-end'>
                <button className='bg-red-600 px-2 py-0 text-white'>X</button>
      </div>
        </div>
    </div>
  )
}

export  {Card}