import styles from "./Filter.module.scss";
import Input from "../../ui/input/Input";
import Select from "../../ui/select/Select";
import { useEffect, useState } from "react";
import {
  filterUpdate,
  searchPost,
  sortPost,
} from "../../store/slice/postSlice";
import { useAppDispatch, useAppSelector } from "../../shared/hook/redux";
import {
  getPostsFilterSearch,
  getPostsFilterSort,
} from "../../store/selectors";

const Filter = () => {
  const search = useAppSelector(getPostsFilterSearch);
  const sort = useAppSelector(getPostsFilterSort);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(searchPost());
  }, [search]);

  useEffect(() => {
    dispatch(sortPost());
  }, [sort]);

  const onChangeSearch = (value) => {
    dispatch(filterUpdate({ value, field: "search" }));
  };

  const onChangeSort = (value) => {
    dispatch(filterUpdate({ value, field: "sort" }));
  };

  return (
    <div>
      <h3>Фильтры</h3>

      <div className={styles.row}>
        <div>
          <Input
            value={search}
            placeholder={"Поиск"}
            setValue={onChangeSearch}
          />
        </div>

        <div>
          <Select
            value={sort}
            setValue={onChangeSort}
            options={[
              { value: "old", text: "Сначала старые" },
              { value: "new", text: "Сначала новые" },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
