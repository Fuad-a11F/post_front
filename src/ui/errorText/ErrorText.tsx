import { FC } from "react";
import styles from "./ErrorText.module.scss";

type ErrorTextProps = {
  text: string;
};

const ErrorText: FC<ErrorTextProps> = ({ text }) => {
  return <span className={styles.error}>{text}</span>;
};

export default ErrorText;
