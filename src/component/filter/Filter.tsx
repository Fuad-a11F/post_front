import styles from "./Filter.module.scss";
import Input from "../../ui/input/Input";
import Select from "../../ui/select/Select";

const Filter = () => {
  return (
    <div>
      <h3>Фильтры</h3>

      <div className={styles.row}>
        <div>
          <Input value={""} placeholder={"Поиск"} setValue={() => {}} />
        </div>

        <div>
          <Select
            options={[
              { value: "new", text: "Сначала новые" },
              { value: "old", text: "Сначала старые" },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
