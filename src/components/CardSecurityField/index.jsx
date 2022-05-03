import PropTypes from 'prop-types';
import useErrorMessage from 'hooks/useErrorMessage';

import FieldSet from 'components/@common/FieldSet';
import TextField from 'components/@common/TextField';

import { SECURITY_CODE } from 'constants';
import { validateSecurityCode } from 'validators';

function CardSecurityField({ securityCode, onChange }) {
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
        onChange={onChange}
        onBlur={handleError}
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
