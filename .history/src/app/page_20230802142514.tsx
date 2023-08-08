import Image from 'next/image'
import styles from './Design.module.css'
export default function Page() {
  return (
  <div>
        <Image
      src="/../public/image/Rectangle 25.jpg"
      alt="Picture"
      width={1520}
      height={600}
          />
          <Image
          className={styles.image2}
          src="/../public/image/final logo.jpg"
          alt="Picture"
          width={278}
          height={278}
          />
          <h1>Furniture</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod t empor incididunt ut labore </p>

          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 69 69" fill="none">
  <circle cx="34.5" cy="34.5" r="33.5" fill="white" stroke="#222831" stroke-width="2"/>
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 33 33" fill="none">
  <path d="M27.4313 28.875C24.5667 28.875 21.731 28.2563 18.9241 27.0187C16.1173 25.7812 13.5676 24.0167 11.275 21.725C8.98333 19.4333 7.21875 16.8896 5.98125 14.0938C4.74375 11.2979 4.125 8.45625 4.125 5.56875V4.125H12.2375L13.5094 11.0344L9.59062 14.9875C10.0948 15.8812 10.6562 16.7292 11.275 17.5312C11.8937 18.3333 12.5583 19.0781 13.2687 19.7656C13.9333 20.4302 14.6612 21.0664 15.4522 21.6741C16.2433 22.2819 17.0968 22.8488 18.0125 23.375L22 19.3875L28.875 20.7969V28.875H27.4313Z" fill="#222831"/>
</svg>
</svg>
          <h5>phone number</h5>
  </div>        
  )

}
