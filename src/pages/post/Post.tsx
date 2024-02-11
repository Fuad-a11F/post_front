import Filter from "../../component/filter/Filter";
import PostsWrapper from "../../module/postsWrapper/PostsWrapper";
import useDocumentTitle from "../../shared/hook/useDocumentTitle";
import Layout from "../../component/layout/Layout";

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
