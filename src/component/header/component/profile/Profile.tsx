import Button from "../../../../ui/button/Button";
import styles from "./Profile.module.scss";

const Profile = () => {
  return (
    <div className={styles.row}>
      <div>username</div>

      <Button text={"Выйти"} />
    </div>
  );
};

export default Profile;
