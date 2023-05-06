import { ForwardedRef, forwardRef, RefObject, useRef } from 'react';
import { cardCompanies } from '../../constants/cards';
import { CardCompanyName } from '../../types/Card';
import CardInput from '../CardInput/CardInput';
import CardLabel from '../CardLabel/CardLabel';
import * as Styled from './CardNumbers.styles';

export interface CardNumbersProps {
  cardNumbers: Record<number, string>;
  checkCardNumbers: (order: number, value: string) => boolean;
  nextRef: RefObject<HTMLInputElement>;
  onSetCardCompany: (value: CardCompanyName) => void;
  errorMessage: string;
}

const CardNumbers = forwardRef(
  (
    {
      cardNumbers,
      errorMessage,
      checkCardNumbers,
      nextRef,
      onSetCardCompany,
    }: CardNumbersProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const cardNumberRefs: Record<number, RefObject<HTMLInputElement>> = {
      0: ref as RefObject<HTMLInputElement>,
      1: useRef<HTMLInputElement>(null),
      2: useRef<HTMLInputElement>(null),
      3: useRef<HTMLInputElement>(null),
    };

    const handleCardInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!(e.target instanceof HTMLInputElement)) return;
      const currentOrder = Number(e.target.dataset['order']);
      const currentRef = cardNumberRefs[currentOrder].current;
      const { value } = e.target;

      if (currentOrder === 0) {
        onSetCardCompany(getCardCompanyByCodeNumber(value));
      }

      if (!checkCardNumbers(currentOrder, value)) return;
      if (currentRef?.value.length === 4) focusNext(currentOrder);
    };

    const focusNext = (currentOrder: number) => {
      if (!nextRef) return;
      if (currentOrder === 3) {
        nextRef.current?.focus();
        return;
      }
      cardNumberRefs[currentOrder + 1].current?.focus();
    };

    const getCardCompanyByCodeNumber = (value: string) => {
      if (value.length !== 4) return '카드사';
      const cardCompany = cardCompanies.find(
        (company) => company.codeNumber === Number(value)
      )?.name;

      if (!cardCompany) return '카드사';
      return cardCompany;
    };

    return (
      <Styled.Container>
        <CardLabel labelText="카드 번호" />
        <Styled.Wrapper>
          <CardInput
            type="numeric"
            maxLength={4}
            ref={cardNumberRefs[0]}
            onChange={handleCardInputChange}
            value={cardNumbers[0]}
            order={0}
            placeholder={'0000'}
            required={true}
            inputMode={'numeric'}
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
            inputMode={'numeric'}
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
            inputMode={'numeric'}
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
            inputMode={'numeric'}
          />
        </Styled.Wrapper>
        {errorMessage && (
          <Styled.ErorMessage>{errorMessage}</Styled.ErorMessage>
        )}
      </Styled.Container>
    );
  }
);

export default CardNumbers;
