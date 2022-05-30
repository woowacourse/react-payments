import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Input from 'components/Input/index';

const CardNumbersWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  background-color: #ecebf1;
  border-radius: 7px;

  & > div {
    display: flex;
  }
`;

const Dash = styled.span`
  width: 10px;
  height: 45px;
  margin: 0 10px;
  color: #111;
`;

type CardNumbersInputProps = {
  onChangeFirstCardNumber: Function;
  onChangeSecondCardNumber: Function;
  onChangeThirdCardNumber: Function;
  onChangeFourthCardNumber: Function;
  cardNumbers: Array<number>;
};

const CardNumbersInput = ({
  onChangeFirstCardNumber,
  onChangeSecondCardNumber,
  onChangeThirdCardNumber,
  onChangeFourthCardNumber,
  cardNumbers,
}: CardNumbersInputProps) => {
  const [currentElementIndex, setCurrentElementIndex] = useState(0);

  const firstCardNumberRef = useRef(null);
  const secondCardNumberRef = useRef(null);
  const thirdCardNumberRef = useRef(null);
  const fourthCardNumberRef = useRef(null);

  const cardRefList = [
    firstCardNumberRef,
    secondCardNumberRef,
    thirdCardNumberRef,
    fourthCardNumberRef,
  ];

  const cardChangeEvents = [
    onChangeFirstCardNumber,
    onChangeSecondCardNumber,
    onChangeThirdCardNumber,
    onChangeFourthCardNumber,
  ];

  const onChangeCardNumbers = (e) => {
    if (e.target.value.length === 4) {
      const nextFocusIndex = cardRefList.findIndex(
        (cardElement) => cardElement.current.value.length < 4,
      );
      setCurrentElementIndex(nextFocusIndex);
    }
  };

  useEffect(() => {
    if (currentElementIndex === -1) {
      return;
    }
    cardRefList[currentElementIndex].current.focus();
  }, [currentElementIndex]);

  return (
    <CardNumbersWrapper>
      {cardNumbers.map((card, index) => (
        <>
          <Input
            scale="medium"
            value={cardNumbers[index]}
            key={index}
            onChange={(e) => {
              cardChangeEvents[index](e);
              onChangeCardNumbers(e);
            }}
            maxLength={4}
            ref={cardRefList[index]}
          />
          {index < 3 && <Dash>-</Dash>}
        </>
      ))}
    </CardNumbersWrapper>
  );
};

CardNumbersInput.propTypes = {
  onChangeFirstCardNumber: PropTypes.func,
  onChangeSecondCardNumber: PropTypes.func,
  onChangeThirdCardNumber: PropTypes.func,
  onChangeFourthCardNumber: PropTypes.func,
  firstCardNumber: PropTypes.string,
  secondCardNumber: PropTypes.string,
  thirdCardNumber: PropTypes.string,
  fourthCardNumber: PropTypes.string,
};

export default CardNumbersInput;
