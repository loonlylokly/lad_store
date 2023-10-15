import { useAppDispatch } from "@/store/store";
import styles from "./FilterCard.module.css";
import { filterSlice } from "@/store/reducers/FilterSlice";

export default function FilterCard({ name, category }: { name: string, category: string }) {
  const dispatch = useAppDispatch();
  const changeCategory = filterSlice.actions.changeCategory;
  
  return (
    <button className={styles.filter} onClick={ ()=>dispatch(changeCategory(category)) }>{name}</button>
  )
}