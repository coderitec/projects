import Image from "next/image";
import pic from './components/flowers.jpeg'

export default function Home() {
  return (
    <main className="flex flex-wrap space-x-4">
    <Image src="/fleurs.jpg" alt="flowers of paris" width={'500'} height={'400'}/>

    <Image src="/flow.jpg" alt="flowers of paris" width={'500'} height={'400'}/>

    <Image src="https://plus.unsplash.com/premium_photo-1731287011824-1a51da402685?q=80&w=1459&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="flowers of paris" width={'300'} height={'400'}/>

    <Image src="https://images.pexels.com/photos/69776/tulips-bed-colorful-color-69776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="flowers of paris" width={'500'} height={'400'}/>

    <Image src={pic} alt="flowers of paris" width={'500'} height={'400'}/>
    
    </main>
  )
}

