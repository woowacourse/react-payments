import styled from 'styled-components';
import CardPreviewSection from './components/CardPreviewSection/CardPreviewSection';
import InfoInputSection from './components/InfoInputSection/InfoInputSection';
import { useNavigate } from 'react-router-dom';
import { useCardForm } from './hooks/useCardForm';
import type { CardFormInfoType } from '../../domain/card/types/card';
import { postCard } from '../../api/cards';

const SERVER_ERROR_FIELD_MAP = {
  INVALID_CARD_NUMBER: 'cardNumber',
  INVALID_EXPIRATION_DATE: 'expirationDate',
  INVALID_CVC: 'cvc',
} as const;

const CardRegisterPage = () => {
  const navigate = useNavigate();

  const {
    fields,
    cardPreviewInfo,
    cardFormInfo,
    currentStep,
    hasFormError,
    serverFieldErrors,
    setServerFieldErrors,
    clearServerFieldError,
  } = useCardForm();

  const handleRegisterComplete = async (cardFormInfo: CardFormInfoType) => {
    try {
      setServerFieldErrors({});
      await postCard(cardFormInfo);

      navigate('/cards', {
        state: cardFormInfo,
      });
    } catch (error) {
      setServerFieldErrors({
        [SERVER_ERROR_FIELD_MAP[error.code]]: error.message,
      });
    }
  };

  return (
    <Wrapper>
      <Container>
        <CardPreviewSection cardPreviewInfo={cardPreviewInfo} />
        <InfoInputSection
          fields={fields}
          cardFormInfo={cardFormInfo}
          currentStep={currentStep}
          hasFormError={hasFormError}
          serverFieldErrors={serverFieldErrors}
          clearServerFieldError={clearServerFieldError}
          onRegisterComplete={handleRegisterComplete}
        />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  min-height: 100vh;

  background-color: #d3d3d3;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 376px;
  height: min(700px, 100vh);
  overflow: hidden;

  background-color: #ffffff;
`;

export default CardRegisterPage;
