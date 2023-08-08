import Image from 'next/image'
 
export default function Page() {
  return (
    <Image
      src="public/image/front.png"
      alt="Picture of the author"
      width={1500}
      height={500}
    />
  )
}
