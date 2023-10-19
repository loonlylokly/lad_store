import PhoneIcon from '@/component/Icons/PhoneIcon/PhoneIcon';
import EmailIcon from '@/component/Icons/EmailIcon/EmailIcon';
import AddressIcon from '@/component/Icons/AddressIcon/AddressIcon';
import styles from './Contacts.module.css';

const Contacts = () => {
  return (
    <ul className={styles.contacts__list}>
      <li className={styles.contacts__item}>
        <a className={styles.contacts__link} href="tel:+78314133224">
          <PhoneIcon />
          <p itemProp="telephone">+7 (800) 000 00 00</p>
        </a>
      </li>
      <li className={styles.contacts__item}>
        <a className={styles.contacts__link} href="mailto:uristnn.ru@yandex.ru">
          <EmailIcon />
          <p itemProp="email">example@email.ru</p>
        </a>
      </li>
      <li className={styles.contacts__item}>
        <a className={styles.contacts__link} href="/contacts">
          <AddressIcon />
          <span
            itemProp="address"
            itemScope
            itemType="http://schema.org/PostalAddress"
          >
            <span itemProp="postalCode">600000,&ensp;</span>
            <span itemProp="addressLocality">Нижний Новгород,&ensp;</span>
            <span itemProp="streetAddress">
              ул.Вымышленных разработчиков, д.13, -1 этаж, офис 228
            </span>
          </span>
        </a>
      </li>
    </ul>
  );
};

export default Contacts;
