import Link from "next/link";


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
