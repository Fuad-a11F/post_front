import { useParams } from "react-router-dom";
import moment from "moment";

import { SubmitHandler, useForm } from "react-hook-form";
import { toggleTooltip } from "../../../../store/slice/tooltipSlice";
import { useCreateCommentMutation } from "../../api/commentApi";
import { useAppDispatch } from "../../../../shared/hook/redux";
import { useGetUsernameQuery } from "../../../../store/api/userApi";
import CommentForm from "../commentForm/CommentForm";

type FormValues = {
  comment: string;
  time: string;
  postId: string;
  author: string;
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
  const { data: username } = useGetUsernameQuery(id);
  const [createTrigger] = useCreateCommentMutation();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
    data.time = moment().format("YYYY-MM-DD HH:mm:ss");
    data.author = username;

    await createTrigger({ data, id });

    reset();

    dispatch(
      toggleTooltip({
        isOpen: true,
        message: "Комментарий добавлен",
        isSuccess: true,
        isError: false,
        isWarning: false,
      }),
    );
  };

  return (
    <div>
      <h3>Оставить комментарий</h3>

      <CommentForm
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
        control={control}
        errors={errors}
      />
    </div>
  );
};

export default CreateComment;
