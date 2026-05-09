import {useNavigate} from 'react-router-dom';
import {useCardNumbers} from './useCardNumbers';
import {useCompanySelect} from './useCompanySelect';
import {useExpiryDate} from './useExpiryDate';
import {useCvcNumber} from './useCvcNumber';
import {CARD_COMPANIES} from '../domain/cardCompany';

export function useCardRegisterForm() {
  const numberField = useCardNumbers();
  const companyField = useCompanySelect();
  const expiryField = useExpiryDate();
  const cvcField = useCvcNumber();
  const navigate = useNavigate();

  const showCompanySelect = numberField.isComplete;
  const showExpiry = showCompanySelect && companyField.isComplete;
  const showCvc = showExpiry && expiryField.isComplete;

  const isFormComplete =
    numberField.isComplete &&
    companyField.isComplete &&
    expiryField.isComplete &&
    cvcField.isComplete;

  const handleSubmit = () => {
    navigate('/complete', {
      state: {
        cardPrefix: numberField.cardNumbers[0],
        companyName: companyField.selectedCompany ? CARD_COMPANIES[companyField.selectedCompany].name : '',
      },
    });
  };

  return {
    numberField,
    companyField,
    expiryField,
    cvcField,
    showCompanySelect,
    showExpiry,
    showCvc,
    isFormComplete,
    handleSubmit,
  };
}
