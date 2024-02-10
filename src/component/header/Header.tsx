import styles from "./Header.module.scss";
import PostCount from "./component/postCount/PostCount";
import AddNewPost from "./component/addNewPost/AddNewPost";
import { useModal } from "../../shared/hook/useModal";
import CreatePostModal from "../../module/createPost/CreatePostModal";

const Header = () => {
  const { hideModal, isModalOpened, openModal } = useModal();

  return (
    <>
      <div className={styles.header}>
        <PostCount />

        <AddNewPost openModal={openModal} />
      </div>

      <CreatePostModal isModalOpened={isModalOpened} hideModal={hideModal} />
    </>
  );
};

export default Header;
