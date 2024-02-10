import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Button from "../../../../ui/button/Button";
import Textarea from "../../../../ui/textarea/Textarea";
import styles from "./CreateComment.module.scss";

type FormValues = {
  comment: string;
};

const CreateComment = () => {
  const { control, handleSubmit } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
    console.log(data);
  };

  return (
    <div>
      <h3>Оставить комментарий</h3>

      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="comment"
          render={({ field: { onChange, value } }) => (
            <Textarea
              value={value}
              setValue={onChange}
              type={"password"}
              placeholder={"Пароль"}
            />
          )}
        />

        <Button text={"Отправить"} />
      </form>
    </div>
  );
};

export default CreateComment;
