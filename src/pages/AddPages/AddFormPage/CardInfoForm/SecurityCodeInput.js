import { Button, Input, Label } from '../../../../components';
import { SECURITY_CODE_LENGTH } from '../../../../constants';
import cvcImage from '../../../../images/cvc.png';

export const SecurityCodeInput = (props) => {
  const { securityCode, setSecurityCode, refToBeFocusedNext } = props;

  return (
    <>
      <Label>보안 코드(CVC/CVV)</Label>
      <div className="SecurityCodeInput__Wrapper">
        <Input
          className="SecurityCodeInput__Field"
          container="CardInfoForm__Input__Filler--filled SecurityCodeInput__Filler"
          type="password"
          onChange={(e) => handleSecurityCodeInputChange({ e, setSecurityCode, passwordInputRef: refToBeFocusedNext })}
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

function handleSecurityCodeInputChange(props) {
  const { e, setSecurityCode, passwordInputRef } = props;
  const slicedInputValue = e.target.value.slice(0, SECURITY_CODE_LENGTH);

  if (slicedInputValue.length === SECURITY_CODE_LENGTH) {
    passwordInputRef.current.focus();
  }
  setSecurityCode(slicedInputValue);
}
