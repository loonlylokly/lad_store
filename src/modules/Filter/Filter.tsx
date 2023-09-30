import List from "@/component/Lists/List/List";
import FilterCard from "@/component/Cards/FilterCard/FilterCard";
import styles from "./Filter.module.css";
import Image from "next/image";

const list = ['Все', 'Футболки', 'Посуда', 'Кружки', 'Блокноты', 'Ручки', 'Кепки']

export default function Filter() {
  return (
    <div className={styles.filter}>
      <div className={styles.filterBtn}>
        <Image
          className={styles.icon}
          src="/icons/filters.svg"
          alt="filters"
          width={16}
          height={16}
        />
        Фильтр
      </div>
      <List
        classNameList={styles.filterList}
        items={list}
        renderItem={(filterName: string) => (
          <FilterCard name={filterName} />
        )}
      />
    </div>
  )
}