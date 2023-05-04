import { useCallback, useState } from 'react';

type UseModalProps = {
  defaultVisible: boolean;
};

type UseModalReturnType = {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

// NOTE: ReturnType을 명시하면 useModal을 작성할 때 return 값에 대해 타입 체킹을 해줄 수 있다.
const useModal = ({ defaultVisible }: UseModalProps): UseModalReturnType => {
  const [isModalOpen, setIsModalOpen] = useState(defaultVisible);

  const openModal = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback(() => setIsModalOpen(false), []);

  return { isModalOpen, openModal, closeModal };
};

export default useModal;
