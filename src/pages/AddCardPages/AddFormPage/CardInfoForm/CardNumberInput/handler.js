import { CARD_NUMBER_UNIT_LENGTH, CARD_COMPANY_LIST } from '../../../../../constants';

export const handleBlockInvalidChar = (e) =>
  ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();

export const handleCardNumberInputChange = ({
  e,
  nextInput,
  fourDigit,
  setFourDigit,
  setCardCompany,
  setIsModalOpen,
}) => {
  const inputValue = e.target.value;
  const inputName = e.target.name;
  const slicedInputValue =
    inputValue.length > CARD_NUMBER_UNIT_LENGTH
      ? inputValue.slice(0, CARD_NUMBER_UNIT_LENGTH)
      : inputValue;

  if (slicedInputValue.length === CARD_NUMBER_UNIT_LENGTH) {
    nextInput[inputName]?.current.focus();
  }

  setFourDigit({
    ...fourDigit,
    [inputName]: slicedInputValue,
  });

  if (
    inputName !== 'secondFourDigits' ||
    slicedInputValue.length < 4 ||
    fourDigit.firstFourDigits < 4
  ) {
    return;
  }

  const firstSixDigits = fourDigit.firstFourDigits + slicedInputValue.slice(0, 2);
  const cardCompany = CARD_COMPANY_LIST.find((company) =>
    company.patterns.includes(firstSixDigits),
  );

  // TODO: 버튼 클릭으로 카드사 선택 및 Dimmed 클릭으로 모달 창 끄기 구현
  if (!cardCompany) {
    setIsModalOpen(true);
    return;
  }

  setCardCompany({ name: cardCompany.name, color: cardCompany.color });
};
