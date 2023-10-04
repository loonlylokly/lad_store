"use client"

import { useAppSelector } from "@/store/store";
import styles from "./FilterForm.module.css";

export default function FilterForm() {
  const {isClose} = useAppSelector(state => state.filterReducer);

  return (
    <form className={`${styles.filterForm} ${isClose && styles.close}`}>
      <label htmlFor="sort-select">Сортировать</label>
      <select name="sort" id="sort-select">
        <option value="popular">Сначала популярные</option>
        <option value="highPrice">Сначала дорогие</option>
        <option value="lowPrice">Сначала недорогие</option>
        <option value="sale">По скидке (%)</option>
      </select>

      <label htmlFor="priceFrom">Цена</label>
      <input
        id="priceFrom"
        name="priceFrom"
        type="number"
        inputMode="numeric"
        min={0}
        max={100000}
        required />
      <input
        id="priceTo"
        name="priceFrom"
        type="number"
        inputMode="numeric"
        min={0}
        max={100000}
        required />
      <label htmlFor="available">Наличие</label>
      <input
        type="checkbox"
        id="available"
        name="available"
        value="available" />
    </form>
  )
}