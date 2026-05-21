import styled from 'styled-components';
import CardPreviewSection from './components/CardPreviewSection/CardPreviewSection';
import InfoInputSection from './components/InfoInputSection/InfoInputSection';
import { useNavigate } from 'react-router-dom';
import { useCardForm } from './hooks/useCardForm';
import { useRegisterServerError } from './hooks/useRegisterServerErrors';
import { useCardRegisterSubmit } from './hooks/useCardRegisterSubmit';

const CardRegisterPage = () => {
  const navigate = useNavigate();

  const { fields, cardPreviewInfo, cardFormInfo, currentStep, hasFormError } =
    useCardForm();

  // 서버에서 내려주는 에러 핸들링 커스텀 훅
  const serverErrors = useRegisterServerError();

  const { handleSubmitCard } = useCardRegisterSubmit({
    serverErrors,
    onSuccess: (cardFormInfo) => {
      navigate('/cards', {
        state: cardFormInfo,
      });
    },
  });

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
          onRegisterComplete={handleSubmitCard}
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
