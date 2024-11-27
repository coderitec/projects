import React from 'react'

export default function SearchShop() {
  return (
    <div className='border-4 border-blue-300 rounded-2xl w-3/4 my-4 m-auto'>
      <input type="text" name="search" id="search" className='outline-none w-3/4 p-4' placeholder='Search for fruit or vegetable' />
    </div>
  )
}
