import styled from '@emotion/styled';
import useCardForm from '../hooks/useCardForm';
import { getCardNetwork } from '../utils';
import Flex from './Common/Flex';
import CardPreview from './CardPreview';
import { CARD_ISSUERS } from '../constants';
import { useState, type FormEvent } from 'react';
import type { CardFormState } from '../types';

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

interface CardFormProps {
  onSubmit: (formData: CardFormState) => void;
}

function CardForm(props: CardFormProps) {
  const { register, values, errors, formStatus } = useCardForm();
  const [step, setStep] = useState(0);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.onSubmit(values);
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardPreview
        issuer={values.cardIssuer}
        network={getCardNetwork(values.cardNumberSegments)}
        numberSegments={values.cardNumberSegments}
        expiryDate={values.cardExpiryDate}
      />
      <Flex direction="column" gap={10}>
        {step >= 4 && (
          <Flex direction="column" gap={10}>
            <Flex direction="column" gap={5}>
              <Title>비밀번호를 입력해 주세요</Title>
              <Description>앞의 2자리를 입력해주세요</Description>
            </Flex>
            <Input
              autoFocus={true}
              type="password"
              placeholder="**"
              data-is-error={!!errors['cardPassword']}
              {...register('cardPassword')}
            />
            <ErrorMessage>{errors['cardPassword']}</ErrorMessage>
          </Flex>
        )}
        {step >= 3 && (
          <Flex direction="column" gap={10}>
            <Flex direction="column" gap={5}>
              <Title>CVC 번호를 입력해 주세요</Title>
            </Flex>
            <Input
              autoFocus={true}
              type="text"
              placeholder="CVC"
              data-is-error={!!errors['cardValidationCode']}
              {...register('cardValidationCode', {
                onComplete: () => {
                  setStep((prev) => Math.max(4, prev));
                },
              })}
            />
            <ErrorMessage>{errors['cardValidationCode']}</ErrorMessage>
          </Flex>
        )}
        {step >= 2 && (
          <Flex direction="column" gap={10}>
            <Flex direction="column" gap={5}>
              <Title>카드 유효기간을 입력해 주세요</Title>
              <Description>월/년도(MMYY)를 순서대로 입력해 주세요.</Description>
            </Flex>
            <Flex gap={8}>
              <Input
                autoFocus={true}
                type="text"
                placeholder="MM"
                data-is-error={!!errors['cardExpiryDate'][0]}
                {...register('cardExpiryDate', { index: 0 })}
              />
              <Input
                type="text"
                placeholder="YY"
                data-is-error={!!errors['cardExpiryDate'][1]}
                {...register('cardExpiryDate', {
                  index: 1,
                  onComplete: () => {
                    setStep((prev) => Math.max(3, prev));
                  },
                })}
              />
            </Flex>
            <ErrorMessage>{errors['cardExpiryDate'].find((el) => el !== null)}</ErrorMessage>
          </Flex>
        )}
        {step >= 1 && (
          <Flex direction="column" gap={10}>
            <Flex direction="column" gap={5}>
              <Title>카드사를 선택해 주세요</Title>
              <Description>현재 국내 카드사만 가능합니다.</Description>
            </Flex>
            <Select
              data-is-error={!!errors['cardIssuer']}
              {...register<'cardIssuer', HTMLSelectElement>('cardIssuer', {
                onComplete: () => setStep((prev) => Math.max(2, prev)),
              })}
            >
              <option value="">카드사를 선택해 주세요</option>
              {CARD_ISSUERS.map((issuer) => (
                <option key={issuer.value} value={issuer.value}>
                  {issuer.label}
                </option>
              ))}
            </Select>
            <ErrorMessage>{errors['cardIssuer']}</ErrorMessage>
          </Flex>
        )}
        <Flex direction="column" gap={10}>
          <Flex direction="column" gap={5}>
            <Title>결제할 카드 번호를 입력해 주세요</Title>
            <Description>본인 명의의 카드만 결제 가능합니다.</Description>
          </Flex>
          <Flex gap={8}>
            <Input
              type="text"
              placeholder="1234"
              data-is-error={!!errors['cardNumberSegments'][0]}
              autoFocus={true}
              {...register('cardNumberSegments', { index: 0 })}
            />
            <Input
              type="text"
              placeholder="1234"
              data-is-error={!!errors['cardNumberSegments'][1]}
              {...register('cardNumberSegments', { index: 1 })}
            />
            <Input
              type="text"
              placeholder="1234"
              data-is-error={!!errors['cardNumberSegments'][2]}
              {...register('cardNumberSegments', { index: 2 })}
            />
            <Input
              type="text"
              placeholder="1234"
              data-is-error={!!errors['cardNumberSegments'][3]}
              {...register('cardNumberSegments', {
                index: 3,
                onComplete: () => {
                  setStep((prev) => Math.max(1, prev));
                },
              })}
            />
          </Flex>
          <ErrorMessage>{errors['cardNumberSegments'].find((el) => el !== null)}</ErrorMessage>
        </Flex>
        {formStatus.isValid && <Submit type="submit">확인</Submit>}
      </Flex>
    </form>
  );
}

export default CardForm;
