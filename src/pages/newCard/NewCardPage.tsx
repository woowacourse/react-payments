import { useState } from 'react';
import { CREATION_STAGE } from '../../constants/setting';
import CardFrontPreview from '../../components/cardPreview/CardFrontPreview';
import CardBackPreview from '../../components/cardPreview/cardBackPreview';
import Button from '../../components/common/button/Button';
import * as Styled from './NewCardPage.styled';
import { useNavigate } from 'react-router-dom';
import useCardForm from '../../hooks/useCardForm';
import CardNumberInputSection from '../../components/cardNumberInputSection/CardNumberInputSection';
import CardCompanyInputSection from '../../components/cardCompanyInputSection/CardCompanyInputSection';
import CardExpirationInputSection from '../../components/cardExpirationInputSection/CardExpirationInputSection';
import CardUserNameInputSection from '../../components/cardUserNameInputSection/CardUserNameInputSection';
import CardCVCInputSection from '../../components/cardCVCInputSection/CardCVCInputSection';
import CardPasswordInputSection from '../../components/cardPasswordInputSection/cardPasswordInputSection';

const NewCardPage = () => {
  const {
    cardInfo,
    errorMessage,
    creationStage,
    isAllValidInput,
    handleCardNumbers,
    handleCardCompany,
    handleCardExpiration,
    handleCardUserName,
    handleCardCVC,
    handleCardPassword,
  } = useCardForm();
  const [preview, setPreview] = useState('front');
  const navigate = useNavigate();

  const navigateToRegistrationCompletePage = () => {
    navigate('/registration-complete', {
      state: {
        cardFirstFourDigits: cardInfo.cardNumbers[0],
        cardCompany: cardInfo.cardCompany,
      },
    });
  };

  return (
    <Styled.NewCardContainer>
      {preview === 'front' && <CardFrontPreview cardInfo={cardInfo} />}
      {preview === 'back' && <CardBackPreview cvc={cardInfo.cvc} />}
      <Styled.NewCardInputSectionWrapper>
        {creationStage >= CREATION_STAGE.CARD_NUMBERS && (
          <CardNumberInputSection
            cardInfo={cardInfo}
            errorMessage={errorMessage}
            handleCardNumbers={handleCardNumbers}
          />
        )}
        {creationStage >= CREATION_STAGE.CARD_COMPANY && (
          <CardCompanyInputSection
            cardInfo={cardInfo}
            handleCardCompany={handleCardCompany}
          />
        )}
        {creationStage >= CREATION_STAGE.CARD_EXPIRATION && (
          <CardExpirationInputSection
            cardInfo={cardInfo}
            errorMessage={errorMessage}
            handleCardExpiration={handleCardExpiration}
          />
        )}
        {creationStage >= CREATION_STAGE.CARD_USERNAME && (
          <CardUserNameInputSection
            cardInfo={cardInfo}
            errorMessage={errorMessage}
            handleCardUserName={handleCardUserName}
          />
        )}
        {creationStage >= CREATION_STAGE.CARD_CVC && (
          <CardCVCInputSection
            errorMessage={errorMessage}
            handleCardCVC={handleCardCVC}
            setPreview={setPreview}
          />
        )}
        {creationStage >= CREATION_STAGE.CARD_PASSWORD && (
          <CardPasswordInputSection
            errorMessage={errorMessage}
            handleCardPassword={handleCardPassword}
          />
        )}
      </Styled.NewCardInputSectionWrapper>
      {isAllValidInput() && (
        <Button
          onClick={navigateToRegistrationCompletePage}
          text='확인'
        ></Button>
      )}
    </Styled.NewCardContainer>
  );
};

export default NewCardPage;
