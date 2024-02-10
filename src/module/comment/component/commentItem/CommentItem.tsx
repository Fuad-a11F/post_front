import { FC, useState } from "react";
import { useParams } from "react-router-dom";

import avatar from "./avatar.jpg";
import styles from "./CommentItem.module.scss";
import { useGetUsernameQuery } from "../../../../store/api/userApi";
import Button from "../../../../ui/button/Button";
import { Controller, useForm } from "react-hook-form";
import Textarea from "../../../../ui/textarea/Textarea";
import {
  useDeleteCommentMutation,
  useUpdateCommentMutation,
} from "../../api/commentApi";
import { requiredFieldValidate } from "../../../../shared/validate/validate";
import ErrorText from "../../../../ui/errorText/ErrorText";

type CommentItemProps = {
  comment: any;
};

type FormValues = {
  comment: any;
  postId: number;
  commentId: number;
};

const CommentItem: FC<CommentItemProps> = ({ comment }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: { comment: comment.comment },
  });
  const { id } = useParams();
  const { data: username } = useGetUsernameQuery(id);
  const [commentUpdate] = useUpdateCommentMutation();
  const [commentDelete] = useDeleteCommentMutation();

  const [isEditMode, setIsEditMode] = useState(false);

  const onSubmit = async (data: FormValues) => {
    data.postId = id;
    data.commentId = comment.id;

    await commentUpdate(data);

    setIsEditMode(false);
  };

  const handleDelete = () => {
    commentDelete({ postId: id, commentId: comment.id });
  };

  return (
    <div className={styles.item}>
      <div className={styles.item__img}>
        <img src={avatar} alt="avatar" />
      </div>

      <div className={styles.item__info}>
        <div className={styles.item__row}>
          <p>
            {comment.author} ({comment.time})
          </p>

          {comment.author.toString() === username?.toString() &&
            !isEditMode && (
              <div>
                <Button
                  text={"Отредактировать"}
                  onClick={() => setIsEditMode(true)}
                />
                <Button text={"Удалить"} onClick={handleDelete} />
              </div>
            )}
        </div>

        {!isEditMode && <p>{comment.comment}</p>}

        {isEditMode && (
          <form onSubmit={handleSubmit(onSubmit)}>
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

            <Button text={"Сохранить"} />
          </form>
        )}
      </div>
    </div>
  );
};

export default CommentItem;
