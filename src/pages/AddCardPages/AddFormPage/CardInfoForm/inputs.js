import { createRef, useEffect, useState } from 'react';
import { Container, Input, Label, Text } from '../../../../components';
import { CARD_NUMBER_UNIT_LENGTH } from '../../../../constants';

const Dash = ({ length }) => {
  const className = length === CARD_NUMBER_UNIT_LENGTH ? 'Dash' : 'Dash Dash--hidden';
  return (
    <Text className={className} width="1rem">
      -
    </Text>
  );
};

export const CardNumberInput = () => {
  const [fourDigit, setFourDigit] = useState({
    firstFourDigits: '',
    secondFourDigits: '',
    thirdFourDigits: '',
    fourthFourDigits: '',
  });
  const firstCardNumberInput = createRef();
  const secondCardNumberInput = createRef();
  const thirdCardNumberInput = createRef();
  const fourthCardNumberInput = createRef();

  const nextInput = {
    firstFourDigits: secondCardNumberInput,
    secondFourDigits: thirdCardNumberInput,
    thirdFourDigits: fourthCardNumberInput,
    fourthFourDigits: null,
  };

  const handleBlockInvalidChar = (e) => ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();

  const handleCardNumberInputChange = ({ target }) => {
    const inputValue = target.value;
    const slicedInputValue =
      inputValue.length > CARD_NUMBER_UNIT_LENGTH
        ? inputValue.slice(0, CARD_NUMBER_UNIT_LENGTH)
        : inputValue;

    if (slicedInputValue.length === CARD_NUMBER_UNIT_LENGTH) {
      nextInput[target.name]?.current.focus();
    }
    setFourDigit({
      ...fourDigit,
      [target.name]: slicedInputValue,
    });
  };

  useEffect(() => {
    firstCardNumberInput.current?.focus();
  }, []);

  return (
    <>
      <Label>카드 번호</Label>
      <Container className="CardInfoForm__Input__Filler--filled CardNumberInput__Filler">
        <Input
          className="CardNumberInput__Field"
          type="number"
          ref={firstCardNumberInput}
          name="firstFourDigits"
          value={fourDigit.firstFourDigits}
          onChange={handleCardNumberInputChange}
          onKeyDown={handleBlockInvalidChar}
        />
        <Dash length={fourDigit.firstFourDigits.length} />
        <Input
          className="CardNumberInput__Field"
          type="number"
          ref={secondCardNumberInput}
          name="secondFourDigits"
          value={fourDigit.secondFourDigits}
          onChange={handleCardNumberInputChange}
          onKeyDown={handleBlockInvalidChar}
        />
        <Dash length={fourDigit.secondFourDigits.length} />
        <Input
          className="CardNumberInput__Field"
          type="password"
          ref={thirdCardNumberInput}
          name="thirdFourDigits"
          value={fourDigit.thirdFourDigits}
          onChange={handleCardNumberInputChange}
          onKeyDown={handleBlockInvalidChar}
        />
        <Dash length={fourDigit.thirdFourDigits.length} />
        <Input
          className="CardNumberInput__Field"
          type="password"
          ref={fourthCardNumberInput}
          name="fourthFourDigits"
          value={fourDigit.fourthFourDigits}
          onChange={handleCardNumberInputChange}
          onKeyDown={handleBlockInvalidChar}
        />
      </Container>
    </>
  );
};

export const ExpirationDateInput = () => {
  const slash = (
    <Text color="#737373" fontSize="0.75rem" textAlign="start" width="1rem">
      /
    </Text>
  );

  return (
    <>
      <Label>만료일</Label>
      <Container className="CardInfoForm__Input__Filler--filled ExpirationDateInput__Filler">
        <Input className="ExpirationDateInput__Field" placeholder="MM" type="number" />
        {slash}
        <Input className="ExpirationDateInput__Field" placeholder="YY" type="number" />
      </Container>
    </>
  );
};

export const UserNameInput = () => {
  return (
    <>
      <Label>카드 소유자 이름(선택)</Label>
      <Input
        className="CardOwnerInput__Field"
        container="CardInfoForm__Input__Filler--filled CardOwnerInput__Filler"
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
      />
    </>
  );
};

export const SecurityCodeInput = () => {
  return (
    <>
      <Label>보안 코드(CVC/CVV)</Label>
      <Input
        className="SecurityCodeInput__Field"
        container="CardInfoForm__Input__Filler--filled SecurityCodeInput__Filler"
        type="password"
      />
    </>
  );
};

export const PasswordInput = () => {
  return (
    <>
      <Label>카드 비밀번호</Label>
      <div className="CardPasswordInput">
        {['filled', 'filled', 'transparent', 'transparent'].map((style, index) => (
          <Input
            key={index}
            container={`CardInfoForm__Input__Filler--${style} CardPasswordInput__Filler`}
            className="CardPasswordInput__Field"
            type="password"
          />
        ))}
      </div>
    </>
  );
};
