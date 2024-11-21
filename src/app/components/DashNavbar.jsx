import Link from "next/link";

export default function DashNavbar() {
  return (
    <nav>
        <ul className="flex bg-orange-500 text-white h-14 items-center justify-end px-4 space-x-5 capitalize text-2xl">
            <li><Link href="/dashboard">Dashboard</Link></li>
            <li><Link href="/dashboard/users">users</Link></li>
            <li><Link href="/dashboard/admin">admin</Link></li>
            
        </ul>
    </nav>
  )
}