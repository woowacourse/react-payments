import { useState } from 'react';
import Input from '../../components/common/input/Input';
import Select from '../../components/common/select/Select';
import NewCardInputSection from '../../components/newCardInputSection/NewCardInputSection';
import { CARD_FORM_INPUTS } from '../../constants/setting';
import CardFrontPreview from '../../components/cardPreview/CardFrontPreview';
import CardBackPreview from '../../components/cardPreview/cardBackPreview';
import Button from '../../components/common/button/Button';
import * as Styled from './NewCardPage.styled';
import { useNavigate } from 'react-router-dom';
import useCardForm from '../../hooks/useCardForm';

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
        <NewCardInputSection
          label={CARD_FORM_INPUTS.CARD_NUMBERS.LABEL}
          mainText={CARD_FORM_INPUTS.CARD_NUMBERS.MAIN_TEXT}
          subText={CARD_FORM_INPUTS.CARD_NUMBERS.SUB_TEXT}
          errorMessage={errorMessage.cardNumbers}
        >
          {cardInfo.cardNumbers.map((_, index) => (
            <Input
              key={index}
              maxLength={CARD_FORM_INPUTS.CARD_NUMBERS.MAX_LENGTH}
              placeholder={CARD_FORM_INPUTS.CARD_NUMBERS.PLACEHOLDER}
              isError={!!errorMessage.cardNumbers[index]}
              onChange={(event) => handleCardNumbers(event, index)}
            ></Input>
          ))}
        </NewCardInputSection>
        {creationStage >= 2 && (
          <NewCardInputSection
            label={CARD_FORM_INPUTS.CARD_COMPANY.LABEL}
            mainText={CARD_FORM_INPUTS.CARD_COMPANY.MAIN_TEXT}
            subText={CARD_FORM_INPUTS.CARD_COMPANY.SUB_TEXT}
          >
            <Select
              options={CARD_FORM_INPUTS.CARD_COMPANY.OPTIONS}
              onChange={(event) => handleCardCompany(event)}
              value={cardInfo.cardCompany}
            ></Select>
          </NewCardInputSection>
        )}
        {creationStage >= 3 && (
          <NewCardInputSection
            label={CARD_FORM_INPUTS.CARD_EXPIRATION.LABEL}
            mainText={CARD_FORM_INPUTS.CARD_EXPIRATION.MAIN_TEXT}
            subText={CARD_FORM_INPUTS.CARD_EXPIRATION.SUB_TEXT}
            errorMessage={errorMessage.cardExpiration}
          >
            {cardInfo.cardExpiration.map((_, index) => (
              <Input
                autoFocus={index === 0}
                key={index}
                maxLength={CARD_FORM_INPUTS.CARD_EXPIRATION.MAX_LENGTH}
                placeholder={
                  index === 0
                    ? CARD_FORM_INPUTS.CARD_EXPIRATION.PLACEHOLDER.MONTH
                    : CARD_FORM_INPUTS.CARD_EXPIRATION.PLACEHOLDER.YEAR
                }
                isError={!!errorMessage.cardExpiration[index]}
                onChange={(event) => handleCardExpiration(event, index)}
              ></Input>
            ))}
          </NewCardInputSection>
        )}
        {creationStage >= 4 && (
          <NewCardInputSection
            label={CARD_FORM_INPUTS.USER_NAME.LABEL}
            mainText={CARD_FORM_INPUTS.USER_NAME.MAIN_TEXT}
            subText={CARD_FORM_INPUTS.USER_NAME.SUB_TEXT}
            errorMessage={errorMessage.userName}
          >
            <Input
              value={cardInfo.userName}
              autoFocus
              maxLength={CARD_FORM_INPUTS.USER_NAME.MAX_LENGTH}
              placeholder={CARD_FORM_INPUTS.USER_NAME.PLACEHOLDER}
              isError={!!errorMessage.userName[0]}
              onChange={(event) => handleCardUserName(event)}
            ></Input>
          </NewCardInputSection>
        )}
        {creationStage >= 5 && (
          <NewCardInputSection
            label={CARD_FORM_INPUTS.CVC.LABEL}
            mainText={CARD_FORM_INPUTS.CVC.MAIN_TEXT}
            subText={CARD_FORM_INPUTS.CVC.SUB_TEXT}
            errorMessage={errorMessage.cvc}
          >
            <Input
              maxLength={CARD_FORM_INPUTS.CVC.MAX_LENGTH}
              placeholder={CARD_FORM_INPUTS.CVC.PLACEHOLDER}
              isError={!!errorMessage.cvc[0]}
              onChange={(event) => handleCardCVC(event)}
              onFocus={() => setPreview('back')}
              onBlur={() => setPreview('front')}
            ></Input>
          </NewCardInputSection>
        )}
        {creationStage >= 6 && (
          <NewCardInputSection
            label={CARD_FORM_INPUTS.PASSWORD.LABEL}
            mainText={CARD_FORM_INPUTS.PASSWORD.MAIN_TEXT}
            subText={CARD_FORM_INPUTS.PASSWORD.SUB_TEXT}
            errorMessage={errorMessage.password}
          >
            <Input
              type='password'
              autoFocus
              maxLength={CARD_FORM_INPUTS.PASSWORD.MAX_LENGTH}
              placeholder={CARD_FORM_INPUTS.PASSWORD.PLACEHOLDER}
              isError={!!errorMessage.password[0]}
              onChange={(event) => handleCardPassword(event)}
            ></Input>
          </NewCardInputSection>
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
