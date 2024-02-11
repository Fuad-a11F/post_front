import { FC, ReactNode } from "react";
import classNames from "classnames";

import styles from "./ModalWrapper.module.scss";
import Button from "../button/Button";

export type ModalWrapperTypes = {
  hideModal: () => void;
  isModalOpened: boolean;
  children: ReactNode;
};

const ModalWrapper: FC<ModalWrapperTypes> = ({
  children,
  hideModal,
  isModalOpened,
}) => {
  return (
    <div
      className={classNames(styles.modal, {
        [styles.visible]: isModalOpened,
      })}
    >
      <div
        className={classNames(styles.modal__wrapper, {
          [styles.visible]: isModalOpened,
        })}
      >
        <Button className={styles.btn_close} onClick={hideModal} text={"Х"} />
        {children}
      </div>
    </div>
  );
};

export default ModalWrapper;
