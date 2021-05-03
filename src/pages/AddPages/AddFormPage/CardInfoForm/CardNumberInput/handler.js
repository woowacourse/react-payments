import { CARD_NUMBER_UNIT_LENGTH, CARD_COMPANY_LIST, SECOND } from '../../../../../constants';

export const handleBlockInvalidChar = (e) => ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();

export const handleCardNumberInputChange = (props) => {
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
};

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
