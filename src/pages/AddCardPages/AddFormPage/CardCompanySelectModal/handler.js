export const handleCardCompanySelect = ({ e, setCardInfo, setIsModalOpen }) => {
  const name = e.target.name;
  const color = e.target.style.backgroundColor;

  setCardInfo((prevState) => ({ ...prevState, company: { name, color } }));
  setIsModalOpen(false);
};

export const handleDimmedAreaClick = ({ e, setIsModalOpen }) => {
  const Modal = e.currentTarget;
  const ModalViewPort = Modal.firstChild;

  if (e.target === Modal || e.target === ModalViewPort) {
    setIsModalOpen(false);
  }
};
