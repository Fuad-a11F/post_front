import LoginForm from "../../module/auth/loginForm/LoginForm";
import styles from "./Login.module.scss";

const Login = () => {
  return (
    <div className={styles.login}>
      <LoginForm />
    </div>
  );
};

export default Login;
