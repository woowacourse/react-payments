import { PASSWORD_UNIT_LENGTH, FIRST } from '../../../../../constants';

export const handlePasswordInputChange = (props) => {
  const { e, password, setPassword, secondRef } = props;
  const inputName = e.target.name;
  const slicedInputValue = e.target.value.slice(0, PASSWORD_UNIT_LENGTH);

  if (inputName === FIRST && slicedInputValue.length === PASSWORD_UNIT_LENGTH) {
    secondRef?.current.focus();
  }
  setPassword({ ...password, [inputName]: slicedInputValue });
};
