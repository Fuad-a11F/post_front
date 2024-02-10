import RegisterForm from "../../module/auth/registerForm/RegisterForm";
import styles from "./Registration.module.scss";

const Registration = () => {
  return (
    <div className={styles.registration}>
      <RegisterForm />
    </div>
  );
};

export default Registration;
