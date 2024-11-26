import React from 'react'
import { fruits } from '@/app/components/data'
import Image from 'next/image'

export default function FruitPage({params}) {
    const  fruitDetails = fruits.find(fruit => fruit.name == params.slug)
  return (
    <div className='flex flex-col space-y-5 items-center justify-center'>
      <h1>Fruit Name: {fruitDetails.name}</h1>

      <Image src={fruitDetails.imageUrl} alt={fruitDetails.name} width={300} height={300}/>

      <p>Category: {fruitDetails.category}</p>
      
      <p>Brand: {fruitDetails.brand}</p>

      <p>Description: {fruitDetails.description}</p>

      <p>Amount: &#8358; {fruitDetails.price}</p>
    </div>
  )
}
