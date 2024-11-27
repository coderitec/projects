import React from 'react'
import { fruits } from '@/app/components/data'
import Image from 'next/image'
import Link from 'next/link'

export default function FruitPage({params}) {
    const  fruitDetails = fruits.find(fruit => fruit.name.split(' ').join('-') == params.slug)

    const relatedFruits = fruits.filter(fruit => (fruit.category == fruitDetails.category) && (fruitDetails.name !== fruit.name)).map(product => (
        <section key={product.id} className="flex flex-col items-center hover:shadow-2xl">
          <Link href={`/shop/${product.name.replaceAll(' ','-')}`} title={`${product.name} is a type of ${product.brand}`}>
            {/* <p>ID: {product.id}</p> */}
            <Image src={`https://robohash.org/${product.id}`} alt={product.name} width={150} height={150}/>
            
            <h2>Name: {product.name}</h2>
            <p>Brand: {product.brand}</p>
          </Link>
        </section>
    ))



  return (
    <div>

    <div className='flex flex-col space-y-5 items-center justify-center'>
      <h1>Fruit Name: {fruitDetails.name}</h1>

      <Image src={fruitDetails.imageUrl} alt={fruitDetails.name} width={300} height={300}/>

      <p>Category: {fruitDetails.category}</p>
      
      <p>Brand: {fruitDetails.brand}</p>

      <p>Description: {fruitDetails.description}</p>

      <p>Amount: &#8358; {fruitDetails.price}</p>

    </div>
      <section>
      <h2 className='py-10 capitalize text-center text-3xl border-y-8 border-blue-500 mx-4 my-7'>fruits that are related</h2>
      <div className='grid grid-cols-3 gap-3 w-4/5'>
        {relatedFruits}
      </div>
    </section>
    </div>
  )
}
