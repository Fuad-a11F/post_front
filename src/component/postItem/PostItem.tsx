import { FC } from "react";

import styles from "./PostItem.module.scss";
import CustomLink from "../../ui/customLink/CustomLink";
import { Post } from "../../shared/models/post";
import noImage from "./assets/noImage.jpg";
import LikeButton from "../likeButton/LikeButton";

type PostItemProps = {
  post: Post;
};

const PostItem: FC<PostItemProps> = ({ post }) => {
  return (
    <div className={styles.item}>
      <div>
        <div className={styles.item__img}>
          <img src={post.picture || noImage} alt="post_image" />
        </div>

        <p className={styles.item__title}>{post.title}</p>

        <p className={styles.item__text}>{post.text}</p>
      </div>

      <div>
        <div>
          <p className={styles.item__time}>Автор: {post.author}</p>

          <p className={styles.item__time}>{post.time}</p>
        </div>

        <div className={styles.item__row}>
          <CustomLink text={"Читать всю"} link={`/post/${post.id}`} />

          <LikeButton post={post} />
        </div>
      </div>
    </div>
  );
};

export default PostItem;
