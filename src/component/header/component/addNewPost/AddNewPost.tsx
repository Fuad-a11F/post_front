import { FC } from "react";
import Button from "../../../../ui/button/Button";

type AddNewPostProps = {
  openModal: () => void;
};

const AddNewPost: FC<AddNewPostProps> = ({ openModal }) => {
  return (
    <div>
      <Button text={"Создать пост"} onClick={openModal} />
    </div>
  );
};

export default AddNewPost;
