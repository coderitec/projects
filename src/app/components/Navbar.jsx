"use client"
import Link from "next/link";
import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { SidebarContext } from "../providers";


export default function Navbar() {
  const {cart,cartOpen, setCartOpen} = useContext(SidebarContext)

  function handleCartOpen(){
    setCartOpen(!cartOpen)
  }
  return (
    <nav>
        <ul className="hidden md:flex flex-row justify-between items-center bg-blue-700 text-white h-28 font-bold capitalize px-4">
            <Link href="/">
            <li>home</li>
            </Link>

            <Link href="/shop">
            <li>shop</li>
            </Link>

            <Link href="/clothing">
            <li>clothing</li>
            </Link>

            <Link href="/about">
            <li>about</li>
            </Link>

            <Link href="/contact">
            <li>contact</li>
            </Link>
            
            <span className="cursor-pointer"
            onClick={handleCartOpen}>
            <li className="flex items-start">
              <FaShoppingCart className="text-3xl"/>
              <sup className="bg-red-500 text-white rounded-full p-4">{cart}</sup>
            </li>
            </span>

            <Link href="/sign-up">
            <li>sign up</li>
            </Link>

            <Link href="/dashboard">
            <li>dashboard</li>
            </Link>

        </ul>
    </nav>
  )
}

