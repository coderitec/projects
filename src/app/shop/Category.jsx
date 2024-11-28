import Link from 'next/link'
import React from 'react'

export default function Category() {
  return (
    <nav>
      <ul className='flex space-x-3 items-center justify-end py-6 pr-10 bg-orange-500 text-white'>
        <li><Link href={'/shop'}>Shop</Link></li>
        <li><Link href={'/shop/fruits'}>Fruits</Link></li>
        <li><Link href={'/shop/vegetables'}>Vegetables</Link></li>
      </ul>
    </nav>
  )
}
