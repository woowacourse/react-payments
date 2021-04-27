import { EXPIRATION_DATE_FORMAT_LENGTH } from '../../../../../constants';

export const handleExpirationDateInputChange = (props) => {
  const { e, setExpirationDate, nextInput } = props;
  const inputValue = e.target.value;
  const inputName = e.target.name;
  const slicedInputValue =
    inputValue.length > EXPIRATION_DATE_FORMAT_LENGTH[inputName]
      ? inputValue.slice(0, EXPIRATION_DATE_FORMAT_LENGTH[inputName])
      : inputValue;

  if (slicedInputValue.length === EXPIRATION_DATE_FORMAT_LENGTH[inputName]) {
    nextInput[inputName]?.current.focus();
  }
  setExpirationDate({ [inputName]: slicedInputValue });
};
