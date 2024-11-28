import Image from "next/image";

export default function NoItem() {
  return (
    <div className="mx-auto space-y-4 w-4/5">
        <Image src={'/error.jpg'} alt="page does not exist" width={500} height={500}/> 

        <h2>Sorry we could not find what you are looking for</h2>
    </div>
  )
}