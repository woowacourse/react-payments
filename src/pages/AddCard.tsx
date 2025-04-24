import Card from '../component/card/Card';
import Description from '../component/Description';
import styled from 'styled-components';
import { justifyBrandLogo } from '../util/justifyBrandLogo';
import { getFirstErrorMessage } from '../util/getFirstErrorMessage';
import CardBrandSelects from '../component/select/CardBrandSelects';
import DESCRIPTION_TEXT from '../constants/descriptionText';
import useCardInputs from '../hook/useCardInputs';
import CardLabeledInput from '../component/input/CardLabeledInput';
import CARD_LABEL_INPUT_CONFIG from '../constants/cardLabeledInputConfig';
// import type { CardInputProps } from '../types/CardInputTypes';

// import { useState } from 'react';

const AddCard = () => {
  const { cardInput, handleCardInput, errorMessages, isError } = useCardInputs();

  // const STEP_SEQUENCE = ['cardNumber', 'cardBrand', 'expirationDate', 'CVC', 'password'] as const;
  // const [stepIndex, setStepIndex] = useState(0);

  // const goToNextStep = () => {
  //   setStepIndex((prev) => prev + 1);
  // };

  // const handleStep = () => {
  //   if (cardInput.first && cardInput.second && cardInput.third && cardInput.fourth)
  //     if (!isError.first && !isError.second && !isError.third && !isError.fourth && cardInput.first.length !== 0) {
  //     }
  // };

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
        <Description headText={DESCRIPTION_TEXT.CVC.headText} detailText={DESCRIPTION_TEXT.CVC.detailText} />
        <CardLabeledInput
          {...CARD_LABEL_INPUT_CONFIG.password}
          value={{ password: cardInput.password }}
          errorMessage={errorMessages.password}
          handleCardInput={handleCardInput}
          isErrors={{ password: isError.password }}
        />

        <Description headText={DESCRIPTION_TEXT.CVC.headText} detailText={DESCRIPTION_TEXT.CVC.detailText} />
        <CardLabeledInput
          {...CARD_LABEL_INPUT_CONFIG.CVC}
          value={{ CVC: cardInput.CVC }}
          errorMessage={errorMessages.CVC}
          handleCardInput={handleCardInput}
          isErrors={{ CVC: isError.CVC }}
        />

        <Description
          headText={DESCRIPTION_TEXT.expirationDate.headText}
          detailText={DESCRIPTION_TEXT.expirationDate.detailText}
        />
        <CardLabeledInput
          {...CARD_LABEL_INPUT_CONFIG.expirationDate}
          value={{ MM: cardInput.MM, YY: cardInput.YY }}
          errorMessage={expirationDateErrorMessage}
          handleCardInput={handleCardInput}
          isErrors={{
            MM: isError.MM,
            YY: isError.YY,
          }}
        />

        <Description
          headText={DESCRIPTION_TEXT.cardBrand.headText}
          detailText={DESCRIPTION_TEXT.cardBrand.detailText}
        />
        <CardBrandSelects
          {...CARD_LABEL_INPUT_CONFIG.cardBrand}
          cardInput={cardInput}
          handleCardInput={handleCardInput}
        />

        <Description
          headText={DESCRIPTION_TEXT.cardNumber.headText}
          detailText={DESCRIPTION_TEXT.cardNumber.detailText}
        />
        <CardLabeledInput
          {...CARD_LABEL_INPUT_CONFIG.cardNumber}
          value={{ first: cardInput.first, second: cardInput.second, third: cardInput.third, fourth: cardInput.fourth }}
          errorMessage={cardNumberErrorMessage}
          isErrors={{
            first: isError.first,
            second: isError.second,
            third: isError.third,
            fourth: isError.fourth,
          }}
          handleCardInput={handleCardInput}
        />
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
