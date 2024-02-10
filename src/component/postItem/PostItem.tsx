import { FC } from "react";

import styles from "./PostItem.module.scss";
import img from "./assets/Screenshot_8.png";
import CustomLink from "../../ui/customLink/CustomLink";

type PostItemProps = {
  id: string;
  text: string;
  time: any;
  title: string;
  image: string;
  author: string;
};

const PostItem: FC<PostItemProps> = ({
  id,
  text,
  title,
  time,
  image,
  author,
}) => {
  return (
    <div className={styles.item}>
      <div>
        <div className={styles.item__img}>
          <img src={image} alt="post_image" />
        </div>

        <p className={styles.item__title}>{title}</p>

        <p className={styles.item__text}>{text}</p>
      </div>

      <div>
        <div>
          <p className={styles.item__time}>Автор: {author}</p>
          <p className={styles.item__time}>{time}</p>
        </div>

        <div className={styles.item__row}>
          <CustomLink text={"Читать всю"} link={`/post/${id}`} />

          <button>Лайк</button>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
