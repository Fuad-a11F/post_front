import Filter from "../../component/filter/Filter";
import useDocumentTitle from "../../shared/hook/useDocumentTitle";
import Layout from "../../component/layout/Layout";
import PostsWrapper from "../../module/postsWrapper/PostsWrapper";

const Post = () => {
  useDocumentTitle("Каталог постов");

  return (
    <Layout>
      <Filter />

      <PostsWrapper />
    </Layout>
  );
};

export default Post;
