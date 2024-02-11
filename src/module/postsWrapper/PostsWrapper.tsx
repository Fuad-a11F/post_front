import { useEffect } from "react";

import PostItem from "../../component/postItem/PostItem";
import styles from "./PostsWrapper.module.scss";
import { useAppDispatch, useAppSelector } from "../../shared/hook/redux";
import { pagination, savePosts } from "../../store/slice/postSlice";
import Spinner from "../../ui/spinner/Spinner";
import { getAllPostsSelector, getPostsSelector } from "../../store/selectors";
import { useGetPostsQuery } from "../../store/api/postApi";
import Button from "../../ui/button/Button";

const PostsWrapper = () => {
  const { data, isLoading } = useGetPostsQuery();
  const posts = useAppSelector(getPostsSelector);
  const allPosts = useAppSelector(getAllPostsSelector);
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
        {posts?.map((item) => <PostItem key={item.time} post={item} />)}
      </div>

      {posts.length !== allPosts.length && (
        <Button
          text={" + Загрузить еще "}
          onClick={() => dispatch(pagination())}
        />
      )}
    </>
  );
};

export default PostsWrapper;
