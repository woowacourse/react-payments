import { useRef } from 'react';
import CardInput from '../CardInput/CardInput';
import CardLabel from '../CardLabel/CardLabel';
import * as Styled from './CardNumbers.styles';

interface CardNumbersProps {
  cardNumbers: Record<number, string>;
  checkCardNumbers: (order: number, value: string) => boolean;
}

const CardNumbers = ({ cardNumbers, checkCardNumbers }: CardNumbersProps) => {
  const cardNumberRefs: Record<number, React.RefObject<HTMLInputElement>> = {
    0: useRef<HTMLInputElement>(null),
    1: useRef<HTMLInputElement>(null),
    2: useRef<HTMLInputElement>(null),
    3: useRef<HTMLInputElement>(null),
  };

  const handleCardInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target instanceof HTMLInputElement)) return;
    const currentOrder = Number(e.target.dataset['order']);

    if (!checkCardNumbers(currentOrder, e.target.value)) return;

    if (cardNumberRefs[currentOrder].current?.value.length === 4) {
      if (currentOrder === 3) return;
      cardNumberRefs[currentOrder + 1].current?.focus();
    }
  };

  return (
    <>
      <CardLabel labelText="카드 번호" />
      <Styled.Wrapper>
        <CardInput
          type="text"
          maxLength={4}
          ref={cardNumberRefs[0]}
          onChange={handleCardInputChange}
          value={cardNumbers[0]}
          order={0}
          placeholder={'0000'}
          required={true}
          autoFocus={true}
        />
        {cardNumberRefs[0].current?.value.length === 4 && (
          <Styled.Pargraph>-</Styled.Pargraph>
        )}
        <CardInput
          type="text"
          maxLength={4}
          ref={cardNumberRefs[1]}
          onChange={handleCardInputChange}
          value={cardNumbers[1]}
          order={1}
          placeholder={'0000'}
          required={true}
        />
        {cardNumberRefs[1].current?.value.length === 4 && (
          <Styled.Pargraph>-</Styled.Pargraph>
        )}
        <CardInput
          type="password"
          maxLength={4}
          ref={cardNumberRefs[2]}
          onChange={handleCardInputChange}
          value={cardNumbers[2]}
          order={2}
          placeholder={'0000'}
          required={true}
        />
        {cardNumberRefs[2].current?.value.length === 4 && (
          <Styled.Pargraph>-</Styled.Pargraph>
        )}
        <CardInput
          type="password"
          maxLength={4}
          ref={cardNumberRefs[3]}
          onChange={handleCardInputChange}
          value={cardNumbers[3]}
          order={3}
          placeholder={'0000'}
          required={true}
        />
      </Styled.Wrapper>
    </>
  );
};

export default CardNumbers;
