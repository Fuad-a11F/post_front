import RegisterForm from "../../module/auth/registerForm/RegisterForm";
import styles from "./Registration.module.scss";
import useDocumentTitle from "../../shared/hook/useDocumentTitle";

const Registration = () => {
  useDocumentTitle("Регистрация");

  return (
    <div className={styles.registration}>
      <RegisterForm />
    </div>
  );
};

export default Registration;
