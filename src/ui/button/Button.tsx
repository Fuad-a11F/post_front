import { FC } from "react";
import classNames from "classnames";
import styles from "./Button.module.scss";

type ButtonProps = {
  className?: string;
  text: string;
  isLoading?: boolean;
};

const Button: FC<ButtonProps> = ({ text, className, isLoading, ...rest }) => {
  return (
    <button
      className={classNames(styles.button, className || "")}
      disabled={isLoading}
      {...rest}
    >
      {text}
    </button>
  );
};

export default Button;
