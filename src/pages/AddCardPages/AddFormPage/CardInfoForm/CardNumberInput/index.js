import { createRef, useEffect, useState } from 'react';
import { Container, Input, Label, Text } from '../../../../../components';
import { handleBlockInvalidChar, handleCardNumberInputChange } from './handler';
import { CARD_NUMBER_UNIT_LENGTH } from '../../../../../constants';

export const CardNumberInput = ({
  setCardCompany,
  setIsModalOpen,
  setCardNumberInString,
  expirationDateInputRef,
}) => {
  const [fourDigit, setFourDigit] = useState({
    first: '',
    second: '',
    third: '',
    fourth: '',
  });

  const firstCardNumberInput = createRef();
  const secondCardNumberInput = createRef();
  const thirdCardNumberInput = createRef();
  const fourthCardNumberInput = createRef();

  const nextInput = {
    first: secondCardNumberInput,
    second: thirdCardNumberInput,
    third: fourthCardNumberInput,
    fourth: expirationDateInputRef,
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
          name="first"
          value={fourDigit.first}
          onChange={(e) =>
            handleCardNumberInputChange({
              e,
              nextInput,
              fourDigit,
              setFourDigit,
              setCardCompany,
              setIsModalOpen,
              setCardNumberInString,
            })
          }
          onKeyDown={handleBlockInvalidChar}
        />
        <Dash length={fourDigit.first.length} />
        <Input
          className="CardNumberInput__Field"
          type="number"
          ref={secondCardNumberInput}
          name="second"
          value={fourDigit.second}
          onChange={(e) =>
            handleCardNumberInputChange({
              e,
              nextInput,
              fourDigit,
              setFourDigit,
              setCardCompany,
              setIsModalOpen,
              setCardNumberInString,
            })
          }
          onKeyDown={handleBlockInvalidChar}
        />
        <Dash length={fourDigit.second.length} />
        <Input
          className="CardNumberInput__Field"
          type="password"
          ref={thirdCardNumberInput}
          name="third"
          value={fourDigit.third}
          onChange={(e) =>
            handleCardNumberInputChange({
              e,
              nextInput,
              fourDigit,
              setFourDigit,
              setCardCompany,
              setIsModalOpen,
              setCardNumberInString,
            })
          }
          onKeyDown={handleBlockInvalidChar}
        />
        <Dash length={fourDigit.third.length} />
        <Input
          className="CardNumberInput__Field"
          type="password"
          ref={fourthCardNumberInput}
          name="fourth"
          value={fourDigit.fourth}
          onChange={(e) =>
            handleCardNumberInputChange({
              e,
              nextInput,
              fourDigit,
              setFourDigit,
              setCardCompany,
              setIsModalOpen,
              setCardNumberInString,
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
