import CardPreview from '../components/cardPreview/CardPreview';
import CardNumberSection from '../components/cardNumberSection/CardNumberSection';
import ExpirationDateSection from '../components/expirationDateSection/ExpirationDateSection';
import CvcSection from '../components/cvcSection/CvcSection';
import CardCompanySection from '../components/cardCompanySection/CardCompanySection';
import PasswordSection from '../components/passwordSection/PasswordSection';
import { useNavigate } from 'react-router-dom';
import { FormLayout, SubmitButton } from './CardAddPage.styles';
import { useCardForm } from './useCardForm';

const CardAddPage = () => {
  const navigate = useNavigate();
  const { formState, setters, validation } = useCardForm();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validation.isFormValid) return;
    // 라우팅 페이지 연결
    navigate('/card-add-success', {
      state: formState,
    });
  };

  return (
    <>
      <CardPreview
        cardNumber={formState.cardNumber}
        expirationDate={formState.expirationDate}
        cardCompany={formState.cardCompany}
      />
      <FormLayout onSubmit={handleSubmit}>
        {validation.maxStep >= 5 && (
          <PasswordSection value={formState.password} setValue={setters.setPassword} />
        )}
        {validation.maxStep >= 4 && <CvcSection value={formState.cvc} setValue={setters.setCvc} />}
        {validation.maxStep >= 3 && (
          <ExpirationDateSection
            value={formState.expirationDate}
            setValue={setters.setExpirationDate}
          />
        )}
        {validation.maxStep >= 2 && (
          <CardCompanySection value={formState.cardCompany} setValue={setters.setCardCompany} />
        )}
        <CardNumberSection value={formState.cardNumber} setValue={setters.setCardNumber} />

        {validation.isFormValid && <SubmitButton type="submit">확인</SubmitButton>}
      </FormLayout>
    </>
  );
};

export default CardAddPage;
