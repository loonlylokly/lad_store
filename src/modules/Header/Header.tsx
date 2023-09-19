import Link from "next/link";
import Logo from "@/component/Icons/Logo/Logo";
import DesktopMenu from "@/component/Menu/DesktopMenu/DesktopMenu";
import Hamburger from "@/component/Icons/Hamburger/Hamburger";
import MobileMenu from "@/component/Menu/MobileMenu/MobileMenu";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <Logo />
        <DesktopMenu />
        <Link className={`${styles.loginBtn} btn btnSecondary`} href="/login">Войти</Link>
        <Hamburger />
      </header>
      <MobileMenu />
    </>
  )
}