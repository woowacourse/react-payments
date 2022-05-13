import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import FieldSet from 'components/FieldSet';
import Input from 'components/Input';
import Tooltip from 'components/ToolTip';

const SecureCodeInputContainer = styled.div`
  width: fit-content;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const SecureCode = ({ secureCode, onChangeSecureCode, isError }) => {
  return (
    <FieldSet
      id="secureCode"
      description="보안코드(CVC/CVV)"
      errorMessage="유효한 보안코드를 입력해주세요"
      isError={isError}
    >
      <SecureCodeInputContainer>
        <Input
          id="secureCode"
          scale="medium"
          type="password"
          maxLength={3}
          value={secureCode}
          onChange={onChangeSecureCode}
          data-testid="secure-code"
        />
        <Tooltip />
      </SecureCodeInputContainer>
    </FieldSet>
  );
};

SecureCode.propTypes = {
  secureCode: PropTypes.string,
  onChangeSecureCode: PropTypes.func,
  isError: PropTypes.bool,
};

export default SecureCode;
