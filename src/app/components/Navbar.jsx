import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
        <ul className="flex flex-row justify-between items-center bg-blue-700 text-white h-28 font-bold capitalize px-4">
            <Link href="/">
            <li>home</li>
            </Link>

            <Link href="/shop">
            <li>shop</li>
            </Link>

            <Link href="/about">
            <li>about</li>
            </Link>

            <Link href="/contact">
            <li>contact</li>
            </Link>

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