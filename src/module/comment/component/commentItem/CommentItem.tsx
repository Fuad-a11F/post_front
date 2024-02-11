import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";

import avatar from "./assets/avatar.jpg";
import styles from "./CommentItem.module.scss";
import { useGetUsernameQuery } from "../../../../store/api/userApi";
import { useUpdateCommentMutation } from "../../api/commentApi";
import CommentForm from "../commentForm/CommentForm";
import AdditionButton from "./component/additionButton/AdditionButton";
import { Comment } from "../../../../shared/models/comment";

type CommentItemProps = {
  comment: Comment;
};

type FormValues = {
  comment: string;
  postId: number;
  commentId: number;
};

const CommentItem: FC<CommentItemProps> = ({ comment }) => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>();
  const { id } = useParams();
  const { data: username } = useGetUsernameQuery();
  const [commentUpdate] = useUpdateCommentMutation();

  const [isEditMode, setIsEditMode] = useState(false);
  const ifCouldHaveAdminButton =
    comment?.author?.toString() === username?.username.toString() &&
    !isEditMode;

  useEffect(() => {
    setValue("comment", comment.comment);
  }, []);

  const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
    data.postId = id;
    data.commentId = comment.id;

    await commentUpdate({ data, id: comment.id });

    setIsEditMode(false);
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

          {ifCouldHaveAdminButton && (
            <AdditionButton
              id={id}
              setIsEditMode={setIsEditMode}
              commentId={comment.id}
            />
          )}
        </div>

        {!isEditMode && <p>{comment.comment}</p>}

        {isEditMode && (
          <CommentForm
            onSubmit={onSubmit}
            handleSubmit={handleSubmit}
            control={control}
            errors={errors}
          />
        )}
      </div>
    </div>
  );
};

export default CommentItem;
