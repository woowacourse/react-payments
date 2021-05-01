import { ChangeEvent, Dispatch, SetStateAction, useRef, VFC } from 'react';
import { PasswordState } from '../..';
import { LABEL } from '../../../../../constants/addCardForm';
import Container from '../../../../shared/Container';
import Input from '../../../../shared/Input';
import AddCardInputContainer from '../../AddCardInputContainer';
import AddCardInputLabel from '../../AddCardInputLabel';
import { isValidPassword } from '../../validator';
import { PasswordDot } from './styles';

interface Props {
  password: PasswordState;
  setPassword: Dispatch<SetStateAction<PasswordState>>;
}

const PasswordInput: VFC<Props> = ({ password, setPassword }) => {
  const secondPasswordInputRef = useRef<HTMLInputElement>(null);

  const onChangePassword = ({ target: { value } }: ChangeEvent<HTMLInputElement>, index: 0 | 1) => {
    if (!isValidPassword(value)) return;

    const nextPassword: PasswordState = [...password];

    nextPassword[index as number] = value;
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
        <AddCardInputContainer width="23%" backgroundColor={'transparent'}>
          <PasswordDot />
        </AddCardInputContainer>
        <AddCardInputContainer width="23%" backgroundColor={'transparent'}>
          <PasswordDot />
        </AddCardInputContainer>
      </Container>
    </AddCardInputLabel>
  );
};

export default PasswordInput;
