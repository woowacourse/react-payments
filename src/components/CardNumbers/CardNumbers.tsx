import { useState, useRef } from 'react';
import styled from 'styled-components';
import CardInput from '../CardInput/CardInput';
import CardLabel from '../CardLabel/CardLabel';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ecebf1;
  border-radius: 7px;
`;

const Pargraph = styled.p`
  width: 32px;
`;

interface RefType {
  [key: number]: React.RefObject<HTMLInputElement>;
}

interface TypingType {
  [key: number]: string;
}

const CardNumbers = ({ cardNumbers, setCardNumbers }: any) => {
  const cardNumberRefs: RefType = {
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
      <Wrapper>
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
          <Pargraph>-</Pargraph>
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
          <Pargraph>-</Pargraph>
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
          <Pargraph>-</Pargraph>
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
      </Wrapper>
    </>
  );
};

export default CardNumbers;
