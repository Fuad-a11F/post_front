import { useParams } from "react-router-dom";
import moment from "moment";

import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { toggleTooltip } from "../../../../store/slice/tooltipSlice";
import { useCreateCommentMutation } from "../../api/commentApi";
import { useAppDispatch } from "../../../../shared/hook/redux";
import Textarea from "../../../../ui/textarea/Textarea";
import Button from "../../../../ui/button/Button";
import styles from "./CreateComment.module.scss";
import ErrorText from "../../../../ui/errorText/ErrorText";
import { requiredFieldValidate } from "../../../../shared/validate/validate";

type FormValues = {
  comment: string;
  time: string;
  postId: string;
};

const CreateComment = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: { comment: "" },
  });
  const { id } = useParams();
  const [createTrigger] = useCreateCommentMutation();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
    data.postId = id;
    data.time = moment().format("YYYY-MM-DD HH:mm:ss");

    await createTrigger(data);

    reset();

    dispatch(
      toggleTooltip({
        isOpen: true,
        message: "Комментарий добавлен",
        isSuccess: true,
        isError: false,
      }),
    );
  };

  return (
    <div>
      <h3>Оставить комментарий</h3>

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
    </div>
  );
};

export default CreateComment;
