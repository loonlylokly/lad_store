import localFont from "next/font/local";
import styles from "./Logo.module.css"

const electromagnetic = localFont({ src: '../../../../public/fonts/electromagnetic-lungs.woff2' })

export default function Logo ({width=56, height=40}) {
  return (
    <a className={styles.logo} href="/">
      <p className={`${electromagnetic.className} ${styles.lad}`}>lad<span className={styles.line}>&nbsp;</span></p>
      <p className={electromagnetic.className}>fashion</p>
    </a>
  )
}
