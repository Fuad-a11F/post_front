import { FC } from "react";
import classNames from "classnames";

import styles from "./Textarea.module.scss";

type TextareaProps = {
  value: string;
  className?: string;
  placeholder?: string;
  setValue: Function;
  isLoading?: boolean;
};

const Textarea: FC<TextareaProps> = ({
  value,
  className,
  setValue,
  isLoading,
  ...rest
}) => {
  return (
    <div className={classNames(styles.textarea, className || "")}>
      <textarea
        value={value}
        disabled={isLoading}
        onChange={(e) => setValue(e.target.value)}
        {...rest}
      ></textarea>
    </div>
  );
};

export default Textarea;
