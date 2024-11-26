
import Image from "next/image"
import { fruits } from "../components/data"
import king from '../components/product.module.css'
import Link from "next/link"

export default function ShopPage() {
    const productCat = fruits.map(product => (
        <section key={product.id} className="flex flex-col items-center hover:shadow-2xl">
          <Link href={`/shop/${product.name}`} title={`${product.name} is a type of ${product.brand}`}>
            <p>ID: {product.id}</p>
            <Image src={`https://robohash.org/${product.id}`} alt={product.name} width={150} height={150}/>
            {/* <Image src={product.imageUrl} alt={product.name} width={150} height={150}/> */}
            <h2>Name: {product.name}</h2>
            <p>Brand: {product.brand}</p>
          </Link>
        </section>
    ))
  return (
    <div className={king.prod}>
        {productCat}
    </div>
  )
}

