import { FC } from "react";
import classNames from "classnames";
import styles from "./Select.module.scss";

type Options = {
  value: string;
  text: string;
};

type Select = {
  options: Options[];
  className?: string;
  value: string;
  setValue: Function;
};

const Select: FC<Select> = ({ options, className, value, setValue }) => {
  return (
    <div className={classNames(styles.select, className || "")}>
      <select
        name=""
        id=""
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        {options.map((item) => (
          <option key={item.text} value={item.value}>
            {item.text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
