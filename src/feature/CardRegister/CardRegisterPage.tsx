import styled from 'styled-components';
import CardPreviewSection from './components/CardPreviewSection/CardPreviewSection';
import InfoInputSection from './components/InfoInputSection/InfoInputSection';
import { useNavigate } from 'react-router-dom';
import type { CardFormInfoType } from '../../common/types/CardPreviewInfoType';
import { useCardForm } from './hooks/useCardForm';

const CardRegisterPage = () => {
  const navigate = useNavigate();

  const { fields, cardPreviewInfo, cardFormInfo, currentStep, hasFormError } =
    useCardForm();

  const handleRegisterComplete = (cardFormInfo: CardFormInfoType) => {
    navigate('/complete', {
      state: cardFormInfo,
    });
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
