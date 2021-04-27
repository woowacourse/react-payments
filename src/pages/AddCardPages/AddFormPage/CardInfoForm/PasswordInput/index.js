import { useState, createRef, forwardRef } from 'react';
import { Input, Label } from '../../../../../components';
import { handlePasswordInputChange } from './handler';

export const PasswordInput = forwardRef((props, firstRef) => {
  const { setPasswordInString } = props;
  const [password, setPassword] = useState({ first: '', second: '' });
  const secondRef = createRef();

  return (
    <>
      <Label>카드 비밀번호</Label>
      <div className="CardPasswordInput">
        {[...Array(2)].map((_, index) => (
          <Input
            key={`filled-${index}`}
            container="CardInfoForm__Input__Filler--filled CardPasswordInput__Filler"
            className="CardPasswordInput__Field"
            type="password"
            name={index === 0 ? 'first' : 'second'}
            value={password[index]}
            onChange={(e) =>
              handlePasswordInputChange({
                e,
                password,
                setPassword,
                secondRef,
                setPasswordInString,
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
      </div>
    </>
  );
});

PasswordInput.displayName = 'passwordInputRef';
