import { useDeletePostMutation } from "../../api/createPostApi";
import Button from "../../../../ui/button/Button";
import { FC } from "react";

type AdditionButtonProps = {
  id: number;
};

const AdditionButton: FC<AdditionButtonProps> = ({ id }) => {
  const [deleteTrigger] = useDeletePostMutation();

  const handleDelete = () => {
    deleteTrigger(id);
  };

  return (
    <>
      <Button text={"Удалить статью"} onClick={handleDelete} />
    </>
  );
};

export default AdditionButton;
