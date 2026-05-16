import styled from '@emotion/styled';
import { getCardNetwork } from '../../utils';
import Flex from '../Common/Flex';
import CardPreview from './CardPreview';
import type { CardFormState } from '../../types';
import useCardForm, { CARD_FORM_STEP } from '../../hooks/useCardForm';
import Button from '../Common/Button';
import CardPasswordInput from './CardPasswordInput';
import CardCVCInput from './CardCVCInput';
import CardExpiryDateInput from './CardExpiryDateInput';
import CardIssuerSelect from './CardIssuerSelect';
import CardNumberSegmentsInput from './CardNumberSegmentsInput';
import CardFormSection from './CardFormSection';

const Submit = styled(Button)`
  position: sticky;
  bottom: 0;
  border-radius: 0px;
  margin: 0 -32px;
`;

interface CardFormProps {
  onSubmit: (formData: CardFormState) => void;
}

function CardForm(props: CardFormProps) {
  const { step, ...form } = useCardForm();

  const handleFormAction = () => {
    props.onSubmit(form.formValue);
  };

  return (
    <form action={handleFormAction}>
      <CardPreview
        issuer={form.formValue.cardIssuer}
        network={getCardNetwork(form.formValue.cardNumberSegments)}
        numberSegments={form.formValue.cardNumberSegments}
        expiryDate={form.formValue.cardExpiryDate}
      />
      <Flex direction="column" gap={10}>
        <CardFormSection isVisible={step >= CARD_FORM_STEP['CARD_PASSWORD']}>
          <CardFormSection.Title>비밀번호를 입력해 주세요</CardFormSection.Title>
          <CardFormSection.Description>앞의 2자리를 입력해주세요</CardFormSection.Description>
          <CardPasswordInput field={form.cardPassword} />
        </CardFormSection>
        <CardFormSection isVisible={step >= CARD_FORM_STEP['CARD_VALIDATION_CODE']}>
          <CardFormSection.Title>CVC 번호를 입력해 주세요</CardFormSection.Title>
          <CardCVCInput field={form.cardValidationCode} />
        </CardFormSection>
        <CardFormSection isVisible={step >= CARD_FORM_STEP['CARD_EXPIRY_DATE']}>
          <CardFormSection.Title>카드 유효기간을 입력해 주세요</CardFormSection.Title>
          <CardFormSection.Description>월/년도(MMYY)를 순서대로 입력해 주세요.</CardFormSection.Description>
          <CardExpiryDateInput field={form.cardExpiryDate} />
        </CardFormSection>
        <CardFormSection isVisible={step >= CARD_FORM_STEP['CARD_ISSUER']}>
          <CardFormSection.Title>카드사를 선택해 주세요</CardFormSection.Title>
          <CardFormSection.Description>현재 국내 카드사만 가능합니다.</CardFormSection.Description>
          <CardIssuerSelect field={form.cardIssuer} />
        </CardFormSection>
        <CardFormSection isVisible={step >= CARD_FORM_STEP['CARD_NUMBER']}>
          <CardFormSection.Title>결제할 카드 번호를 입력해 주세요</CardFormSection.Title>
          <CardFormSection.Description>본인 명의의 카드만 결제 가능합니다.</CardFormSection.Description>
          <CardNumberSegmentsInput field={form.cardNumberSegments} />
        </CardFormSection>
        {form.formStatus.isValid && <Submit type="submit">확인</Submit>}
      </Flex>
    </form>
  );
}

export default CardForm;
