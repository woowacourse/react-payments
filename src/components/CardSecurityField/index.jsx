import PropTypes from 'prop-types';
import { useState } from 'react';

import FieldSet from 'components/@common/FieldSet';
import TextField from 'components/@common/TextField';

import { validateSecurityCode } from 'validators';
import { SECURITY_CODE } from 'constants';

function CardSecurityField({ securityCode, onChange }) {
  const [errorMessage, setErrorMessage] = useState('');

  const onBlurSecurityCode = () => {
    try {
      validateSecurityCode(securityCode);
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <FieldSet title="보안 코드(CVC/CVV)" inputWidth={25} errorMessage={errorMessage}>
      <TextField
        type="password"
        name="securityCode"
        value={securityCode}
        onBlur={onBlurSecurityCode}
        onChange={onChange}
        maxLength={SECURITY_CODE.MAX_LENGTH}
      />
      <div className="input-security-code-tip">?</div>
    </FieldSet>
  );
}

CardSecurityField.defaultProps = {
  securityCode: '',
};

CardSecurityField.propTypes = {
  securityCode: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default CardSecurityField;
