import Card from '../component/card/Card';
import styled from 'styled-components';
import { justifyBrandLogo } from '../util/justifyBrandLogo';
import { getFirstErrorMessage } from '../util/getFirstErrorMessage';
import CardDescriptiveInput from '../component/input/CardDescriptiveInput';
import DESCRIPTION_TEXT from '../constants/descriptionText';
import useForm from '../hook/useForm';
import CARD_LABEL_INPUT_CONFIG from '../constants/cardLabeledInputConfig';
import { useEffect } from 'react';
import useCardFormStep from '../hook/useCardFormStep';
import CardDescriptiveSelect from '../component/select/CardDescriptiveSelect';
import Button from '../component/Button';
import { useNavigate } from 'react-router-dom';

const AddCard = () => {
  const { cardInput, handleCardInput, errorMessages, isError } = useForm();
  const { stepIndex, handleStepIndex } = useCardFormStep({ cardInput, isError });

  const navigate = useNavigate();
  const handleSubmit = () => {
    sessionStorage.setItem('firstCardNumber', JSON.stringify(cardInput.first));
    sessionStorage.setItem('cardBrand', JSON.stringify(cardInput.cardBrand));
    navigate('/success');
  };

  useEffect(() => {
    handleStepIndex();
  }, [cardInput, isError]);

  const cardNumberErrorMessage = getFirstErrorMessage([
    errorMessages.first,
    errorMessages.second,
    errorMessages.third,
    errorMessages.fourth,
  ]);
  const expirationDateErrorMessage = getFirstErrorMessage([errorMessages.MM, errorMessages.YY]);

  return (
    <>
      <Card cardInput={cardInput} cardType={cardInput.first ? justifyBrandLogo(cardInput.first) : 'default'} />
      <Form>
        {stepIndex >= 5 && (
          <ButtonContainer>
            <Button text="확인" handleCLick={handleSubmit} />
          </ButtonContainer>
        )}
        {stepIndex >= 4 && (
          <CardDescriptiveInput
            config={CARD_LABEL_INPUT_CONFIG.password}
            descriptionText={DESCRIPTION_TEXT.password}
            value={{ password: cardInput.password }}
            errorMessage={errorMessages.password}
            isErrors={{ password: isError.password }}
            handleCardInput={handleCardInput}
          />
        )}

        {stepIndex >= 3 && (
          <CardDescriptiveInput
            config={CARD_LABEL_INPUT_CONFIG.CVC}
            descriptionText={DESCRIPTION_TEXT.CVC}
            value={{ CVC: cardInput.CVC }}
            errorMessage={errorMessages.CVC}
            isErrors={{ CVC: isError.CVC }}
            handleCardInput={handleCardInput}
          />
        )}

        {stepIndex >= 2 && (
          <CardDescriptiveInput
            config={CARD_LABEL_INPUT_CONFIG.expirationDate}
            descriptionText={DESCRIPTION_TEXT.expirationDate}
            value={{ MM: cardInput.MM, YY: cardInput.YY }}
            errorMessage={expirationDateErrorMessage}
            isErrors={{ MM: isError.MM, YY: isError.YY }}
            handleCardInput={handleCardInput}
          />
        )}

        {stepIndex >= 1 && <CardDescriptiveSelect cardInput={cardInput} handleCardInput={handleCardInput} />}

        {stepIndex >= 0 && (
          <CardDescriptiveInput
            config={CARD_LABEL_INPUT_CONFIG.cardNumber}
            descriptionText={DESCRIPTION_TEXT.cardNumber}
            value={{
              first: cardInput.first,
              second: cardInput.second,
              third: cardInput.third,
              fourth: cardInput.fourth,
            }}
            errorMessage={cardNumberErrorMessage}
            isErrors={{ first: isError.first, second: isError.second, third: isError.third, fourth: isError.fourth }}
            handleCardInput={handleCardInput}
          />
        )}
      </Form>
    </>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 16px;
  position: relative;
`;

const ButtonContainer = styled.div`
  width: 436px;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  background-color: var(--color-black);
`;

export default AddCard;
