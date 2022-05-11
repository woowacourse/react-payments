import PropTypes from 'prop-types';
import useErrorMessage from 'hooks/useErrorMessage';

import FieldSet from 'components/@common/FieldSet';
import TextField from 'components/@common/TextField';
import ToolTip from 'components/@common/ToolTip';

import { SECURITY_CODE } from 'constants';
import { validateSecurityCode } from 'validators';
import SecurityCodeTip from './styles';

function CardSecurityField({ securityCode, onChange }) {
  const { errorMessage, handleError } = useErrorMessage({
    state: securityCode,
    validate: validateSecurityCode,
  });

  return (
    <FieldSet title="보안 코드(CVC/CVV)" inputWidth={35} errorMessage={errorMessage}>
      <TextField
        type="password"
        name="securityCode"
        value={securityCode}
        maxLength={SECURITY_CODE.LENGTH}
        onChange={onChange}
        onBlur={handleError}
      />

      <ToolTip align="right" text="카드 뒷면의 숫자 3자리입니다.">
        <SecurityCodeTip />
      </ToolTip>
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
