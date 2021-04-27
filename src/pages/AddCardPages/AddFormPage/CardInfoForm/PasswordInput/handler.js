import { PASSWORD_UNIT_LENGTH } from '../../../../../constants';

export const handlePasswordInputChange = (props) => {
  const { e, password, setPassword, secondRef, setPasswordInString } = props;
  const inputName = e.target.name;
  const slicedInputValue = e.target.value.slice(0, PASSWORD_UNIT_LENGTH);

  setPassword({ [inputName]: slicedInputValue });
  if (inputName === 'first' && slicedInputValue.length === PASSWORD_UNIT_LENGTH) {
    secondRef?.current.focus();
  }
  if (inputName === 'second' && slicedInputValue.length === PASSWORD_UNIT_LENGTH) {
    setPasswordInString([password.first, slicedInputValue].join(''));
  }
};
