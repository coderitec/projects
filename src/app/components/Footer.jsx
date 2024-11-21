import Link from "next/link";
import { FaSquareInstagram, FaTwitter } from "react-icons/fa6";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import styles from './footer.module.css'

export default function Footer() {

    const currentYear = new Date().getFullYear()

  return (


    <footer className={`${styles.footer} text-white h-[30vh] flex flex-col items-center justify-center text-3xl`}>
        <p>This app is a product of &copy;<Link href="https://univelcity.com/" target="_blank" className="hover:font-bold px-3">univelcity</Link> {currentYear}</p>
        <div>
          <h2>Reach out to us on:</h2>
          <ul className={styles.header}>
            <li><Link href={'#'}>
            <FaSquareInstagram/>
            </Link></li>

            <li><Link href={'#'}>
            <FaTwitter/>
            </Link></li>

            <li><Link href={'#'}>
            <AiFillLinkedin/></Link></li>

            <li><Link href={'#'}>
            <AiFillGithub/></Link></li>
          </ul>
        </div>
    </footer>
  
  )
}