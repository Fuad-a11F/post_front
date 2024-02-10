import styles from "./RegisterForm.module.scss";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Input from "../../../ui/input/Input";
import Button from "../../../ui/button/Button";
import CustomLink from "../../../ui/customLink/CustomLink";

type FormValues = {
  username: string;
  email: string;
  password: string;
};

const RegisterForm = () => {
  const { control, handleSubmit, setValue, reset } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
    console.log(data);
  };

  return (
    <div>
      <h2>Регистрация</h2>

      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="username"
          render={({ field: { onChange, value } }) => (
            <Input value={value} setValue={onChange} placeholder={"Логин"} />
          )}
        />

        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <Input value={value} setValue={onChange} placeholder={"Email"} />
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
            <Input
              value={value}
              setValue={onChange}
              type={"password"}
              placeholder={"Пароль"}
            />
          )}
        />

        <Button text={"Войти"} />
      </form>

      <p className={styles.login}>
        Если уже есть аккаунт <CustomLink text={"войдите"} link={"/login"} />
      </p>
    </div>
  );
};

export default RegisterForm;
