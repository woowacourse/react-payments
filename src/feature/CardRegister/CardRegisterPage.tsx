import styled from 'styled-components';
import CardPreviewSection from './components/CardPreviewSection/CardPreviewSection';
import InfoInputSection from './components/InfoInputSection/InfoInputSection';
import { useNavigate } from 'react-router-dom';
import { useCardForm } from './hooks/useCardForm';
import type { CardFormInfoType } from '../../domain/card/types/card';
import { postCard } from '../../api/cards';
import { useRegisterServerError } from './hooks/useRegisterServerErrors';

const CardRegisterPage = () => {
  const navigate = useNavigate();

  const { fields, cardPreviewInfo, cardFormInfo, currentStep, hasFormError } =
    useCardForm();

  // 서버에서 내려주는 에러 핸들링 커스텀 훅
  const serverErrors = useRegisterServerError();

  const handleRegisterComplete = async (cardFormInfo: CardFormInfoType) => {
    try {
      serverErrors.resetServerFieldErrors();
      await postCard(cardFormInfo);

      navigate('/cards', {
        state: cardFormInfo,
      });
    } catch (error) {
      // 네트워크 에러 처리 필요
      serverErrors.setServerFieldError(error.code, error.message);
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
          serverFieldErrors={serverErrors.serverFieldErrors}
          clearServerFieldError={serverErrors.clearServerFieldError}
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
