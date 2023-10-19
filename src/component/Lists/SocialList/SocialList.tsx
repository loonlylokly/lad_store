import VkIcon from '@/component/Icons/VkIcon/VkIcon';
import styles from './SocialList.module.css';
import TelegramIcon from '@/component/Icons/TelegramIcon/TelegramIcon';
import YoutubeIcon from '@/component/Icons/YoutubeIcon/YoutubeIcon';

export default function SocialList() {
  return (
    <ul className={styles.social}>
      <li>
        <VkIcon />
      </li>
      <li>
        <YoutubeIcon />
      </li>
      <li>
        <TelegramIcon />
      </li>
    </ul>
  );
}
