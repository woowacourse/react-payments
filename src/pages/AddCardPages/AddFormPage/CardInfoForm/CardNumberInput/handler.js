import { CARD_NUMBER_UNIT_LENGTH, CARD_COMPANY_LIST } from '../../../../../constants';

export const handleBlockInvalidChar = (e) =>
  ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();

export const handleCardNumberInputChange = (props) => {
  const {
    e,
    nextInput,
    fourDigit,
    setFourDigit,
    setCardCompany,
    setIsModalOpen,
    setCardNumberInString,
  } = props;
  const inputName = e.target.name;
  const slicedInputValue = e.target.value.slice(0, CARD_NUMBER_UNIT_LENGTH);

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
  setCardNumber({ inputName, slicedInputValue, fourDigit, setCardNumberInString });
};

function setCardCompanyAfterValidation(props) {
  const { inputName, slicedInputValue, fourDigit, setCardCompany, setIsModalOpen } = props;

  if (
    inputName !== 'second' ||
    slicedInputValue.length < CARD_NUMBER_UNIT_LENGTH ||
    fourDigit.first < CARD_NUMBER_UNIT_LENGTH
  ) {
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

function setCardNumber({ inputName, fourDigit, slicedInputValue, setCardNumberInString }) {
  if (inputName !== 'fourth' || slicedInputValue.length !== CARD_NUMBER_UNIT_LENGTH) {
    return;
  }

  const cardNumberInString = [fourDigit.first, fourDigit.second, '····', '····'].join(' ');
  setCardNumberInString(cardNumberInString);
}
