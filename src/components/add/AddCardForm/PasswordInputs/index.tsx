import { ChangeEvent, useRef, VFC } from 'react';
import { PasswordState } from '..';
import { LABEL } from '../../../../constants/addCardForm';
import { ALERT } from '../../../../constants/messages';
import Container from '../../../shared/Container';
import Input from '../../../shared/Input';
import AddCardInputLabel from '../AddCardInputLabel';
import { AddCardInputContainer } from '../styles';
import { isValidPassword } from '../validator';

interface Props {
  password: PasswordState;
  setPassword: (password: PasswordState) => void;
}

const PasswordInputs: VFC<Props> = ({ password, setPassword }) => {
  const secondPasswordInputRef = useRef<HTMLInputElement>(null);

  const onChangePassword = ({ target: { value } }: ChangeEvent<HTMLInputElement>, index: number) => {
    if (!isValidPassword(value)) return;

    const nextPassword: PasswordState = [...password];

    try {
      nextPassword[index] = value;
    } catch (error) {
      console.error('Segmentation Fault: invalid index - ' + error);
      alert(ALERT.SYSTEM_ERROR);
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
          <Input type="password" textCenter value={password[0]} onChange={event => onChangePassword(event, 0)} />
        </AddCardInputContainer>
        <AddCardInputContainer width="23%">
          <Input
            type="password"
            ref={secondPasswordInputRef}
            textCenter
            value={password[1]}
            onChange={event => onChangePassword(event, 1)}
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
