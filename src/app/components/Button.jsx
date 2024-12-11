"use client"
import { useContext } from "react"
import { SidebarContext } from "../providers"


export default function Button() {

    const {setCart} = useContext(SidebarContext)

    function handleCartIncrease(){
        setCart(prev => prev + 1)
    }
  return (
    
    <button className="bg-blue-800 text-white py-4 px-2 rounded-md " 
    onClick={handleCartIncrease}>Add to cart</button>
  )
}