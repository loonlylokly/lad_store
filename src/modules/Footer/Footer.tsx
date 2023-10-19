import SocialList from '@/component/Lists/SocialList/SocialList';
import Contacts from '@/component/Lists/Contacts/Contacts';
import LogoFooter from '@/component/Icons/LogoFooter/LogoFooter';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.about}>
        <LogoFooter />
      </div>
      <hr className={styles.line} />
      <div className={styles.contacts}>
        <Contacts />
      </div>
      <div className={styles.socials}>
        <SocialList />
      </div>
    </footer>
  );
}
