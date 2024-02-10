import styles from "./Tooltip.module.scss";
import classNames from "classnames";
import { FC, useEffect, useState } from "react";
import { useAppDispatch } from "../../shared/hook/redux";
import { toggleTooltip } from "../../store/slice/tooltipSlice";

type TooltipProps = {
  isError?: boolean;
  isSuccess?: boolean;
  isOpen: boolean;
  text: string;
};

const Tooltip: FC<TooltipProps> = ({ isError, isSuccess, text, isOpen }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        dispatch(
          toggleTooltip({
            isOpen: false,
            message: "",
            isSuccess: false,
            isError: false,
          }),
        );
      }, 3000);
    }
  }, [isOpen]);

  return (
    <div
      className={classNames(styles.tooltip, {
        [styles.tooltip__success]: isSuccess,
        [styles.tooltip__error]: isError,
        [styles.tooltip__open]: isOpen,
      })}
    >
      {text}
    </div>
  );
};

export default Tooltip;
