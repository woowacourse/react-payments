import { useContext } from 'react';
import * as Styled from './CardNumbers.styles';
import CardInput from '../@common/CardInput';
import CardLabel from '../@common/CardLabel';
import { RefContext } from '../../contexts/RefProvider';

interface CardNumbersProps {
  cardNumbers: Array<string>;
  isSetCardNumbers: (order: number, value: string) => boolean;
}

const CardNumbers = ({ cardNumbers, isSetCardNumbers }: CardNumbersProps) => {
  const cardRefs = useContext(RefContext);

  const handleCardInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target instanceof HTMLInputElement)) return;
    const currentOrder = Number(e.target.dataset['order']);

    if (!isSetCardNumbers(currentOrder, e.target.value)) return;

    focusNextInput(currentOrder);
  };

  const focusNextInput = (currentOrder: number) => {
    if (cardRefs[currentOrder].current?.value.length === 4) {
      cardRefs[currentOrder + 1].current?.focus();
    }
  };

  return (
    <>
      <CardLabel labelText="카드 번호" />
      <Styled.Wrapper>
        <CardInput
          type="text"
          maxLength={4}
          ref={cardRefs[0]}
          onChange={handleCardInputChange}
          value={cardNumbers[0]}
          order={0}
          placeholder={'0000'}
          required={true}
          autofocus={true}
        />
        {cardRefs[0].current?.value.length === 4 && (
          <Styled.Pargraph>-</Styled.Pargraph>
        )}
        <CardInput
          type="text"
          maxLength={4}
          ref={cardRefs[1]}
          onChange={handleCardInputChange}
          value={cardNumbers[1]}
          order={1}
          placeholder={'0000'}
          required={true}
        />
        {cardRefs[1].current?.value.length === 4 && (
          <Styled.Pargraph>-</Styled.Pargraph>
        )}
        <CardInput
          type="password"
          maxLength={4}
          ref={cardRefs[2]}
          onChange={handleCardInputChange}
          value={cardNumbers[2]}
          order={2}
          placeholder={'0000'}
          required={true}
        />
        {cardRefs[2].current?.value.length === 4 && (
          <Styled.Pargraph>-</Styled.Pargraph>
        )}
        <CardInput
          type="password"
          maxLength={4}
          ref={cardRefs[3]}
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
