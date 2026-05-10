import styled from 'styled-components';

import CardPreviewContainer from './components/preview/CardPreviewContainer/CardPreviewContainer';
import BrandSelectField from './components/fields/BrandSelectField/BrandSelectField';
import CvcField from './components/fields/CvcField/CvcField';
import ExpiryField from './components/fields/ExpiryField/ExpiryField';
import NumberField from './components/fields/NumberField/NumberField';
import PasswordField from './components/fields/PasswordField/PasswordField';
import CardPreviewSection from './components/sections/CardPreviewSection/CardPreviewSection';
import InfoInputSection from './components/sections/InfoInputSection/InfoInputSection';

import {useCardRegisterForm} from './hooks/useCardRegisterForm';

const CardRegisterPage = () => {
  const {cardPreview, fieldProps, visibleFields, isFormComplete, handleSubmit} = useCardRegisterForm();

  return (
    <Wrapper>
      <Content>
        <CardPreviewSection previewSlot={<CardPreviewContainer {...cardPreview} />} />
        <InfoInputSection
          numberSlot={<NumberField {...fieldProps.cardNumbers} />}
          brandSlot={visibleFields.brand ? <BrandSelectField {...fieldProps.cardBrand} /> : null}
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
