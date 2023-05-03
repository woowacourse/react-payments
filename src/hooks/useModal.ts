import { useContext } from "react";
import { ModalStateContext } from "components/provider/ModalStateProvider";

const useModal = () => {
  const isModalOpen = useContext(ModalStateContext).isModalOpen;
  const setIsModalOpen = useContext(ModalStateContext).setIsModalOpen;

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  return { isModalOpen, handleModalClose, handleModalOpen };
};

export default useModal;
