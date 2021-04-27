import { EXPIRATION_DATE_FORMAT_LENGTH } from '../../../../../constants';

export const handleExpirationDateInputChange = (props) => {
  const { e, setExpirationDate, nextInput, setExpirationDateInString, expirationDate } = props;
  const inputValue = e.target.value;
  const inputName = e.target.name;
  const slicedInputValue =
    inputValue.length > EXPIRATION_DATE_FORMAT_LENGTH[inputName]
      ? inputValue.slice(0, EXPIRATION_DATE_FORMAT_LENGTH[inputName])
      : inputValue;

  if (slicedInputValue.length === EXPIRATION_DATE_FORMAT_LENGTH[inputName]) {
    nextInput[inputName]?.current.focus();
  }
  setExpirationDate((expirationDate) => ({ ...expirationDate, [inputName]: slicedInputValue }));
  if (
    inputName === 'year' &&
    slicedInputValue.length === EXPIRATION_DATE_FORMAT_LENGTH[inputName]
  ) {
    setExpirationDateInString(`${expirationDate.month}/${slicedInputValue}`);
  }
};
