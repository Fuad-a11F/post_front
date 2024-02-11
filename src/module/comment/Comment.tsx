import { useParams } from "react-router-dom";

import CreateComment from "./component/createComment/CreateComment";
import CommentItem from "./component/commentItem/CommentItem";
import styles from "./Comment.module.scss";
import { useGetCommentsQuery } from "./api/commentApi";
import Spinner from "../../ui/spinner/Spinner";
import Divider from "../../ui/divider/Divider";

const Comment = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetCommentsQuery(id);

  if (isLoading) {
    return (
      <div className={styles.spinner}>
        <Spinner />
      </div>
    );
  }

  return (
    <div>
      <CreateComment />

      <Divider />

      {data.length === 0 && <div>Комментариев нет</div>}

      <div>
        {[...data].reverse().map((item) => (
          <CommentItem key={item.id} comment={item} />
        ))}
      </div>
    </div>
  );
};

export default Comment;
