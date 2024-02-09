import styles from "./Textarea.module.scss";
import { FC } from "react";
import classNames from "classnames";

type TextareaProps = {
  value: string;
  className?: string;
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
