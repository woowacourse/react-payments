import { createRef, useEffect, useState } from 'react';
import { Container, Input, Label, Text } from '../../../../../components';
import { handleBlockInvalidChar, handleCardNumberInputChange } from './handler';
import { CARD_NUMBER_UNIT_LENGTH } from '../../../../../constants';

export const CardNumberInput = ({ setCardCompany, setIsModalOpen }) => {
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
          onChange={(e) =>
            handleCardNumberInputChange({
              e,
              nextInput,
              fourDigit,
              setFourDigit,
              setCardCompany,
              setIsModalOpen,
            })
          }
          onKeyDown={handleBlockInvalidChar}
        />
        <Dash length={fourDigit.firstFourDigits.length} />
        <Input
          className="CardNumberInput__Field"
          type="number"
          ref={secondCardNumberInput}
          name="secondFourDigits"
          value={fourDigit.secondFourDigits}
          onChange={(e) =>
            handleCardNumberInputChange({
              e,
              nextInput,
              fourDigit,
              setFourDigit,
              setCardCompany,
              setIsModalOpen,
            })
          }
          onKeyDown={handleBlockInvalidChar}
        />
        <Dash length={fourDigit.secondFourDigits.length} />
        <Input
          className="CardNumberInput__Field"
          type="password"
          ref={thirdCardNumberInput}
          name="thirdFourDigits"
          value={fourDigit.thirdFourDigits}
          onChange={(e) =>
            handleCardNumberInputChange({
              e,
              nextInput,
              fourDigit,
              setFourDigit,
              setCardCompany,
              setIsModalOpen,
            })
          }
          onKeyDown={handleBlockInvalidChar}
        />
        <Dash length={fourDigit.thirdFourDigits.length} />
        <Input
          className="CardNumberInput__Field"
          type="password"
          ref={fourthCardNumberInput}
          name="fourthFourDigits"
          value={fourDigit.fourthFourDigits}
          onChange={(e) =>
            handleCardNumberInputChange({
              e,
              nextInput,
              fourDigit,
              setFourDigit,
              setCardCompany,
              setIsModalOpen,
            })
          }
          onKeyDown={handleBlockInvalidChar}
        />
      </Container>
    </>
  );
};

function Dash({ length }) {
  const className = length === CARD_NUMBER_UNIT_LENGTH ? 'Dash' : 'Dash Dash--hidden';
  return (
    <Text className={className} width="1rem">
      -
    </Text>
  );
}
