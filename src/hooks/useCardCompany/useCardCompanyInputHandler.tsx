import { CardCompanyType } from "./useCardCompanyState";

export default function useCardCompanyInputHandler(
  selectCompany: (company: CardCompanyType) => void,
  toggleDropdown: () => void,
  onComplete: () => void
) {
  const handleSelect = (company: CardCompanyType) => {
    selectCompany(company);
    toggleDropdown();
    onComplete();
  };

  return {
    handleSelect,
  };
}
