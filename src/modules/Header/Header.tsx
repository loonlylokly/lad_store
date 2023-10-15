import Logo from "@/component/Icons/Logo/Logo";
import DesktopMenu from "@/component/Menu/DesktopMenu/DesktopMenu";
import Hamburger from "@/component/Buttons/Hamburger/Hamburger";
import MobileMenu from "@/component/Menu/MobileMenu/MobileMenu";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <Logo />
        <DesktopMenu />
        <a className={`${styles.loginBtn} btn btnSecondary`} href="/">Войти</a>
        <Hamburger />
      </header>
      <MobileMenu />
    </>
  )
}