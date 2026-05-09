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
      <Content>
        <CardPreviewSection
          cardNumbers={numberField.cardNumbers}
          brand={numberField.brand}
          expiryDate={expiryField.expiryDate}
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
      </Content>
      {isFormComplete && <SubmitButton onClick={handleSubmit}>확인</SubmitButton>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
  overflow-y: auto;
`;

const SubmitButton = styled.button`
  flex-shrink: 0;
  width: 100%;
  padding: 16px;
  background-color: #000;
  color: #fff;
  font-size: 14px;
  border: none;
  cursor: pointer;
`;

export default CardRegisterPage;
