import { useEffect } from "react";

const useClearForm = (
  isModalOpened: boolean,
  reset: Function,
  setPreview: Function,
) => {
  useEffect(() => {
    if (!isModalOpened) {
      reset();
      setPreview("");
    }
  }, [isModalOpened]);
};

export default useClearForm;
