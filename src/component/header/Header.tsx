import styles from "./Header.module.scss";
import PostCount from "./component/postCount/PostCount";
import AddNewPost from "./component/addNewPost/AddNewPost";

const Header = () => {
  return (
    <header className={styles.header}>
      <PostCount />

      <AddNewPost />
    </header>
  );
};

export default Header;
