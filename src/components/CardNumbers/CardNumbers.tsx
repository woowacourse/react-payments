import { useRef } from 'react';
import * as Styled from './CardNumbers.styles';
import CardInput from '../@common/CardInput';
import CardLabel from '../@common/CardLabel';

interface CardNumbersProps {
  cardNumbers: Array<string>;
  setCardNumbers: React.Dispatch<React.SetStateAction<Array<string>>>;
}

const CardNumbers = ({ cardNumbers, setCardNumbers }: CardNumbersProps) => {
  const cardNumberRefs: Record<number, React.RefObject<HTMLInputElement>> = {
    0: useRef<HTMLInputElement>(null),
    1: useRef<HTMLInputElement>(null),
    2: useRef<HTMLInputElement>(null),
    3: useRef<HTMLInputElement>(null),
  };

  const handleCardInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target instanceof HTMLInputElement)) return;
    const currentOrder = Number(e.target.dataset['order']);

    if (/[^0-9]/g.test(e.target.value)) {
      return;
    }

    setCardNumbers({ ...cardNumbers, [currentOrder]: e.target.value });

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
          autofocus={true}
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
