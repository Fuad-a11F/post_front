import styles from "./Filter.module.scss";
import Search from "./search/Search";
import Date from "./date/Date";

const Filter = () => {
  return (
    <div>
      <h3>Фильтры</h3>

      <div className={styles.row}>
        <Search />

        <Date />
      </div>
    </div>
  );
};

export default Filter;
