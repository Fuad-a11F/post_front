import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import styles from "./RegisterForm.module.scss";
import Input from "../../../ui/input/Input";
import Button from "../../../ui/button/Button";
import CustomLink from "../../../ui/customLink/CustomLink";
import { useRegistrationMutation } from "../api/authApi";
import { toggleTooltip } from "../../../store/slice/tooltipSlice";
import { useAppDispatch } from "../../../shared/hook/redux";
import { isAuth } from "../../../store/slice/authSlice";
import ErrorText from "../../../ui/errorText/ErrorText";
import {
  emailValidate,
  passwordValidate,
  usernameValidate,
} from "../../../shared/validate/validate";
import { generatePassword } from "./helper/generatePassword";
import InputPassword from "../component/inputPassword/InputPassword";

type FormValues = {
  username: string;
  email: string;
  password: string;
};

const RegisterForm = () => {
  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const [registration, { isLoading }] = useRegistrationMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
    const response = await registration(data);

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
          message: "Вы успешно зарегистрировались и вошли в систему",
          isSuccess: true,
          isError: false,
          isWarning: false,
        }),
      );
    }
  };

  const onGeneratePassword = () => {
    const password = generatePassword();

    setValue("password", password);
  };

  return (
    <div>
      <h2>Регистрация</h2>

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
          name="email"
          rules={emailValidate}
          render={({ field: { onChange, value } }) => (
            <div>
              <Input
                value={value}
                setValue={onChange}
                isLoading={isLoading}
                placeholder={"Email"}
              />

              <ErrorText text={errors?.email?.message} />
            </div>
          )}
        />

        <Controller
          control={control}
          name="password"
          rules={passwordValidate}
          render={({ field: { onChange, value } }) => (
            <div>
              <div className={styles.form__password}>
                <InputPassword
                  value={value}
                  setValue={onChange}
                  isLoading={isLoading}
                  placeholder={"Пароль"}
                />

                <Button
                  type={"button"}
                  text={"Сгенерировать пароль"}
                  onClick={onGeneratePassword}
                />
              </div>

              <ErrorText text={errors?.password?.message} />
            </div>
          )}
        />

        <Button text={"Войти"} isLoading={isLoading} />
      </form>

      <p className={styles.login}>
        Если уже есть аккаунт <CustomLink text={"войдите"} link={"/login"} />
      </p>
    </div>
  );
};

export default RegisterForm;
