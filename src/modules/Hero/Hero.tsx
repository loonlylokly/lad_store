import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.section}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Прикид для входа в IT</h1>
        <p className={styles.description}>
          Совмещаем технологии и стиль в нашем диджитал мерче. Предлагаем вам
          эксклюзивные товары, которые позволят вам выразить свою страсть к миру
          информационных технологий.
        </p>
        <button className={`${styles.ctaBtn} btn btnSecondary`}>
          Заказать
        </button>
      </div>
    </section>
  );
}
