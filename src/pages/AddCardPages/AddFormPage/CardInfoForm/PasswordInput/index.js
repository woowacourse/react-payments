import { Input, Label } from '../../../../../components';

export const PasswordInput = () => {
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
          />
        ))}
      </div>
    </>
  );
};
