import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CardholderNameContainer from '../components/CardholderNameContainer';
import CardExpiryDateContainer from '../components/CardExpiryDateContainer';
import CardNumberContainer from '../components/CardNumbersContainer';
import CardPreview from '../components/cardPreview/CardPreview';
import CardCompanyContainer from '../components/CardCompanyContainer';
import CardCVCContainer from '../components/CardCVCContainer';
import CardPasswordContainer from '../components/CardPasswordContainer';
import SubmitButton from '../components/SubmitButton';
import useCardInfo from '../hooks/useCardInfo';
import useFormValidation from '../hooks/useForm/useFormValidation';

const CardRegisterPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/register', { state: { cardNumber: cardNumberInfo.value.first, cardCompany: cardCompanyInfo.value } });
  };

  const { cardNumberInfo, cardCompanyInfo, expiryDateInfo, cardholderNameInfo, cardCVCInfo, cardPasswordInfo } =
    useCardInfo();

  const { validationStatus, isCardFormValid } = useFormValidation({
    cardNumberInfo,
    cardCompanyInfo,
    expiryDateInfo,
    cardholderNameInfo,
    cardCVCInfo,
    cardPasswordInfo,
  });

  const { cardNumberForm, cardCompanyForm, expiryDateForm, cardholderNameForm, cvcForm } = validationStatus;

  return (
    <AppLayout>
      <CardPreview
        cardNumbers={cardNumberInfo.value}
        expiryDate={{ month: expiryDateInfo.month.value, year: expiryDateInfo.year.value }}
        cardholderName={cardholderNameInfo.value}
        cardType={cardCompanyInfo.value}
        cvc={cardCVCInfo.value}
        isCardFront={cardCVCInfo.isCardFront}
      />
      <CardInfoWrapper>
        {(cvcForm.isValid || cvcForm.isOpen) && (
          <CardPasswordContainer password={cardPasswordInfo.value} {...cardPasswordInfo} />
        )}
        {(cardholderNameForm.isValid || cardholderNameForm.isOpen) && (
          <CardCVCContainer cvc={cardCVCInfo.value} {...cardCVCInfo} />
        )}
        {(expiryDateForm.isValid || expiryDateForm.isOpen) && (
          <CardholderNameContainer cardholderName={cardholderNameInfo.value} {...cardholderNameInfo} />
        )}
        {(cardCompanyForm.isValid || cardCompanyForm.isOpen) && <CardExpiryDateContainer {...expiryDateInfo} />}
        {(cardNumberForm.isValid || cardNumberForm.isOpen) && (
          <CardCompanyContainer cardCompany={cardCompanyInfo.value} {...cardCompanyInfo} />
        )}
        <CardNumberContainer cardNumbers={cardNumberInfo.value} {...cardNumberInfo} />
      </CardInfoWrapper>
      {isCardFormValid && <SubmitButton onClick={handleClick}>확인</SubmitButton>}
    </AppLayout>
  );
};

const AppLayout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
  height: 100vh;
`;

const CardInfoWrapper = styled.section`
  margin-top: 50px;
  overflow: auto;
  height: calc(100vh - 310px);
`;

export default CardRegisterPage;
