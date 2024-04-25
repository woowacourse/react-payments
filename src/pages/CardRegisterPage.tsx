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

  const handleClickNextPage = () => {
    navigate('/register', {
      state: { cardNumber: cardNumberInfo.value.first, cardCompany: cardCompanyInfo.value },
    });
  };

  const cardInfo = useCardInfo();
  const { validationStatus, isCardFormValid } = useFormValidation(cardInfo);
  const { ...formStatus } = validationStatus;

  const {
    cardNumberInfo,
    cardCompanyInfo,
    expiryDateInfo,
    cardholderNameInfo,
    cardCVCInfo,
    cardPasswordInfo,
  } = cardInfo;

  const validPasswordSection = formStatus.cvc.isValid || formStatus.cvc.isOpen;
  const validCVCSection = formStatus.cardholderName.isValid || formStatus.cardholderName.isOpen;
  const validCardholderNameSection =
    formStatus.cardholderName.isValid || formStatus.cardholderName.isOpen;
  const validExpiryDateSection = formStatus.cardCompany.isValid || formStatus.cardCompany.isOpen;
  const validCardCompanySection = formStatus.cardNumber.isValid || formStatus.cardNumber.isOpen;

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
        {validPasswordSection && (
          <CardPasswordContainer password={cardPasswordInfo.value} {...cardPasswordInfo} />
        )}
        {validCVCSection && <CardCVCContainer cvc={cardCVCInfo.value} {...cardCVCInfo} />}
        {validCardholderNameSection && (
          <CardholderNameContainer
            cardholderName={cardholderNameInfo.value}
            {...cardholderNameInfo}
          />
        )}
        {validExpiryDateSection && <CardExpiryDateContainer {...expiryDateInfo} />}
        {validCardCompanySection && (
          <CardCompanyContainer cardCompany={cardCompanyInfo.value} {...cardCompanyInfo} />
        )}
        <CardNumberContainer cardNumbers={cardNumberInfo.value} {...cardNumberInfo} />
      </CardInfoWrapper>
      {isCardFormValid && <SubmitButton onClick={handleClickNextPage}>확인</SubmitButton>}
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
