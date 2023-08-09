import React from 'react';

export default function Header() {
  const headerText = [
    {
      word: 'T',
      color: 'text-red-400'
    },
    {
      word: 'O',
      color: 'text-orange-400'
    },
    {
      word: 'D',
      color: 'text-yellow-400'
    },
    {
      word: 'O',
      color: 'text-green-400'
    },
    {
      word: 'L',
      color: 'text-blue-400'
    },
    {
      word: 'I',
      color: 'text-indigo-400'
    },
    {
      word: 'S',
      color: 'text-purple-400'
    },
    {
      word: 'T',
      color: 'text-pink-400'
    },
   
  ]

  return (
    <div className='flex justify-center items-center m-6'> 
      <h1 className=" font-bold text-3xl md:text-4xl lg:text-5xl">
        {
          headerText.map((w, index) => (
             <span key={index} className={w.color}>{w.word}</span>
          ))
        }
        {/* <span className='text-red-400'>T</span><span className='text-orange-400'>O</span><span className='text-blue-400'>D</span><span className='text-purple-400'>O</span> LIST */}
      </h1>
    </div>
  )
}
