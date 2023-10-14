import Image from "next/image";
import styles from "./ProductSlider.module.css";

export default function ProductSlider({images, name}: {images: string[], name: string}) {
  return (
    <div className={styles.container}>
      <ul className={styles.thumbnails}>
        {images.map((item, index) => {
          return (
            <li key={index}>
              <a href={`#slide${index}`}>
                <Image 
                  src={item}
                  alt={name}
                  width={80}
                  height={80}
                />
              </a>
            </li>
          )
        })}
      </ul>

      <ul className={styles.slides}>
        {images.map((item, index) => {
          return (
            <li key={index} id={`slide${index}`}>
              <Image 
                src={item}
                alt={name}
                width={280}
                height={280}
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
