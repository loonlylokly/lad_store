import Image from "next/image";
import styles from "./Hamburger.module.css";

export default function Hamburger ({width=36, height=36}) {
  return (
    <button className={styles.hamburger}>
      <Image
        src="/icons/hamburger.svg"
        alt='Мобильное меню'
        width={width}
        height={height}
        loading = 'eager'
      />
    </button>
  );
}
