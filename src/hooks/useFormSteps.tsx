import { CARD_PAGE_TEXT } from '../pages/CardPage/cardPageText';
import CardNumberInput from '../components/CardNumberInput/CardNumberInput';
import Dropdown from '../components/Dropdown/Dropdown';
import ExpirationDateInput from '../components/ExpirationDateInput/ExpirationDateInput';
import CVCInput from '../components/CVCInput/CVCInput';
import PasswordInput from '../components/PasswordInput/PasswordInput';

type UseFormStepsProps = {
  cardNumber: any;
  cardCompany: any;
  expirationDate: any;
  cvc: any;
  password: any;
  handleCardCompanySelect: (value: string) => void;
};

const useFormSteps = ({
  cardNumber,
  cardCompany,
  expirationDate,
  cvc,
  password,
  handleCardCompanySelect,
}: UseFormStepsProps) => {
  return [
    {
      id: 'cardNumber',
      title: CARD_PAGE_TEXT.CARD_NUMBER_TITLE,
      subtitle: CARD_PAGE_TEXT.CARD_NUMBER_SUBTITLE,
      shouldShow: () => true,
      component: (
        <CardNumberInput
          values={cardNumber.values}
          onChange={cardNumber.handleInput}
          onValidChange={cardNumber.setIsValid}
        />
      ),
    },
    {
      id: 'cardCompany',
      title: CARD_PAGE_TEXT.CARD_COMPANY_TITLE,
      subtitle: CARD_PAGE_TEXT.CARD_COMPANY_SUBTITLE,
      shouldShow: () => cardNumber.isValid,
      component: <Dropdown selected={cardCompany.values[0]} onChange={handleCardCompanySelect} />,
    },
    {
      id: 'expirationDate',
      title: CARD_PAGE_TEXT.EXPIRATION_TITLE,
      subtitle: CARD_PAGE_TEXT.EXPIRATION_SUBTITLE,
      shouldShow: () => cardNumber.isValid && cardCompany.values[0] !== '',
      component: (
        <ExpirationDateInput
          values={expirationDate.values}
          onChange={expirationDate.handleInput}
          onValidChange={expirationDate.setIsValid}
        />
      ),
    },
    {
      id: 'cvc',
      title: CARD_PAGE_TEXT.CVC_TITLE,
      subtitle: '',
      shouldShow: () =>
        cardNumber.isValid && cardCompany.values[0] !== '' && expirationDate.isValid,
      component: (
        <CVCInput values={cvc.values} onChange={cvc.handleInput} onValidChange={cvc.setIsValid} />
      ),
    },
    {
      id: 'password',
      title: CARD_PAGE_TEXT.PASSWORD_TITLE,
      subtitle: CARD_PAGE_TEXT.PASSWORD_SUBTITLE,
      shouldShow: () =>
        cardNumber.isValid && cardCompany.values[0] !== '' && expirationDate.isValid && cvc.isValid,
      component: (
        <PasswordInput
          values={password.values}
          onChange={password.handleInput}
          onValidChange={password.setIsValid}
        />
      ),
    },
  ];
};

export default useFormSteps;
