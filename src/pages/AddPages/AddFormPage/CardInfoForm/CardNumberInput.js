import { useRef, useEffect, useContext } from 'react';
import { CardInfoContext } from '../../../../contexts';
import { Container, Input, Label, Text } from '../../../../components';
import { CARD_NUMBER_UNIT_LENGTH, CARD_COMPANY_LIST, SECOND } from '../../../../constants';

export const CardNumberInput = (props) => {
  const { setIsModalOpen, refToBeFocusedNext } = props;
  const { number, setNumber, setCompany } = useContext(CardInfoContext);

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

function handleBlockInvalidChar(e) {
  if (['e', 'E', '+', '-'].includes(e.key)) {
    e.preventDefault();
  }
}

function handleCardNumberInputChange(props) {
  const { e, number, setNumber, setCompany, nextRef, setIsModalOpen } = props;
  const inputName = e.target.name;
  const slicedInputValue = e.target.value.slice(0, CARD_NUMBER_UNIT_LENGTH);

  if (slicedInputValue.length === CARD_NUMBER_UNIT_LENGTH) {
    nextRef[inputName]?.current.focus();
  }
  setNumber({ ...number, [inputName]: slicedInputValue });
  setCardCompanyAfterValidation({
    number,
    setCompany,
    slicedInputValue,
    inputName,
    setIsModalOpen,
  });
}

function setCardCompanyAfterValidation(props) {
  const { inputName, slicedInputValue, number, setCompany, setIsModalOpen } = props;

  if (
    inputName !== SECOND ||
    slicedInputValue.length < CARD_NUMBER_UNIT_LENGTH ||
    number.first < CARD_NUMBER_UNIT_LENGTH
  ) {
    return;
  }

  const firstSixDigits = number.first + slicedInputValue.slice(0, 2);
  const company = CARD_COMPANY_LIST.find((company) => company.patterns.includes(firstSixDigits));

  if (!company) {
    setIsModalOpen(true);
    return;
  }
  setCompany({ name: company.name, color: company.color });
}
