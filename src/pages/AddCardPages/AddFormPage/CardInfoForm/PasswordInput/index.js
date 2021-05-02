import { createRef, forwardRef } from 'react';
import { Input, Label, Container } from '../../../../../components';
import { handlePasswordInputChange } from './handler';
import { FIRST, SECOND } from '../../../../../constants';

export const PasswordInput = forwardRef((props, firstRef) => {
  const { cardInfo, setCardInfo } = props;
  const { password } = cardInfo;
  const secondRef = createRef();

  return (
    <>
      <Label>카드 비밀번호</Label>
      <Container className="CardPasswordInput">
        {[...Array(2)].map((_, index) => (
          <Input
            key={`filled-${index}`}
            container="CardInfoForm__Input__Filler--filled CardPasswordInput__Filler"
            className="CardPasswordInput__Field"
            type="password"
            name={index === 0 ? FIRST : SECOND}
            value={password[index === 0 ? FIRST : SECOND]}
            onChange={(e) =>
              handlePasswordInputChange({
                e,
                password,
                setCardInfo,
                secondRef,
              })
            }
            ref={index === 0 ? firstRef : secondRef}
          />
        ))}
        {[...Array(2)].map((_, index) => (
          <Input
            key={`transparent-${index}`}
            container="CardInfoForm__Input__Filler--transparent CardPasswordInput__Filler"
            className="CardPasswordInput__Field"
            type="password"
            value="1"
            disabled
          />
        ))}
      </Container>
    </>
  );
});

PasswordInput.displayName = 'passwordInputRef';
