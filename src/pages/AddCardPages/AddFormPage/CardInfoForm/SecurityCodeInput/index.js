import { Button, Input, Label } from '../../../../../components';
import { handleSecurityCodeInputChange } from './handler';
import { SECURITY_CODE_LENGTH } from '../../../../../constants';
import cvcImage from '../../../../../images/cvc.png';

export const SecurityCodeInput = (props) => {
  const { securityCode, setSecurityCode, passwordInputRef } = props;

  return (
    <>
      <Label>보안 코드(CVC/CVV)</Label>
      <div className="SecurityCodeInput__Wrapper">
        <Input
          className="SecurityCodeInput__Field"
          container="CardInfoForm__Input__Filler--filled SecurityCodeInput__Filler"
          type="password"
          onChange={(e) => handleSecurityCodeInputChange({ e, setSecurityCode, passwordInputRef })}
          maxLength={SECURITY_CODE_LENGTH}
          value={securityCode}
        />
        <Button className="SecurityCodeInput__Guide__Button" type="button">
          ?
        </Button>
        <img className="SecurityCodeInput__Guide__Image" width="80" src={cvcImage} alt="cvc" />
      </div>
    </>
  );
};
