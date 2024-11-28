import { products } from "@/app/components/files"
import Link from "next/link"

export default function Clothing() {
    const productDetails = products.map(product => (
        <article key={product.id} className="rounded-2xl border-blue-500 text-center py-5 px-6 border-4">
            <Link href={`/clothing/${product.name.replaceAll(' ','-')}`}>
            <h2>{product.name}</h2>
            <p>&#8358;{product.price.toLocaleString()}</p>
            </Link>
        </article>
    ))
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-5 mx-auto w-4/5">
        {productDetails}
    </div>
  )
}