import { useLocation } from 'react-router-dom';
import { cardCompanyOptions } from '../constants/cardCompanyOptions';

export function RegistrationComplete() {
  const location = useLocation();
  const { firstDigits, cardCompany } = location.state || {};
  const cardCompanyLabel = cardCompanyOptions.find((option) => option.value === cardCompany)?.label;

  return (
    <div>
      {firstDigits}
      {cardCompanyLabel}
    </div>
  );
}
