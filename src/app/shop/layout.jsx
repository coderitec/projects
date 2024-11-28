import React from 'react'
import Category from './Category'

export default function ShopLayout({children}) {
  return (
    <div>
      <Category/>
      <div>
        {children}
      </div>
    </div>
  )
}
