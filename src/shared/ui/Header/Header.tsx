import React from 'react'

export const Header = () => {
  return (
    <div className='container min-w-full px-10 absolute z-30 flex flex-wrap items-center justify-between mx-auto py-6 left-0 rigth-0 text-white'>

      <div className='flex items-center gap-[2px]'>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.489 41.541C12.07 33.858 20.805 13.639 26.386 4.5" /><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.65 43.5c-3.8-6.47-10.11-28.766-10.981-36.026" /><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.027 30.936c8.411-.151 23.94-3.63 31.946-7.592" /></svg>
        </span>
        <span className='font-bold'>AniU</span>
      </div>
      <ul className='flex items-center gap-5'>
        <li>
          Home
        </li >
        <li>
          Anime
        </li>
        <li>
          Manga
        </li>
      </ul >
    </div>
  )
}
