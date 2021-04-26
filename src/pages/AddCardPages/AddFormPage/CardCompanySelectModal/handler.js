export const handleCardCompanySelect = ({ e, setCardCompany, setIsModalOpen }) => {
  const name = e.target.name;
  const color = e.target.style.backgroundColor;

  setCardCompany({ name, color });
  setIsModalOpen(false);
};
