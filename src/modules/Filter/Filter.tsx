'use client';

import List from '@/component/Lists/List/List';
import FilterCard from '@/component/Cards/FilterCard/FilterCard';
import BtnFilter from '@/component/Buttons/BtnFilter/BtnFilter';
import styles from './Filter.module.css';
import FilterForm from '@/component/Forms/FilterForm/FilterForm';
import { categoryApi } from '@/store/api/categoryApi';
import CategoryCardType from '@/types/CategoryCardType';

export default function Filter() {
  const { data: category, isLoading } =
    categoryApi.useFetchAllCategoryQuery('');
  const list = category?.categories || [];
  return (
    <>
      <div className={styles.filter}>
        <BtnFilter />
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <List
            classNameList={styles.filterList}
            items={list}
            renderItem={(item: CategoryCardType) => (
              <FilterCard
                key={item._id}
                name={item.name}
                category={item.category}
              />
            )}
          />
        )}
      </div>
      <FilterForm />
    </>
  );
}
