import { useContext } from "react";
import { ModalStateContext } from "components/provider/ModalStateProvider";

const useModal = () => {
  const setIsModalOpen = useContext(ModalStateContext).setIsModalOpen;

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  return { handleModalClose, handleModalOpen };
};

export default useModal;
