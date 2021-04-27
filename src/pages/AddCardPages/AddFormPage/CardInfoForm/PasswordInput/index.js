import { forwardRef } from 'react';
import { Input, Label } from '../../../../../components';

export const PasswordInput = forwardRef((_, ref) => {
  return (
    <>
      <Label>카드 비밀번호</Label>
      <div className="CardPasswordInput">
        {['filled', 'filled', 'transparent', 'transparent'].map((style, index) => (
          <Input
            key={index}
            container={`CardInfoForm__Input__Filler--${style} CardPasswordInput__Filler`}
            className="CardPasswordInput__Field"
            type="password"
            value={style === 'transparent' ? '1' : ''}
            disabled={style === 'transparent'}
            ref={index === 0 ? ref : null}
          />
        ))}
      </div>
    </>
  );
});

PasswordInput.displayName = 'passwordInputRef';
