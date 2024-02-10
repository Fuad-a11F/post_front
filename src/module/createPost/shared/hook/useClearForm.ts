import { useEffect } from "react";

const useClearForm = (isModalOpened: boolean, reset: Function) => {
  useEffect(() => {
    if (!isModalOpened) {
      reset();
    }
  }, [isModalOpened]);
};

export default useClearForm;
