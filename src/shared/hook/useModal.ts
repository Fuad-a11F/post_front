import { useCallback, useState } from "react";

export const useModal = () => {
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);

  const openModal = useCallback(() => {
    setIsModalOpened(true);
  }, []);

  const hideModal = useCallback(() => {
    setIsModalOpened(false);
  }, []);

  return { openModal, hideModal, isModalOpened };
};
