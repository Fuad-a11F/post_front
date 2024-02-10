import CreateComment from "./component/createComment/CreateComment";
import CommentItem from "./component/commentItem/CommentItem";
import styles from "./Comment.module.scss";
import { useGetCommentsQuery } from "./api/commentApi";

const Comment = () => {
  const { data } = useGetCommentsQuery();

  return (
    <div>
      <CreateComment />

      <div className={styles.hr}>
        <hr />
      </div>

      {/*<div>{data?.map((item) => <CommentItem comment={item} />)}</div>*/}

      <div>
        <CommentItem
          comment={{
            author: "123",
            comment: "324234234 dfs as",
            time: "324234234",
          }}
        />
      </div>
    </div>
  );
};

export default Comment;
