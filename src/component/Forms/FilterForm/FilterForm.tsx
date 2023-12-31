"use client"

import { useAppDispatch, useAppSelector } from "@/store/store";
import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./FilterForm.module.css";
import { filterSlice } from "@/store/reducers/FilterSlice";

type FormProps = {
  sort: string;
  priceFrom: number;
  priceTo: number;
  availability: boolean;
};

export default function FilterForm() {
  const { isClose, filter } = useAppSelector(state => state.filterReducer);
  const changeFilters = filterSlice.actions.changeFilters;
  const dispatch = useAppDispatch();

  const {
    register,
		handleSubmit,
  } = useForm<FormProps>();

  const onSubmitForm: SubmitHandler<FormProps> = (data) => {
    dispatch(changeFilters(data));
	}

  return (
    <form
      className={`${styles.filterForm} ${isClose && styles.close}`}
      onSubmit={handleSubmit(onSubmitForm)}>
      <label htmlFor="sort-select">Сортировать</label>
      <select id="sort-select" defaultValue={filter.sort.toString()} {...register("sort")}>
        <option value="ordersDesc">Количество заказов</option>
        <option value="priceDesc">Сначала дорогие</option>
        <option value="priceAsc">Сначала недорогие</option>
        <option value="saleDesc">По скидке (%)</option>
      </select>

      <label htmlFor="priceFrom">Цена</label>
      <input
        id="priceFrom"
        type="number"
        inputMode="numeric"
        placeholder="0"
        defaultValue={filter.priceFrom}
        min={0}
        max={100000}
        maxLength={4}
        required
        {...register("priceFrom", {
          valueAsNumber: true,
        })} />
      <input
        id="priceTo"
        type="number"
        inputMode="numeric"
        placeholder="100000"
        defaultValue={filter.priceTo}
        min={0}
        max={100000}
        required
        {...register("priceTo", {
          valueAsNumber: true,
        })} />
      <label htmlFor="availability">Наличие</label>
      <input
        type="checkbox"
        id="availability"
        defaultValue="availability"
        {...register("availability")} />
      <button type="submit">Показать</button>
    </form>
  )
}
