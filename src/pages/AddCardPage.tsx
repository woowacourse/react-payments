import Card from '../component/card/Card';
import styled from 'styled-components';
import { justifyBrandLogo } from '../util/justifyBrandLogo';
import CardFormSectionInput from '../component/input/CardFormSectionInput';
import DESCRIPTION_TEXT from '../constants/descriptionText';
import useForm from '../hook/useForm';
import CARD_LABEL_INPUT_CONFIG from '../constants/cardLabeledInputConfig';
import { useEffect } from 'react';
import useCardFormStep from '../hook/useCardFormStep';
import CardFormSectionSelect from '../component/select/CardFormSectionSelect';
import Button from '../component/Button';
import { useNavigate } from 'react-router-dom';
import PATH from '../constants/paths';

const AddCardPage = () => {
  const navigate = useNavigate();

  const { cardInput, handleCardInput, errorMessages } = useForm();
  const { stepIndex, handleStepIndex } = useCardFormStep({ cardInput, errorMessages });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    navigate(PATH.SUCCESS, {
      state: {
        cardFirstNumber: cardInput.first,
        cardBrand: cardInput.cardBrand,
      },
    });
  };

  useEffect(() => {
    handleStepIndex();
  }, [cardInput]);

  return (
    <>
      <Card cardInput={cardInput} cardType={cardInput.first ? justifyBrandLogo(cardInput.first) : 'default'} />
      <Form onSubmit={handleSubmit}>
        {stepIndex >= 5 && (
          <ButtonContainer>
            <Button text="확인" type="submit" />
          </ButtonContainer>
        )}

        {stepIndex >= 4 && (
          <CardFormSectionInput
            config={CARD_LABEL_INPUT_CONFIG.password}
            descriptionText={DESCRIPTION_TEXT.password}
            value={{ password: cardInput.password }}
            errorMessages={{
              password: errorMessages.password,
            }}
            handleCardInput={handleCardInput}
          />
        )}

        {stepIndex >= 3 && (
          <CardFormSectionInput
            config={CARD_LABEL_INPUT_CONFIG.CVC}
            descriptionText={DESCRIPTION_TEXT.CVC}
            value={{ CVC: cardInput.CVC }}
            errorMessages={{
              CVC: errorMessages.CVC,
            }}
            handleCardInput={handleCardInput}
          />
        )}

        {stepIndex >= 2 && (
          <CardFormSectionInput
            config={CARD_LABEL_INPUT_CONFIG.expirationDate}
            descriptionText={DESCRIPTION_TEXT.expirationDate}
            value={{ MM: cardInput.MM, YY: cardInput.YY }}
            errorMessages={{
              MM: errorMessages.MM,
              YY: errorMessages.YY,
            }}
            handleCardInput={handleCardInput}
          />
        )}

        {stepIndex >= 1 && <CardFormSectionSelect cardInput={cardInput} handleCardInput={handleCardInput} />}

        {stepIndex >= 0 && (
          <CardFormSectionInput
            config={CARD_LABEL_INPUT_CONFIG.cardNumber}
            descriptionText={DESCRIPTION_TEXT.cardNumber}
            value={{
              first: cardInput.first,
              second: cardInput.second,
              third: cardInput.third,
              fourth: cardInput.fourth,
            }}
            errorMessages={{
              first: errorMessages.first,
              second: errorMessages.second,
              third: errorMessages.third,
              fourth: errorMessages.fourth,
            }}
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

export default AddCardPage;
