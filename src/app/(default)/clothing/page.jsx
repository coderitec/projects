"use client"
import { products } from "@/app/components/files"
import NoItem from "@/app/components/NoItem"
import SearchShop from "@/app/shop/Search"
import Link from "next/link"
import { useState } from "react"


export default function Clothing() {
    const [search, setSearch] = useState('')

    function handleSearch(e){
        setSearch(e.target.value)
    }

    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(search.toLowerCase()) || product.category.toLowerCase().includes(search.toLowerCase())  )

    const productDetails = filteredProducts.length == 0 ?
    (
        <NoItem/>
    ) :
    filteredProducts.map(product => (
        <article key={product.id} className="rounded-2xl border-blue-500 text-center py-5 px-6 border-4">
            <Link href={`/clothing/${product.name.replaceAll(' ','-')}`}>
            <h2>{product.name}</h2>
            <p>&#8358;{product.price.toLocaleString()}</p>
            </Link>
        </article>
    ))

    console.log(filteredProducts)
  return (
    <>
    <SearchShop holder="search for clothing item" title={search} handle={(e)=>handleSearch(e)}/>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-5 mx-auto w-4/5">
        {productDetails} 
    </div>
    </>
  )
}