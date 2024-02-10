import { useNavigate } from "react-router-dom";

import Button from "../../../../ui/button/Button";
import styles from "./Profile.module.scss";

const Profile = () => {
  const navigate = useNavigate();

  const logout = () => {
    navigate("/login");
  };

  return (
    <div className={styles.row}>
      <div>username</div>

      <Button text={"Выйти"} onClick={logout} />
    </div>
  );
};

export default Profile;
