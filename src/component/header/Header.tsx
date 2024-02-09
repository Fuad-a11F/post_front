import styles from "./Header.module.scss";
import PostCount from "./component/postCount/PostCount";
import AddNewPost from "./component/addNewPost/AddNewPost";

const Header = () => {
  return (
    <div className={styles.header}>
      <PostCount />

      <AddNewPost />
    </div>
  );
};

export default Header;
