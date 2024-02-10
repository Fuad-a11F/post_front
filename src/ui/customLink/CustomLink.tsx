import { Link } from "react-router-dom";
import { FC } from "react";

import styles from "./CustomLink.module.scss";

type CustomLinkProps = {
  text: string;
  link: string;
};

const CustomLink: FC<CustomLinkProps> = ({ text, link }) => {
  return (
    <div className={styles.link}>
      <Link to={link}>{text}</Link>
    </div>
  );
};

export default CustomLink;
