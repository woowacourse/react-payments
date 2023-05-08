import { useContext } from 'react';
import * as Styled from './CardNumbers.styles';
import CardInput from '../@common/CardInput';
import CardLabel from '../@common/CardLabel';
import { RefContext } from '../../contexts/RefProvider';
import CardErrorLabel from '../@common/CardErrorLabel';
import { CardNumbersType } from '../../types/';

interface CardNumbersProps {
  cardNumbers: CardNumbersType;
  errorMessage: string;
  isValidatedCardNumbers: (order: number, value: string) => boolean;
}

const CardNumbers = ({
  cardNumbers,
  errorMessage,
  isValidatedCardNumbers,
}: CardNumbersProps) => {
  const cardRefs = useContext(RefContext);

  const handleCardInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target instanceof HTMLInputElement)) return;
    const currentOrder = Number(e.target.dataset['order']);

    if (!isValidatedCardNumbers(currentOrder, e.target.value)) return;

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
          inputMode="numeric"
        />
        {cardNumbers[0].length === 4 && <Styled.Paragraph>-</Styled.Paragraph>}
        <CardInput
          type="text"
          maxLength={4}
          ref={cardRefs[1]}
          onChange={handleCardInputChange}
          value={cardNumbers[1]}
          order={1}
          placeholder={'0000'}
          required={true}
          inputMode="numeric"
        />
        {cardNumbers[1].length === 4 && <Styled.Paragraph>-</Styled.Paragraph>}
        <CardInput
          type="password"
          maxLength={4}
          ref={cardRefs[2]}
          onChange={handleCardInputChange}
          value={cardNumbers[2]}
          order={2}
          placeholder={'0000'}
          required={true}
          inputMode="numeric"
        />
        {cardNumbers[2].length === 4 && <Styled.Paragraph>-</Styled.Paragraph>}
        <CardInput
          type="password"
          maxLength={4}
          ref={cardRefs[3]}
          onChange={handleCardInputChange}
          value={cardNumbers[3]}
          order={3}
          placeholder={'0000'}
          required={true}
          inputMode="numeric"
        />
      </Styled.Wrapper>
      <CardErrorLabel errorMessage={errorMessage} />
    </>
  );
};

export default CardNumbers;
