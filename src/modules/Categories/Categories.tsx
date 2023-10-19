'use client';

import styles from './Categories.module.css';

export default function Categories() {
  return (
    <section>
      <h2 className={styles.title}>По категориям</h2>
      <div className={styles.categories}>
        <a className={styles.clothes} href="/catalog/?category=clothes">
          <p className={`${styles.name} btn`}>Одежда</p>
        </a>
        <a className={styles.dishes} href="/catalog/?category=dishes">
          <p className={`${styles.name} btn`}>Посуда</p>
        </a>
        <a className={styles.souvenirs} href="/catalog/?category=souvenirs">
          <p className={`${styles.name} btn`}>Сувениры</p>
        </a>
      </div>
    </section>
  );
}
