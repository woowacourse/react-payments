import FieldSet from '../../FieldSet';
import Input from '../../Input';
import AskMarkTooltip from '../../AskMarkTooltip';
import PropTypes from 'prop-types';
import * as styled from './index.styled';

const SecureCode = ({ secureCode, onChangeSecureCode, isError }) => {
  return (
    <FieldSet
      id="secureCode"
      description="보안코드(CVC/CVV)"
      errorMessage="유효한 보안코드를 입력해주세요"
      isError={isError}
    >
      {
        <styled.Container>
          <Input
            id="secureCode"
            scale="medium"
            type="password"
            maxLength={3}
            value={secureCode}
            onChange={onChangeSecureCode}
          />
          <AskMarkTooltip />
        </styled.Container>
      }
    </FieldSet>
  );
};

SecureCode.propTypes = {
  secureCode: PropTypes.string,
  onChangeSecureCode: PropTypes.func,
  isError: PropTypes.bool,
};

export default SecureCode;
