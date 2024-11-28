import { fruits } from "@/app/components/data"
import Link from "next/link"
import Image from "next/image"
import king from '../../components/product.module.css'

export default function JustFruits() {
    const productCat = fruits.filter(fruit => fruit.category == 'Fruits').map(product => (
        <section key={product.id} className="flex flex-col items-center hover:shadow-2xl">
          <Link href={`/shop/${product.name.replace(' ','-')}`} title={`${product.name} is a type of ${product.brand}`}>
            <p>ID: {product.id}</p>
            <Image src={`https://robohash.org/${product.id}`} alt={product.name} width={150} height={150}/>
            
            <h2>Name: {product.name}</h2>
            <p>Brand: {product.category}</p>
            <p>Brand: {product.brand}</p>
          </Link>
        </section>
    ))
  return (
    <div>
      
    <div className={king.prod}>
        {productCat}
    </div>

   
    </div>
  )
}

