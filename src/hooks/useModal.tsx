import { useState, useRef } from "react";

function useModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDialogElement>(null);

  return { isModalOpen, setIsModalOpen, modalRef };
}

export default useModal;
