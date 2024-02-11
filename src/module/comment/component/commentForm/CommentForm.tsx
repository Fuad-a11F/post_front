import {
  Control,
  Controller,
  DeepMap,
  FieldError,
  SubmitHandler,
} from "react-hook-form";
import { FC } from "react";

import styles from "./CommentForm.module.scss";
import { requiredFieldValidate } from "../../../../shared/validate/validate";
import Textarea from "../../../../ui/textarea/Textarea";
import ErrorText from "../../../../ui/errorText/ErrorText";
import Button from "../../../../ui/button/Button";

type FormValues = {
  comment: any;
  postId: number;
  commentId: number;
};

type CommentFormProps = {
  control: Control;
  handleSubmit: SubmitHandler<FormValues>;
  onSubmit: (data: FormValues) => void;
  errors: DeepMap<FormValues, FieldError>;
};

const CommentForm: FC<CommentFormProps> = ({
  control,
  handleSubmit,
  onSubmit,
  errors,
}) => {
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="comment"
        rules={requiredFieldValidate}
        render={({ field: { value, onChange } }) => (
          <div>
            <Textarea
              value={value}
              setValue={onChange}
              placeholder={"Комментарий"}
            />

            <ErrorText text={errors?.comment?.message} />
          </div>
        )}
      />

      <Button text={"Отправить"} />
    </form>
  );
};

export default CommentForm;
