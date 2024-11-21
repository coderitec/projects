import Link from "next/link";

<<<<<<< HEAD

export default function Navbar() {
  return (
    <nav>
      <ul className='flex flex-row justify-between items-center bg-blue-700 text-white h-28 font-bold capitalize px-4'>
        
        <Link href="/"><li>Home</li></Link>
        
        <Link href="/about"><li>About</li></Link>
        
        <Link href="/contact"><li>Contact</li></Link>
        
        <Link href="/sign-up"><li>SignUp</li></Link>
      </ul>
    </nav>
  )
}
=======
export default function Navbar() {
  return (
    <nav>
        <ul className="flex flex-row justify-between items-center bg-blue-700 text-white h-28 font-bold capitalize px-4">
            <Link href="/">
            <li>home</li>
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
>>>>>>> 1b51ae8ea8e08596ad8bbed7460a51867efd4679
