import styled from 'styled-components';

import Button from '@/common/components/Button/Button';
import CardPreviewSection from './components/sections/CardPreviewSection/CardPreviewSection';
import InfoInputSection from './components/sections/InfoInputSection/InfoInputSection';

import CardPreviewContainer from './components/previews/CardPreviewContainer/CardPreviewContainer';

import NumberField from './components/inputs/NumberField/NumberField';
import CompanySelectField from './components/inputs/CompanySelectField/CompanySelectField';
import ExpiryField from './components/inputs/ExpiryField/ExpiryField';
import CvcField from './components/inputs/CvcField/CvcField';
import PasswordField from './components/inputs/PasswordField/PasswordField';

import {useCardRegisterForm} from './hooks/form/useCardRegisterForm';
import {useStepFocus} from './hooks/ui/useStepFocus';

const CardRegisterPage = () => {
  const {cardPreview, visibleFields, fieldProps, isFormComplete, submitStatus, submitError, handleSubmit} =
    useCardRegisterForm();

  // 새 필드가 위에 쌓이는 UX라 화면 렌더 순서도 입력 순서의 반대로 둔다.
  const inputSteps = [
    {slot: visibleFields.password ? <PasswordField {...fieldProps.cardPassword} /> : null, focusTargetId: 'card-password'},
    {slot: visibleFields.cvc ? <CvcField {...fieldProps.cardCvc} /> : null, focusTargetId: 'card-cvc'},
    {
      slot: visibleFields.expiry ? <ExpiryField {...fieldProps.cardExpiryDate} /> : null,
      focusTargetId: 'card-expiry-month',
    },
    {
      slot: visibleFields.company ? <CompanySelectField {...fieldProps.cardCompany} /> : null,
      focusTargetId: 'card-company',
    },
    {slot: <NumberField {...fieldProps.cardNumbers} />},
  ];

  useStepFocus(inputSteps);

  return (
    <Wrapper>
      <Content>
        <CardPreviewSection previewSlot={<CardPreviewContainer {...cardPreview} />} />
        <InfoInputSection slots={inputSteps.map(({slot}) => slot)} />
      </Content>
      {submitError && <SubmitErrorMessage>{submitError}</SubmitErrorMessage>}
      {isFormComplete && (
        <SubmitButton onClick={handleSubmit} disabled={submitStatus === 'loading'}>
          {submitStatus === 'loading' ? '등록 중...' : '확인'}
        </SubmitButton>
      )}
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

const SubmitButton = styled(Button).attrs({variant: 'submit'})`
  flex-shrink: 0;
  width: 100%;
  padding: 16px;
`;

const SubmitErrorMessage = styled.p`
  margin: 0;
  padding: 8px 16px;
  color: #ff4d4f;
  font-size: 12px;
  text-align: center;
`;

export default CardRegisterPage;
