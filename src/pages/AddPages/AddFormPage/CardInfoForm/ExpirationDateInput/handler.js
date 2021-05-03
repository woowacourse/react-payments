import { EXPIRATION_DATE_LENGTH } from '../../../../../constants';

export const handleExpirationDateInputChange = (props) => {
  const { e, expirationDate, setExpirationDate, nextRef } = props;
  const inputName = e.target.name;
  const slicedInputValue = e.target.value.slice(0, EXPIRATION_DATE_LENGTH[inputName]);

  if (slicedInputValue.length === EXPIRATION_DATE_LENGTH[inputName]) {
    nextRef[inputName]?.current.focus();
  }
  setExpirationDate({ ...expirationDate, [inputName]: slicedInputValue });
};
