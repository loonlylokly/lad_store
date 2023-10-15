import dynamic from 'next/dynamic';
import styles from './Basket.module.css';

const BasketList = dynamic(() => import('@/component/Lists/BasketList/BasketList'), { ssr: false })

export default function Basket() {
  return (
    <section>
      <h1 className={styles.title}>Корзина</h1>
      <BasketList />
    </section>
  )
}
