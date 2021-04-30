import { createRef, forwardRef } from 'react';
import { Input, Label } from '../../../../../components';
import { handlePasswordInputChange } from './handler';
import { FIRST, SECOND } from '../../../../../constants';

export const PasswordInput = forwardRef((props, firstRef) => {
  const { password, setPassword } = props;
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
            name={index === 0 ? FIRST : SECOND}
            value={password[index === 0 ? FIRST : SECOND]}
            onChange={(e) => handlePasswordInputChange({ e, password, setPassword, secondRef })}
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

PasswordInput.displayName = 'PasswordInput';
