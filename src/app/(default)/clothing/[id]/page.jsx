import Button from "@/app/components/Button";
import { products } from "@/app/components/files"
import Image from "next/image"
import { CgGirl } from "react-icons/cg";


export default function ProductPage({params}) {
    const productData = products.find(product => product.name.replaceAll(' ','-')== params.id)
  return (
    <div className="flex flex-col w-3/5 m-auto my-6">
        <h2 className="text-5xl text-white bg-blue-950 text-center uppercase my-6">{productData.name}</h2>

        <Image src={`https://robohash.org/${productData.imageUrl}`} alt={productData.name} width={400} height={400}/>
        <p>&#8358;{productData.price.toLocaleString()}</p>

        <div className="flex items-start space-x-4">

        <div className="py-3">
            <h3>Product Description</h3>

            <ul>
            {productData.description.map((desc,index)=> (
                <li key={index} className="flex items-center space-x-3 ">
                    <CgGirl/>
                    <span>{desc}</span>
                </li>
            ))}
            </ul>
        </div>
            <Button/>
    </div>

    </div>
  )
}