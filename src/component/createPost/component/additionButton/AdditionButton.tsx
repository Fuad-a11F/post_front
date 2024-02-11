import { FC } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../../../ui/button/Button";
import { useDeletePostMutation } from "../../../../store/api/postApi";

type AdditionButtonProps = {
  id: number;
};

const AdditionButton: FC<AdditionButtonProps> = ({ id }) => {
  const [deleteTrigger] = useDeletePostMutation();
  const navigate = useNavigate();

  const handleDelete = async () => {
    await deleteTrigger(id);
    navigate("/");
  };

  return <Button text={"Удалить статью"} onClick={handleDelete} />;
};

export default AdditionButton;
