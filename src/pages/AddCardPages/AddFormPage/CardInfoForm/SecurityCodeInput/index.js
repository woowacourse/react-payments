import { useState } from 'react';
import { Button, Input, Label } from '../../../../../components';
import { handleSecurityCodeInputChange } from './handler';
import cvcImage from '../../../../../images/cvc.png';

export const SecurityCodeInput = (props) => {
  const { passwordInputRef, setSecurityCodeInString } = props;
  const [securityCode, setSecurityCode] = useState('');

  return (
    <>
      <Label>보안 코드(CVC/CVV)</Label>
      <div className="SecurityCodeInput__Wrapper">
        <Input
          className="SecurityCodeInput__Field"
          container="CardInfoForm__Input__Filler--filled SecurityCodeInput__Filler"
          type="password"
          onChange={(e) =>
            handleSecurityCodeInputChange({
              e,
              passwordInputRef,
              setSecurityCode,
              setSecurityCodeInString,
            })
          }
          maxLength="3"
          value={securityCode}
        />
        <Button theme="question-mark" type="button">
          ?
        </Button>
        <img className="SecurityCodeInput__GuideImage" width="80" src={cvcImage} alt="cvc" />
      </div>
    </>
  );
};
