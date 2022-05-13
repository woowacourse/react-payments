import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Input from 'components/Input/index';

const CardNumberWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  background-color: #ecebf1;
  border-radius: 7px;
`;

const Dash = styled.span`
  width: 10px;
  height: 45px;
  margin: 0 10px;
  color: #111;
`;

const CardNumberInput = ({
  onChangeFirstCardNumber,
  onChangeSecondCardNumber,
  onChangeThirdCardNumber,
  onChangeFourthCardNumber,
  cardNumbers,
}) => {
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

  const onChangeCardNumber = (e) => {
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
    <CardNumberWrapper>
      <Input
        scale="medium"
        value={cardNumbers[0]}
        onChange={(e) => {
          onChangeFirstCardNumber(e);
          onChangeCardNumber(e);
        }}
        maxLength={4}
        ref={firstCardNumberRef}
        data-testid="first-card-number"
      />
      <Dash>-</Dash>
      <Input
        scale="medium"
        value={cardNumbers[1]}
        onChange={(e) => {
          onChangeSecondCardNumber(e);
          onChangeCardNumber(e);
        }}
        maxLength={4}
        ref={secondCardNumberRef}
        data-testid="second-card-number"
      />
      <Dash>-</Dash>
      <Input
        scale="medium"
        type="password"
        value={cardNumbers[2]}
        onChange={(e) => {
          onChangeThirdCardNumber(e);
          onChangeCardNumber(e);
        }}
        maxLength={4}
        ref={thirdCardNumberRef}
        data-testid="third-card-number"
      />
      <Dash>-</Dash>
      <Input
        scale="medium"
        type="password"
        value={cardNumbers[3]}
        onChange={(e) => {
          onChangeFourthCardNumber(e);
          onChangeCardNumber(e);
        }}
        maxLength={4}
        ref={fourthCardNumberRef}
        data-testid="fourth-card-number"
      />
    </CardNumberWrapper>
  );
};

CardNumberInput.propTypes = {
  onChangeFirstCardNumber: PropTypes.func,
  onChangeSecondCardNumber: PropTypes.func,
  onChangeThirdCardNumber: PropTypes.func,
  onChangeFourthCardNumber: PropTypes.func,
  firstCardNumber: PropTypes.string,
  secondCardNumber: PropTypes.string,
  thirdCardNumber: PropTypes.string,
  fourthCardNumber: PropTypes.string,
};

export default CardNumberInput;
