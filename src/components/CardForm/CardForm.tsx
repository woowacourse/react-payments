import { getCardNetwork } from '../../utils';
import Flex from '../Common/Flex';
import CardPreview from './CardPreview';
import type { AddCardError, AddCardSuccess } from '../../types/api';
import useCardForm, { CARD_FORM_STEP } from '../../hooks/useCardForm';
import Button from '../Common/Button';
import CardPasswordInput from './CardPasswordInput';
import CardCVCInput from './CardCVCInput';
import CardExpiryDateInput from './CardExpiryDateInput';
import CardIssuerSelect from './CardIssuerSelect';
import CardNumberSegmentsInput from './CardNumberSegmentsInput';
import CardFormSection from './CardFormSection';
import { useNavigate } from 'react-router';
import useMutation from '../../hooks/useMutation';
import Text from '../Common/Text';

function isErrorResponse(data: AddCardSuccess | AddCardError | null): data is AddCardError {
  return data && Object.prototype.hasOwnProperty.call(data, 'code') ? true : false;
}

function CardForm() {
  const navigate = useNavigate();

  const { step, ...form } = useCardForm();

  const mutation = useMutation<AddCardSuccess | AddCardError>({
    method: 'POST',
    url: '/cards',
    onSuccess: () => navigate('/cards'),
  });

  const handleFormAction = async () => {
    const requestBody = {
      number: form.formValue.cardNumberSegments.join(''),
      expirationDate: form.formValue.cardExpiryDate.join('/'),
      cvc: form.formValue.cardValidationCode,
      issuerCode: form.formValue.cardIssuer,
    };

    mutation.mutate({ body: requestBody });
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
          {isErrorResponse(mutation.data) && mutation.data.code === 'INVALID_CVC' && (
            <Text size="s" color="error" role="alert">
              {mutation.data.message}
            </Text>
          )}
        </CardFormSection>
        <CardFormSection isVisible={step >= CARD_FORM_STEP['CARD_EXPIRY_DATE']}>
          <CardFormSection.Title>카드 유효기간을 입력해 주세요</CardFormSection.Title>
          <CardFormSection.Description>월/년도(MMYY)를 순서대로 입력해 주세요.</CardFormSection.Description>
          <CardExpiryDateInput field={form.cardExpiryDate} />
          {isErrorResponse(mutation.data) && mutation.data.code === 'INVALID_EXPIRATION_DATE' && (
            <Text size="s" color="error" role="alert">
              {mutation.data.message}
            </Text>
          )}
        </CardFormSection>
        <CardFormSection isVisible={step >= CARD_FORM_STEP['CARD_ISSUER']}>
          <CardFormSection.Title>카드사를 선택해 주세요</CardFormSection.Title>
          <CardFormSection.Description>현재 국내 카드사만 가능합니다.</CardFormSection.Description>
          <CardIssuerSelect field={form.cardIssuer} />
          {isErrorResponse(mutation.data) && mutation.data.code === 'INVALID_ISSUER_CODE' && (
            <Text size="s" color="error" role="alert">
              {mutation.data.message}
            </Text>
          )}
        </CardFormSection>
        <CardFormSection isVisible={step >= CARD_FORM_STEP['CARD_NUMBER']}>
          <CardFormSection.Title>결제할 카드 번호를 입력해 주세요</CardFormSection.Title>
          <CardFormSection.Description>본인 명의의 카드만 결제 가능합니다.</CardFormSection.Description>
          <CardNumberSegmentsInput field={form.cardNumberSegments} />
          {isErrorResponse(mutation.data) && mutation.data.code === 'INVALID_CARD_NUMBER' && (
            <Text size="s" color="error" role="alert">
              {mutation.data.message}
            </Text>
          )}
        </CardFormSection>
        <CardFormSection isVisible={form.formStatus.isValid}>
          <Button type="submit" style={{ position: 'sticky', bottom: '0', borderRadius: '0px', margin: '0 -32px' }}>
            확인
          </Button>
        </CardFormSection>
      </Flex>
    </form>
  );
}

export default CardForm;
