import styled from 'styled-components';

import CardPreviewSection from './components/CardPreviewSection/CardPreviewSection';
import InfoInputSection from './components/InfoInputSection/InfoInputSection';

import {useCardRegisterForm} from './hooks/useCardRegisterForm';

const CardRegisterPage = () => {
  const {
    numberField,
    companyField,
    expiryField,
    cvcField,
    showCompanySelect,
    showExpiry,
    showCvc,
    isFormComplete,
    handleSubmit,
  } = useCardRegisterForm();

  return (
    <Wrapper>
      <Container>
        <CardPreviewSection
          cardNumbers={numberField.cardNumbers}
          brand={numberField.brand}
          expiryMonth={expiryField.expiryMonth}
          expiryYear={expiryField.expiryYear}
          selectedCompany={companyField.selectedCompany}
        />
        <InfoInputSection
          numberField={numberField}
          expiryField={expiryField}
          cvcField={cvcField}
          selectedCompany={companyField.selectedCompany}
          onCompanyChange={companyField.handleChange}
          showCompanySelect={showCompanySelect}
          showExpiry={showExpiry}
          showCvc={showCvc}
        />
      </Container>
      {isFormComplete && <SubmitButton onClick={handleSubmit}>확인</SubmitButton>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100%;
  padding-bottom: 64px;
`;

const Container = styled.div`
  width: 100%;
  max-width: 376px;
`;

const SubmitButton = styled.button`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  width: 100%;
  max-width: 376px;
  margin: 0 auto;
  padding: 16px;
  background-color: #000;
  color: #fff;
  font-size: 14px;
  border: none;
  cursor: pointer;
`;

export default CardRegisterPage;
