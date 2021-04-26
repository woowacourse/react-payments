export const handleCardCompanySelect = ({ e, setCardCompany, setIsModalOpen }) => {
  const name = e.target.name;
  const color = e.target.style.backgroundColor;

  setCardCompany({ name, color });
  setIsModalOpen(false);
};

export const handleDimmedAreaClick = ({ e, setIsModalOpen }) => {
  const Modal = e.currentTarget;
  const ModalViewPort = Modal.firstChild;

  if (e.target === Modal || e.target === ModalViewPort) {
    setIsModalOpen(false);
  }
};
