import { createRef, useEffect } from 'react';
import { Container, Input, Label, Text } from '../../../../../components';
import { handleBlockInvalidChar, handleCardNumberInputChange } from './handler';
import { CARD_NUMBER_UNIT_LENGTH, CARD_NUMBER_INPUT } from '../../../../../constants';

export const CardNumberInput = (props) => {
  const { cardInfo, setCardInfo, setIsModalOpen, expirationDateInputRef } = props;
  const { cardNumbers } = cardInfo;

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
          value={cardNumbers.first}
          onChange={(e) =>
            handleCardNumberInputChange({ e, nextInput, cardNumbers, setCardInfo, setIsModalOpen })
          }
          onKeyDown={handleBlockInvalidChar}
        />
        <Dash length={cardNumbers[CARD_NUMBER_INPUT.FIRST]?.length} />
        <Input
          className="CardNumberInput__Field"
          type="number"
          ref={secondCardNumberInput}
          name="second"
          value={cardNumbers.second}
          onChange={(e) =>
            handleCardNumberInputChange({ e, nextInput, cardNumbers, setCardInfo, setIsModalOpen })
          }
          onKeyDown={handleBlockInvalidChar}
        />
        <Dash length={cardNumbers[CARD_NUMBER_INPUT.SECOND]?.length} />
        <Input
          className="CardNumberInput__Field"
          type="password"
          ref={thirdCardNumberInput}
          name="third"
          value={cardNumbers.third}
          onChange={(e) =>
            handleCardNumberInputChange({ e, nextInput, cardNumbers, setCardInfo, setIsModalOpen })
          }
          onKeyDown={handleBlockInvalidChar}
        />
        <Dash length={cardNumbers[CARD_NUMBER_INPUT.THIRD]?.length} />
        <Input
          className="CardNumberInput__Field"
          type="password"
          ref={fourthCardNumberInput}
          name="fourth"
          value={cardNumbers.fourth}
          onChange={(e) =>
            handleCardNumberInputChange({ e, nextInput, cardNumbers, setCardInfo, setIsModalOpen })
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
