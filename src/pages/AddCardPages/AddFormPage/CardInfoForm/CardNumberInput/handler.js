import { CARD_NUMBER_UNIT_LENGTH, CARD_COMPANY_LIST } from '../../../../../constants';

export const handleBlockInvalidChar = (e) =>
  ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();

export const handleCardNumberInputChange = (props) => {
  const { e, nextInput, fourDigit, setFourDigit, setCardCompany, setIsModalOpen } = props;
  const inputValue = e.target.value;
  const inputName = e.target.name;
  const slicedInputValue =
    inputValue.length > CARD_NUMBER_UNIT_LENGTH
      ? inputValue.slice(0, CARD_NUMBER_UNIT_LENGTH)
      : inputValue;

  if (slicedInputValue.length === CARD_NUMBER_UNIT_LENGTH) {
    nextInput[inputName]?.current.focus();
  }
  setFourDigit({ ...fourDigit, [inputName]: slicedInputValue });
  setCardCompanyAfterValidation({
    inputName,
    slicedInputValue,
    fourDigit,
    setCardCompany,
    setIsModalOpen,
  });
};

function setCardCompanyAfterValidation(props) {
  const { inputName, slicedInputValue, fourDigit, setCardCompany, setIsModalOpen } = props;

  if (inputName !== 'second' || slicedInputValue.length < 4 || fourDigit.first < 4) {
    return;
  }

  const firstSixDigits = fourDigit.first + slicedInputValue.slice(0, 2);
  const cardCompany = CARD_COMPANY_LIST.find((company) =>
    company.patterns.includes(firstSixDigits),
  );

  if (!cardCompany) {
    setIsModalOpen(true);
    return;
  }
  setCardCompany({ name: cardCompany.name, color: cardCompany.color });
}
