import DashNavbar from "../components/DashNavbar";


export default function DashboardLayout({children}) {
  return (
    <div>
        <DashNavbar/>
        {children}
    </div>
  )
}