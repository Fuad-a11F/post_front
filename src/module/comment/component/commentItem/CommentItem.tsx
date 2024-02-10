import avatar from "./avatar.jpg";
import styles from "./CommentItem.module.scss";

const CommentItem = () => {
  return (
    <div className={styles.item}>
      <div className={styles.item__img}>
        <img src={avatar} alt="avatar" />
      </div>

      <div className={styles.item__info}>
        <p>username (2134214 324 24)</p>
        <p>
          текст комменттекст комментатекст комментатекст комментатекст
          комментатекст комментатекст комментатекст комментатекст комментатекст
          комментатекст комментатекст комментатекст комментатекст комментатекст
          комментатекст комментатекст комментатекст комментатекст комментатекст
          комментатекст комментатекст комментатекст комментатекст комментатекст
          комментатекст комментатекст комментатекст комментаа
        </p>
      </div>
    </div>
  );
};

export default CommentItem;
