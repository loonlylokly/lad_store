import List from "@/component/Lists/List/List";
import FilterCard from "@/component/Cards/FilterCard/FilterCard";
import BtnFilter from "@/component/Buttons/BtnFilter/BtnFilter";
import styles from "./Filter.module.css";
import FilterForm from "@/component/Forms/FilterForm/FilterForm";

const list = ['Все', 'Футболки', 'Посуда', 'Кружки', 'Блокноты', 'Ручки', 'Кепки']

export default function Filter() {
  return (
    <>
      <div className={styles.filter}>
        <BtnFilter />
        <List
          classNameList={styles.filterList}
          items={list}
          renderItem={(filterName: string) => (
            <FilterCard name={filterName} />
          )}
        />
      </div>
      <FilterForm />
    </>
  )
}