import { useParams } from "react-router-dom";

import Comment from "../../module/comment/Comment";
import PostDetailInfo from "../../module/postDetailInfo/PostDetailInfo";
import useDocumentTitle from "../../shared/hook/useDocumentTitle";
import Layout from "../../component/layout/Layout";

const PostDetail = () => {
  const { id } = useParams();

  useDocumentTitle(`Пост №${id}`);

  return (
    <Layout>
      <PostDetailInfo />

      <Comment />
    </Layout>
  );
};

export default PostDetail;
