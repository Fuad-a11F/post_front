import { FC } from "react";

import styles from "./PostItem.module.scss";
import img from "./assets/Screenshot_8.png";
import CustomLink from "../../ui/customLink/CustomLink";

type PostItemProps = {
  text: string;
  time: any;
  title: string;
  image: string;
};

const PostItem: FC<PostItemProps> = ({ text, title, time, image }) => {
  return (
    <div className={styles.item}>
      <div>
        <div>
          <img src={img} alt="post_image" />
        </div>

        <p className={styles.item__title}>{title}</p>

        <p className={styles.item__text}>{text}</p>
      </div>

      <div>
        <p className={styles.item__time}>{time}</p>

        <div className={styles.item__row}>
          <CustomLink text={"Читать всю"} link={""} />

          <button>Лайк</button>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
