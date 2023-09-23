import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "./LogoFooter.module.css"

const electromagnetic = localFont({ src: '../../../../public/fonts/electromagnetic-lungs.woff2' })

export default function Logo ({width=56, height=40}) {
  return (
    <Link className={styles.logo} href="/">
      <p className={`${electromagnetic.className} ${styles.lad}`}>lad<span className={styles.line}>&nbsp;</span></p>
      <p className={`${electromagnetic.className} ${styles.fashion}`}>fashion</p>
    </Link>
  )
}
