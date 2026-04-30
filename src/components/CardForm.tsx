import CardCVCInput from './CardCVCInput';
import CardNumberSegmentsInput from './CardNumberSegmentsInput';
import type { CardFormState } from '../types';
import type { ChangeEvent } from 'react';
import Flex from './Flex';
import styled from '@emotion/styled';
import CardExpiryDateInput from './CardExpiryDateInput';

const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin: 0;
`;

const Description = styled.h3`
  font-size: 10px;
  color: var(--color-description);
  margin: 0;
`;

interface CardFormProps {
  formState: CardFormState;
  setFormState: (value: CardFormState) => void;
}

function CardForm(props: CardFormProps) {
  const handleChangeCardNumberSegments = (event: ChangeEvent<HTMLInputElement>) => {
    const inputIndex = Number(event.target.dataset.index);

    if (!inputIndex && isNaN(inputIndex)) return;

    const newCardnumber = [...props.formState.cardNumberSegments];
    newCardnumber.splice(inputIndex, 1, event.target.value);

    props.setFormState({
      ...props.formState,
      cardNumberSegments: newCardnumber as [string, string, string, string],
    });
  };

  const handleChangeCardExpiryDate = (event: ChangeEvent<HTMLInputElement>) => {
    const inputIndex = Number(event.target.dataset.index);

    if (!inputIndex && isNaN(inputIndex)) return;

    const newFormState = {
      ...props.formState,
      [inputIndex === 0 ? 'expiryMonth' : 'expiryYear']: event.target.value,
    };

    props.setFormState(newFormState);
  };

  return (
    <form>
      <Flex direction="column" gap={16}>
        <Flex direction="column" gap={5}>
          <Title>결제할 카드 번호를 입력해 주세요</Title>
          <Description>본인 명의의 카드만 결제 가능합니다.</Description>
        </Flex>
        <CardNumberSegmentsInput value={props.formState.cardNumberSegments} onChange={handleChangeCardNumberSegments} />
        <Flex direction="column" gap={5}>
          <Title>카드 유효기간을 입력해 주세요</Title>
          <Description>월/년도(MMYY)를 순서대로 입력해 주세요.</Description>
        </Flex>
        <CardExpiryDateInput
          value={{ expiryMonth: props.formState.expiryMonth, expiryYear: props.formState.expiryYear }}
          onChange={handleChangeCardExpiryDate}
        />
        <Flex direction="column" gap={5}>
          <Title>CVC 번호를 입력해 주세요</Title>
        </Flex>
        <CardCVCInput
          value={props.formState.cvc}
          onChange={(e) => props.setFormState({ ...props.formState, cvc: e.target.value })}
        />
      </Flex>
    </form>
  );
}

export default CardForm;
