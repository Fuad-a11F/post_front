import { FC } from "react";

import Button from "../../../../ui/button/Button";
import { useAppDispatch, useAppSelector } from "../../../../shared/hook/redux";
import { getPostFilter } from "../../../../store/selectors";
import { resetFilter } from "../../../../store/slice/postSlice";
import { toggleTooltip } from "../../../../store/slice/tooltipSlice";

type AddNewPostProps = {
  openModal: () => void;
};

const AddNewPost: FC<AddNewPostProps> = ({ openModal }) => {
  const filter = useAppSelector(getPostFilter);
  const dispatch = useAppDispatch();

  const handleNewPost = () => {
    if (filter.search !== "" || filter.sort !== "old") {
      dispatch(resetFilter());

      dispatch(
        toggleTooltip({
          isOpen: true,
          message: "При добавлении дового поста фильтры очищаются",
          isSuccess: false,
          isError: false,
          isWarning: true,
        }),
      );
    }

    openModal();
  };

  return (
    <div>
      <Button text={"Создать пост"} onClick={handleNewPost} />
    </div>
  );
};

export default AddNewPost;
