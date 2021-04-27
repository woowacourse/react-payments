import { PASSWORD_UNIT_LENGTH } from '../../../../../constants';

export const handlePasswordInputChange = (props) => {
  const { e, setPassword, secondRef } = props;
  const inputName = e.target.name;
  const slicedInputValue = e.target.value.slice(0, PASSWORD_UNIT_LENGTH);

  setPassword({ [inputName]: slicedInputValue });
  if (inputName === '0' && slicedInputValue.length === PASSWORD_UNIT_LENGTH) {
    secondRef?.current.focus();
  }
};
