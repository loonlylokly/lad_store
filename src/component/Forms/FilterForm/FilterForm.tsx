"use client"

import { useAppSelector } from "@/store/hooks/redux";
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
      <label id="checkbox-name">Наличие</label>
      <input
        id="available"
        name="available"
        type="checkbox"
        checked />
    </form>
  )
}
