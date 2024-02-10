import Header from "../../component/header/Header";
import Filter from "../../component/filter/Filter";
import PostsWrapper from "../../module/postsWrapper/PostsWrapper";

const Post = () => {
  return (
    <div>
      <header>
        <Header />
      </header>

      <main>
        <Filter />

        <PostsWrapper />
      </main>
    </div>
  );
};

export default Post;
