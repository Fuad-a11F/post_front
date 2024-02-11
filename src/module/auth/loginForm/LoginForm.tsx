import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import styles from "./LoginForm.module.scss";
import Input from "../../../ui/input/Input";
import Button from "../../../ui/button/Button";
import CustomLink from "../../../ui/customLink/CustomLink";
import { useLoginMutation } from "../api/authApi";
import { useAppDispatch } from "../../../shared/hook/redux";
import ErrorText from "../../../ui/errorText/ErrorText";
import { toggleTooltip } from "../../../store/slice/tooltipSlice";
import { isAuth } from "../../../store/slice/authSlice";
import {
  passwordValidate,
  usernameValidate,
} from "../../../shared/validate/validate";
import InputPassword from "../component/inputPassword/InputPassword";

type FormValues = {
  username: string;
  password: string;
};

const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const [loginTrigger, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
    const response = await loginTrigger(data);

    if (response.data.hasOwnProperty("message")) {
      dispatch(
        toggleTooltip({
          isOpen: true,
          message: response.data.message,
          isSuccess: false,
          isError: true,
          isWarning: false,
        }),
      );
    } else {
      localStorage.setItem("idAuthUser", response.data.id);
      navigate("/");

      dispatch(isAuth());

      dispatch(
        toggleTooltip({
          isOpen: true,
          message: "Вы успешно вошли в систему",
          isSuccess: true,
          isError: false,
          isWarning: false,
        }),
      );
    }
  };

  return (
    <div>
      <h2>Логин</h2>

      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="username"
          rules={usernameValidate}
          render={({ field: { onChange, value } }) => (
            <div>
              <Input
                value={value}
                setValue={onChange}
                isLoading={isLoading}
                placeholder={"Логин"}
              />

              <ErrorText text={errors?.username?.message} />
            </div>
          )}
        />

        <Controller
          control={control}
          name="password"
          rules={passwordValidate}
          render={({ field: { onChange, value } }) => (
            <div>
              <InputPassword
                value={value}
                setValue={onChange}
                isLoading={isLoading}
                placeholder={"Пароль"}
              />

              <ErrorText text={errors?.password?.message} />
            </div>
          )}
        />

        <Button isLoading={isLoading} text={"Войти"} />
      </form>

      <p className={styles.register}>
        Если еще нет аккаунта{" "}
        <CustomLink text={"зарегистрируйтесь"} link={"/registration"} />
      </p>
    </div>
  );
};

export default LoginForm;
