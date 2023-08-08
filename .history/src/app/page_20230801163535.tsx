import Image from 'next/image'
 
export default function Page() {
  return (
    <Image
      src="/front.png"
      alt="Picture of the author"
      width={500}
      height={500}
    />
  )
}
