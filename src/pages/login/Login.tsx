import LoginForm from "../../module/auth/loginForm/LoginForm";
import styles from "./Login.module.scss";
import useDocumentTitle from "../../shared/hook/useDocumentTitle";

const Login = () => {
  useDocumentTitle("Логин");

  return (
    <div className={styles.login}>
      <LoginForm />
    </div>
  );
};

export default Login;
