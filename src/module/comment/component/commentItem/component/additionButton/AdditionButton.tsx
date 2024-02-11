import { FC } from "react";

import styles from "./AdditionButton.module.scss";
import Button from "../../../../../../ui/button/Button";
import { useDeleteCommentMutation } from "../../../../api/commentApi";

type AdditionButtonProps = {
  setIsEditMode: Function;
  commentId: number;
  id: string;
};

const AdditionButton: FC<AdditionButtonProps> = ({
  setIsEditMode,
  commentId,
  id,
}) => {
  const [commentDelete] = useDeleteCommentMutation();

  const handleDelete = () => {
    commentDelete({ postId: id, commentId: commentId });
  };

  return (
    <div className={styles.row}>
      <Button text={"Отредактировать"} onClick={() => setIsEditMode(true)} />

      <Button text={"Удалить"} onClick={handleDelete} />
    </div>
  );
};

export default AdditionButton;
