import styles from "./Input.module.scss";
import { FC } from "react";
import classNames from "classnames";

type InputProps = {
  value: string;
  type?: string;
  className?: string;
  placeholder?: string;
  setValue: Function;
  disabled?: boolean;
  isLoading?: boolean;
};

const Input: FC<InputProps> = ({
  value,
  setValue,
  isLoading,
  className,
  type = "text",
  ...rest
}) => {
  return (
    <div className={classNames(styles.input, className || "")}>
      <input
        type={type}
        value={value}
        disabled={isLoading}
        onChange={(e) => setValue(e.target.value)}
        {...rest}
      />
    </div>
  );
};

export default Input;
