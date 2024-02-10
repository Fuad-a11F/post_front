import CreateComment from "./component/createComment/CreateComment";
import CommentItem from "./component/commentItem/CommentItem";
import styles from "./Comment.module.scss";

const Comment = () => {
  return (
    <div>
      <CreateComment />

      <div className={styles.hr}>
        <hr />
      </div>

      <div>
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
      </div>
    </div>
  );
};

export default Comment;
