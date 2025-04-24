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

const AddCard = () => {
  const { cardInput, handleCardInput, errorMessages, isError } = useForm();
  const { stepIndex, handleStepIndex } = useCardFormStep({ cardInput, isError });

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
    <Wrap>
      <Card cardInput={cardInput} cardType={cardInput.first ? justifyBrandLogo(cardInput.first) : 'default'} />
      <Form>
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
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 376px;
  padding: 30px;
  background-color: var(--color-white);
  padding-top: 77px;
  min-height: 700px;
  gap: 45px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 16px;
`;

export default AddCard;
