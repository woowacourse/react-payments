import styled from '@emotion/styled';
import { getCardNetwork } from '../utils';
import Flex from './Common/Flex';
import CardPreview from './CardPreview';
import { CARD_ISSUERS } from '../constants';
import type { CardFormState } from '../types';
import useCardForm from '../hooks/useCardForm';

const Title = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin: 0;
`;

const Description = styled.span`
  font-size: 10px;
  color: var(--color-description);
  margin: 0;
`;

const Input = styled.input`
  width: 100%;
  font-size: 13px;
  border-radius: 2px;
  padding: 8px 6px;
  border: 1px solid var(--color-border);

  &:focus {
    border-color: var(--color-black);
    outline: 0;
  }

  &[data-is-error='true'] {
    border-color: var(--color-error);
  }
`;

const Select = styled.select`
  width: 100%;
  font-size: 13px;
  border-radius: 2px;
  padding: 8px 6px;
  border: 1px solid var(--color-border);

  &:focus {
    border-color: var(--color-black);
    outline: 0;
  }

  &[data-is-error='true'] {
    border-color: var(--color-error);
  }
`;

const ErrorMessage = styled.p`
  color: var(--color-error);
  font-size: 12px;
  line-height: 14px;
  min-height: 14px;
  margin: 0;
`;

const Submit = styled.button`
  position: sticky;
  bottom: 0;
  border: 0;
  background: var(--color-card-background);
  color: var(--color-white);
  height: 52px;
  font-weight: 700;
  margin: 0 -32px;

  &:hover {
    cursor: pointer;
  }
`;

const CARD_FORM_STEP = {
  CARD_PASSWORD: 4,
  CARD_VALIDATION_CODE: 3,
  CARD_EXPIRY_DATE: 2,
  CARD_ISSUER: 1,
  CARD_NUMBER: 0,
};

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
        {step >= CARD_FORM_STEP['CARD_PASSWORD'] && (
          <Flex direction="column" gap={10}>
            <Flex direction="column" gap={5}>
              <Title>비밀번호를 입력해 주세요</Title>
              <Description>앞의 2자리를 입력해주세요</Description>
            </Flex>
            <Input
              autoFocus
              inputMode="numeric"
              type="password"
              placeholder="**"
              data-is-error={!!form.cardPassword.error}
              value={form.cardPassword.value}
              {...form.cardPassword.register()}
            />
            <ErrorMessage>{form.cardPassword.error}</ErrorMessage>
          </Flex>
        )}
        {step >= CARD_FORM_STEP['CARD_VALIDATION_CODE'] && (
          <Flex direction="column" gap={10}>
            <Flex direction="column" gap={5}>
              <Title>CVC 번호를 입력해 주세요</Title>
            </Flex>
            <Input
              autoFocus
              inputMode="numeric"
              type="text"
              placeholder="CVC"
              data-is-error={!!form.cardValidationCode.error}
              value={form.cardValidationCode.value}
              {...form.cardValidationCode.register()}
            />
            <ErrorMessage>{form.cardValidationCode.error}</ErrorMessage>
          </Flex>
        )}
        {step >= CARD_FORM_STEP['CARD_EXPIRY_DATE'] && (
          <Flex direction="column" gap={10}>
            <Flex direction="column" gap={5}>
              <Title>카드 유효기간을 입력해 주세요</Title>
              <Description>월/년도(MMYY)를 순서대로 입력해 주세요.</Description>
            </Flex>
            <Flex gap={8}>
              <Input
                autoFocus
                inputMode="numeric"
                type="text"
                placeholder="MM"
                data-is-error={!!form.cardExpiryDate.errors[0]}
                value={form.cardExpiryDate.values[0]}
                {...form.cardExpiryDate.register({ index: 0 })}
              />
              <Input
                type="text"
                inputMode="numeric"
                placeholder="YY"
                data-is-error={!!form.cardExpiryDate.errors[1]}
                value={form.cardExpiryDate.values[1]}
                {...form.cardExpiryDate.register({ index: 1 })}
              />
            </Flex>
            <ErrorMessage>{form.cardExpiryDate.error}</ErrorMessage>
          </Flex>
        )}
        {step >= CARD_FORM_STEP['CARD_ISSUER'] && (
          <Flex direction="column" gap={10}>
            <Flex direction="column" gap={5}>
              <Title>카드사를 선택해 주세요</Title>
              <Description>현재 국내 카드사만 가능합니다.</Description>
            </Flex>
            <Select
              autoFocus
              data-is-error={!!form.cardIssuer.error}
              value={form.cardIssuer.value ?? ''}
              {...form.cardIssuer.register()}
            >
              <option value="">카드사를 선택해 주세요</option>
              {CARD_ISSUERS.map((issuer) => (
                <option key={issuer.value} value={issuer.value}>
                  {issuer.label}
                </option>
              ))}
            </Select>
            <ErrorMessage>{form.cardIssuer.error}</ErrorMessage>
          </Flex>
        )}
        {step >= CARD_FORM_STEP['CARD_NUMBER'] && (
          <Flex direction="column" gap={10}>
            <Flex direction="column" gap={5}>
              <Title>결제할 카드 번호를 입력해 주세요</Title>
              <Description>본인 명의의 카드만 결제 가능합니다.</Description>
            </Flex>
            <Flex gap={8}>
              <Input
                autoFocus
                type="text"
                placeholder="1234"
                data-is-error={!!form.cardNumberSegments.errors[0]}
                value={form.cardNumberSegments.values[0]}
                {...form.cardNumberSegments.register({ index: 0 })}
              />
              <Input
                type="text"
                placeholder="1234"
                data-is-error={!!form.cardNumberSegments.errors[1]}
                value={form.cardNumberSegments.values[1]}
                {...form.cardNumberSegments.register({ index: 1 })}
              />
              <Input
                type="text"
                placeholder="1234"
                data-is-error={!!form.cardNumberSegments.errors[2]}
                value={form.cardNumberSegments.values[2]}
                {...form.cardNumberSegments.register({ index: 2 })}
              />
              <Input
                type="text"
                placeholder="1234"
                data-is-error={!!form.cardNumberSegments.errors[3]}
                value={form.cardNumberSegments.values[3]}
                {...form.cardNumberSegments.register({ index: 3 })}
              />
            </Flex>
            <ErrorMessage>{form.cardNumberSegments.error}</ErrorMessage>
          </Flex>
        )}
        {form.formStatus.isValid && <Submit type="submit">확인</Submit>}
      </Flex>
    </form>
  );
}

export default CardForm;
