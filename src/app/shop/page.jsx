import { products } from "../components/data"
import king from '../components/product.module.css'

export default function ShopPage() {
    const productCat = products.map(product => (
        <section key={product.id} className="flex flex-col items-center hover:shadow-2xl">
            <p>ID: {product.id}</p>
            <h2>Name: {product.name}</h2>
            <p>Brand: {product.brand}</p>
        </section>
    ))
  return (
    <div className={king.prod}>
        {productCat}
    </div>
  )
}