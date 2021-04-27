import { Button, Input, Label } from '../../../../../components';
import cvcImage from '../../../../../images/cvc.png';

export const SecurityCodeInput = () => {
  return (
    <>
      <Label>보안 코드(CVC/CVV)</Label>
      <div className="SecurityCodeInput__Wrapper">
        <Input
          className="SecurityCodeInput__Field"
          container="CardInfoForm__Input__Filler--filled SecurityCodeInput__Filler"
          type="password"
        />
        <Button theme="question-mark" type="button">
          ?
        </Button>
        <img className="SecurityCodeInput__GuideImage" width="80" src={cvcImage} alt="cvc" />
      </div>
    </>
  );
};
