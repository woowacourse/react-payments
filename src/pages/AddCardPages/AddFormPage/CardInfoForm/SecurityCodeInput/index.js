import { Input, Label } from '../../../../../components';

export const SecurityCodeInput = () => {
  return (
    <>
      <Label>보안 코드(CVC/CVV)</Label>
      <Input
        className="SecurityCodeInput__Field"
        container="CardInfoForm__Input__Filler--filled SecurityCodeInput__Filler"
        type="password"
      />
    </>
  );
};
