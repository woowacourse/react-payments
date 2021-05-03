import { useRef, useEffect } from 'react';
import { Container, Input, Label, Text } from '../../../../../components';
import { handleBlockInvalidChar, handleCardNumberInputChange } from './handler';
import { CARD_NUMBER_UNIT_LENGTH } from '../../../../../constants';

export const CardNumberInput = (props) => {
  const { number, setNumber, setCompany, setIsModalOpen, refToBeFocusedNext } = props;
  const firstRef = useRef();
  const secondRef = useRef();
  const thirdRef = useRef();
  const fourthRef = useRef();
  const nextRef = {
    first: secondRef,
    second: thirdRef,
    third: fourthRef,
    fourth: refToBeFocusedNext,
  };

  useEffect(() => {
    firstRef.current?.focus();
  }, []);

  return (
    <>
      <Label>카드 번호</Label>
      <Container className="CardNumberInput__Filler CardInfoForm__Input__Filler--filled">
        <Input
          className="CardNumberInput__Field"
          type="number"
          ref={firstRef}
          name="first"
          value={number.first}
          onChange={(e) => handleCardNumberInputChange({ e, nextRef, number, setNumber, setCompany, setIsModalOpen })}
          onKeyDown={handleBlockInvalidChar}
        />
        <Separator length={number.first.length} />
        <Input
          className="CardNumberInput__Field"
          type="number"
          ref={secondRef}
          name="second"
          value={number.second}
          onChange={(e) => handleCardNumberInputChange({ e, nextRef, number, setNumber, setCompany, setIsModalOpen })}
          onKeyDown={handleBlockInvalidChar}
        />
        <Separator length={number.second.length} />
        <Input
          className="CardNumberInput__Field"
          type="password"
          ref={thirdRef}
          name="third"
          value={number.third}
          onChange={(e) => handleCardNumberInputChange({ e, nextRef, number, setNumber, setCompany, setIsModalOpen })}
          onKeyDown={handleBlockInvalidChar}
        />
        <Separator length={number.third.length} />
        <Input
          className="CardNumberInput__Field"
          type="password"
          ref={fourthRef}
          name="fourth"
          value={number.fourth}
          onChange={(e) => handleCardNumberInputChange({ e, nextRef, number, setNumber, setCompany, setIsModalOpen })}
          onKeyDown={handleBlockInvalidChar}
        />
      </Container>
    </>
  );
};

function Separator({ length }) {
  const classnames =
    length === CARD_NUMBER_UNIT_LENGTH
      ? 'CardNumberInput__Separator'
      : 'CardNumberInput__Separator CardNumberInput__Separator--hidden';

  return <Text className={classnames}>-</Text>;
}
