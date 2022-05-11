import { useContext } from 'react';
import useErrorMessage from 'hooks/useErrorMessage';
import CardContext from 'contexts';

import { FieldSet, TextField } from 'components/@common';

import { SECURITY_CODE } from 'constants';
import { validateSecurityCode } from 'validators';

function CardSecurityField() {
  const { securityCode, onChangeTextField } = useContext(CardContext);
  const { errorMessage, handleError } = useErrorMessage({
    state: securityCode,
    validate: validateSecurityCode,
  });

  return (
    <FieldSet title="보안 코드(CVC/CVV)" inputWidth={25} errorMessage={errorMessage}>
      <TextField
        type="password"
        name={SECURITY_CODE.TEXT_FIELD_NAME}
        value={securityCode}
        maxLength={SECURITY_CODE.LENGTH}
        onChange={onChangeTextField}
        onBlur={handleError}
      />
      <div className="input-security-code-tip">?</div>
    </FieldSet>
  );
}

export default CardSecurityField;
