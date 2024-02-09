import styles from "./Tooltip.module.scss";
import classNames from "classnames";
import { FC, useEffect, useState } from "react";

type TooltipProps = {
  isError?: boolean;
  isSuccess?: boolean;
  isOpen: boolean;
  text: string;
};

const Tooltip: FC<TooltipProps> = ({ isError, isSuccess, text, isOpen }) => {
  const [tooltipOpen, setTooltipOpen] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setTooltipOpen(false);
      }, 3000);
    }
  }, [tooltipOpen]);

  return (
    <div
      className={classNames(styles.tooltip, {
        [styles.tooltip__success]: isSuccess,
        [styles.tooltip__error]: isError,
        [styles.tooltip__open]: tooltipOpen,
      })}
    >
      {text}
    </div>
  );
};

export default Tooltip;
