import styled from 'styled-components';

import CardPreviewSection from './components/sections/CardPreviewSection/CardPreviewSection';
import InfoInputSection from './components/sections/InfoInputSection/InfoInputSection';

import CardPreviewContainer from './components/previews/CardPreviewContainer/CardPreviewContainer';

import NumberField from './components/inputs/NumberField/NumberField';
import CompanySelectField from './components/inputs/CompanySelectField/CompanySelectField';
import ExpiryField from './components/inputs/ExpiryField/ExpiryField';
import CvcField from './components/inputs/CvcField/CvcField';
import PasswordField from './components/inputs/PasswordField/PasswordField';

import {useCardRegisterForm} from './hooks/form/useCardRegisterForm';

const CardRegisterPage = () => {
  const {cardPreview, visibleFields, fieldProps, isFormComplete, handleSubmit} = useCardRegisterForm();

  return (
    <Wrapper>
      <Content>
        <CardPreviewSection previewSlot={<CardPreviewContainer {...cardPreview} />} />
        <InfoInputSection
          numberSlot={<NumberField {...fieldProps.cardNumbers} />}
          companySlot={visibleFields.company ? <CompanySelectField {...fieldProps.cardCompany} /> : null}
          expirySlot={visibleFields.expiry ? <ExpiryField {...fieldProps.cardExpiryDate} /> : null}
          cvcSlot={visibleFields.cvc ? <CvcField {...fieldProps.cardCvc} /> : null}
          passwordSlot={visibleFields.password ? <PasswordField {...fieldProps.cardPassword} /> : null}
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
