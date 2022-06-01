import { CardCompanyType, CardThemeType } from 'types/index';

interface CardCompanyProps {
  handleCompany: (company: CardCompanyType, theme: CardThemeType) => void;
  company: CardCompanyType;
  theme: CardThemeType;
}

function CardCompany({ handleCompany, company, theme }: CardCompanyProps) {
  return (
    <div className="modal-item-container">
      <div className={`modal-item-dot bg-${theme}`} onClick={() => handleCompany(company, theme)} />
      <span className="modal-item-name">{company}</span>
    </div>
  );
}

export default CardCompany;
