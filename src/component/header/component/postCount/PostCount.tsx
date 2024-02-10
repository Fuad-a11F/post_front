import { useAppSelector } from "../../../../shared/hook/redux";
import { getPostsSelector } from "../../../../store/selectors";

const PostCount = () => {
  const posts = useAppSelector(getPostsSelector);

  return <div>Общее кол-во постов: {posts.post.length}</div>;
};

export default PostCount;
