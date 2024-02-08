"use client"
import React from 'react'
import { Card } from '..'
import { useState } from 'react'

interface CardProps {
    id?: number,
    name?: string
    url?: string
}

const dataCard = [
  {
    id:0,
    name: "oh my god",
    url: "/Profiles/1.jpg"
  }
]

const CardList = () => {

  const [data,setData] = useState <Array<CardProps>> (dataCard)

  return (
    <div className='grid grid-flow-row grid-cols-4 gap-5'>
        {
          data.map((item,index) =>{
            return (
              <Card
                key={index}
                id={item.id}
                name={item.name}
                url={item.url}
              />
            )
          })
        }
    </div>
  )
}

export  {CardList}