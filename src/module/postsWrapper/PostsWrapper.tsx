import { useEffect } from "react";

import PostItem from "../../component/postItem/PostItem";
import styles from "./PostsWrapper.module.scss";
import { useGetPostsQuery } from "./api/postApi";
import { useAppDispatch, useAppSelector } from "../../shared/hook/redux";
import { pagination, savePosts } from "../../store/slice/postSlice";
import Spinner from "../../ui/spinner/Spinner";
import { getPostsSelector } from "../../store/selectors";

const PostsWrapper = () => {
  const { data, isLoading } = useGetPostsQuery();
  const posts = useAppSelector(getPostsSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) {
      dispatch(savePosts(data));
    }
  }, [data]);

  if (isLoading) {
    return (
      <div className={styles.spinner}>
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <div className={styles.grid}>
        {posts?.post.map((item) => (
          <PostItem
            key={item.time}
            id={item.id}
            text={item.description}
            title={item.title}
            image={item.picture}
            time={item.time}
            author={item.author}
          />
        ))}
      </div>

      <button onClick={() => dispatch(pagination())}>87</button>
    </>
  );
};

export default PostsWrapper;
