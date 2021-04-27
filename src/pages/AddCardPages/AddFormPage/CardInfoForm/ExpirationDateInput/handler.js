import { EXPIRATION_DATE_FORMAT_LENGTH } from '../../../../../constants';

export const handleExpirationDateInputChange = (props) => {
  const { e, setExpirationDate, nextInput, setExpirationDateInString, expirationDate } = props;
  const inputName = e.target.name;
  const slicedInputValue = e.target.value.slice(0, EXPIRATION_DATE_FORMAT_LENGTH[inputName]);

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
