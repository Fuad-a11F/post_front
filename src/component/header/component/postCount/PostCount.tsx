import { useAppSelector } from "../../../../shared/hook/redux";
import { getAllPostsSelector } from "../../../../store/selectors";

const PostCount = () => {
  const posts = useAppSelector(getAllPostsSelector);

  return <div>Общее кол-во постов: {posts.length}</div>;
};

export default PostCount;
