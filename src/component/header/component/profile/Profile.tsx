import { useNavigate } from "react-router-dom";

import Button from "../../../../ui/button/Button";
import styles from "./Profile.module.scss";
import { useGetUsernameQuery } from "../../../../store/api/userApi";
import { useAppDispatch } from "../../../../shared/hook/redux";
import { isNotAuth } from "../../../../store/slice/authSlice";

const Profile = () => {
  const navigate = useNavigate();
  const { data } = useGetUsernameQuery();

  const dispatch = useAppDispatch();

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("idAuthUser");
    dispatch(isNotAuth());
    window.location.reload();
  };

  return (
    <div className={styles.row}>
      <div>{data?.username}</div>

      <Button text={"Выйти"} onClick={logout} />
    </div>
  );
};

export default Profile;
