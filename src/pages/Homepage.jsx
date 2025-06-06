import React from 'react'

const Homepage = () => {
  return (
    <header className='w-full  dark:bg-white h-16 text-xl flex flex-row items-center justify-between px-4'>
      <div className='font-bold'>Logo</div>
      <nav className='space-x-4'>
        <a href='#' className='hover:underline'>Home</a>
        <a href='#' className='hover:underline'>About</a>
        <a href='#' className='hover:underline'>Contact</a>
      </nav>
    </header>
  )
}

export default Homepage;