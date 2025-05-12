export const SelectArrow = ({ isOpen }: { isOpen: boolean }) => {
  const arrowIconSrc = isOpen ? './icon/chevron-down.png' : './icon/chevron-up.png';

  return <img src={arrowIconSrc} alt="arrow" width="16px" height="16px" />;
};
