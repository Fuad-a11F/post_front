import { FC } from "react";
import styles from "./LikeButton.module.scss";
import Like from "../../ui/icons/like/Like";
import { useLikeIncrementMutation } from "../../store/api/postApi";
import { Post } from "../../shared/models/post";

type LikeButtonProps = {
  post: Post;
};

const LikeButton: FC<LikeButtonProps> = ({ post }) => {
  const [likeIncrement] = useLikeIncrementMutation();
  const idAUthUser = +localStorage.getItem("idAuthUser");

  const handleClickLike = () => {
    likeIncrement(post.id);
  };

  return (
    <div>
      {post.personsLiked.includes(idAUthUser) && (
        <div className={styles.like}>
          <Like /> ({post.like})
        </div>
      )}

      {!post.personsLiked.includes(idAUthUser) && (
        <div className={styles.no_like} onClick={handleClickLike}>
          <Like /> ({post.like})
        </div>
      )}
    </div>
  );
};

export default LikeButton;
