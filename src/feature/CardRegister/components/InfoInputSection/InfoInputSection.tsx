import CvcField from './CvCField';
import ExpiryField from './ExpiryField';
import NumberField from './NumberField';
import type { CardFormInfoType } from '../../../../domain/card/types/card';
import styled from 'styled-components';
import FieldSection from './FieldSection';
import SelectCardBrandField from './SelectCardBrandField';
import PasswordField from './PasswordField';
import Button from '../../../../common/components/Button';
import type { CardFormFieldsType } from '../../hooks/useCardForm';

const InfoInputSection = ({
  fields,
  cardFormInfo,
  currentStep,
  hasFormError,
  onRegisterComplete,
}: {
  fields: CardFormFieldsType;
  cardFormInfo: CardFormInfoType;
  currentStep: number;
  hasFormError: boolean;
  onRegisterComplete: (cardFormInfo: CardFormInfoType) => void;
}) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onRegisterComplete(cardFormInfo);
  };

  return (
    <Container onSubmit={handleSubmit}>
      <FieldsWrapper>
        {currentStep >= 4 && (
          <FieldSection
            title="비밀번호를 입력해 주세요"
            description="앞의 2자리를 입력해주세요."
          >
            <PasswordField autoFocus field={fields.password} />
          </FieldSection>
        )}
        {currentStep >= 3 && (
          <FieldSection title="CVC 번호를 입력해 주세요">
            <CvcField autoFocus field={fields.cvc} />
          </FieldSection>
        )}
        {currentStep >= 2 && (
          <FieldSection
            title="카드 유효기간을 입력해 주세요"
            description="월/년도(MMYY)를 순서대로 입력해 주세요."
          >
            <ExpiryField autoFocus field={fields.expiry} />
          </FieldSection>
        )}
        {currentStep >= 1 && (
          <FieldSection
            title="카드사를 선택해 주세요"
            description="현재 국내 카드사만 가능합니다."
          >
            <SelectCardBrandField autoFocus field={fields.cardCompany} />
          </FieldSection>
        )}
        <FieldSection
          title="결제할 카드 번호를 입력해 주세요"
          description="본인 명의의 카드만 결제 가능합니다."
        >
          <NumberField autoFocus field={fields.numbers} />
        </FieldSection>
      </FieldsWrapper>

      {!hasFormError && <SubmitButton type="submit">제출</SubmitButton>}
    </Container>
  );
};

const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;

  width: 100%;
  height: 700px;
  min-height: 0;
`;

const FieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 30px;

  width: 100%;
  min-height: 0;
  flex: 1;
  overflow-y: auto;
  box-sizing: border-box;
`;

const SubmitButton = styled(Button)`
  width: 100%;
  min-height: 46px;
  flex-shrink: 0;

  background-color: #333333;

  color: #f3f3f3;
  font-size: 16px;
  font-weight: 700;
`;

export default InfoInputSection;
