import { useRef, forwardRef, useContext } from 'react';
import { CardInfoContext } from '../../../../contexts';
import { Input, Label } from '../../../../components';
import { FIRST, SECOND, PASSWORD_UNIT_LENGTH } from '../../../../constants';

export const PasswordInput = forwardRef((_, firstRef) => {
  const { password, setPassword } = useContext(CardInfoContext);
  const secondRef = useRef();

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

function handlePasswordInputChange(props) {
  const { e, password, setPassword, secondRef } = props;
  const inputName = e.target.name;
  const slicedInputValue = e.target.value.slice(0, PASSWORD_UNIT_LENGTH);

  if (inputName === FIRST && slicedInputValue.length === PASSWORD_UNIT_LENGTH) {
    secondRef?.current.focus();
  }
  setPassword({ ...password, [inputName]: slicedInputValue });
}

PasswordInput.displayName = 'PasswordInput';
