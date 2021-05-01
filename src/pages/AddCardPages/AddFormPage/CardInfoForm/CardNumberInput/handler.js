import { CARD_NUMBER_UNIT_LENGTH, CARD_COMPANY_LIST, SECOND } from '../../../../../constants';

export const handleBlockInvalidChar = (e) =>
  ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();

export const handleCardNumberInputChange = (props) => {
  const { e, cardNumbers, setCardInfo, nextInput, setIsModalOpen } = props;
  const inputName = e.target.name;
  const slicedInputValue = e.target.value.slice(0, CARD_NUMBER_UNIT_LENGTH);

  if (slicedInputValue.length < CARD_NUMBER_UNIT_LENGTH) return;
  nextInput[inputName]?.current.focus();
  setCardInfo((prevState) => ({ ...prevState, cardNumbers: [...cardNumbers, slicedInputValue] }));
  setCardCompanyAfterValidation({
    cardNumbers,
    setCardInfo,
    slicedInputValue,
    inputName,
    setIsModalOpen,
  });
};

function setCardCompanyAfterValidation(props) {
  const { inputName, slicedInputValue, cardNumbers, setCardInfo, setIsModalOpen } = props;

  if (
    inputName !== SECOND ||
    slicedInputValue.length < CARD_NUMBER_UNIT_LENGTH ||
    cardNumbers.first < CARD_NUMBER_UNIT_LENGTH
  ) {
    return;
  }

  const firstSixDigits = cardNumbers.first + slicedInputValue.slice(0, 2);
  const company = CARD_COMPANY_LIST.find((company) => company.patterns.includes(firstSixDigits));

  if (!company) {
    setIsModalOpen(true);
    return;
  }
  setCardInfo((prevState) => ({
    ...prevState,
    company: { name: company.name, color: company.color },
  }));
}
