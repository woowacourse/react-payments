import { ChangeEvent, useRef, VFC } from 'react';
import { useHistory } from 'react-router';
import { PasswordState } from '..';
import { LABEL } from '../../../../constants/addCardForm';
import { ALERT } from '../../../../constants/messages';
import Container from '../../../shared/Container';
import VirtualKeyboardInput from '../../../shared/VirtualKeyboardInput';
import AddCardInputLabel from '../AddCardInputLabel';
import { AddCardInputContainer } from '../styles';
import { isValidPassword } from '../validator';

interface Props {
  password: PasswordState;
  setPassword: (password: PasswordState) => void;
}

const PasswordInputs: VFC<Props> = ({ password, setPassword }) => {
  const history = useHistory();
  const secondPasswordInputRef = useRef<HTMLInputElement>(null);
  const [firstDigit, secondDigit] = password;

  const onChangePassword = (value: string, index: number) => {
    if (!isValidPassword(value)) return;

    const nextPassword: PasswordState = [...password];

    try {
      nextPassword[index] = value;
    } catch (error) {
      console.error('Segmentation Fault: invalid index - ' + error);
      alert(ALERT.SYSTEM_ERROR);
      history.replace('/');
      return;
    }

    setPassword(nextPassword);

    if (index === 0 && value.length === 1) {
      secondPasswordInputRef.current?.focus();
    }
  };

  return (
    <AddCardInputLabel label={LABEL.PASSWORD}>
      <Container flex justifyContent="space-between" width="60%">
        <AddCardInputContainer width="23%">
          <VirtualKeyboardInput
            type="password"
            textCenter
            maxLength={1}
            value={firstDigit}
            onChange={value => onChangePassword(value, 0)}
          />
        </AddCardInputContainer>
        <AddCardInputContainer width="23%">
          <VirtualKeyboardInput
            type="password"
            ref={secondPasswordInputRef}
            textCenter
            maxLength={1}
            value={secondDigit}
            onChange={value => onChangePassword(value, 1)}
          />
        </AddCardInputContainer>
        <AddCardInputContainer width="23%">
          <span className="password-dot" />
        </AddCardInputContainer>
        <AddCardInputContainer width="23%">
          <span className="password-dot" />
        </AddCardInputContainer>
      </Container>
    </AddCardInputLabel>
  );
};

export default PasswordInputs;
