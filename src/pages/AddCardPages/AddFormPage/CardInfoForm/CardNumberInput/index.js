import { createRef, useEffect } from 'react';
import { Container, Input, Label, Text } from '../../../../../components';
import { handleBlockInvalidChar, handleCardNumberInputChange } from './handler';
import { CARD_NUMBER_UNIT_LENGTH } from '../../../../../constants';

export const CardNumberInput = (props) => {
  const { cardInfo, setCardInfo, setIsModalOpen, expirationDateInputRef } = props;
  const { number } = cardInfo;

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
          value={number.first}
          onChange={(e) =>
            handleCardNumberInputChange({ e, nextInput, number, setCardInfo, setIsModalOpen })
          }
          onKeyDown={handleBlockInvalidChar}
        />
        <Dash length={number.first.length} />
        <Input
          className="CardNumberInput__Field"
          type="number"
          ref={secondCardNumberInput}
          name="second"
          value={number.second}
          onChange={(e) =>
            handleCardNumberInputChange({ e, nextInput, number, setCardInfo, setIsModalOpen })
          }
          onKeyDown={handleBlockInvalidChar}
        />
        <Dash length={number.second.length} />
        <Input
          className="CardNumberInput__Field"
          type="password"
          ref={thirdCardNumberInput}
          name="third"
          value={number.third}
          onChange={(e) =>
            handleCardNumberInputChange({ e, nextInput, number, setCardInfo, setIsModalOpen })
          }
          onKeyDown={handleBlockInvalidChar}
        />
        <Dash length={number.third.length} />
        <Input
          className="CardNumberInput__Field"
          type="password"
          ref={fourthCardNumberInput}
          name="fourth"
          value={number.fourth}
          onChange={(e) =>
            handleCardNumberInputChange({ e, nextInput, number, setCardInfo, setIsModalOpen })
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
