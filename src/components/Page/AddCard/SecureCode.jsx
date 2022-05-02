import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import FieldSet from '../../FieldSet';
import Input from '../../Input';
import Tooltip from '../../ToolTip';

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
      {
        <SecureCodeInputContainer>
          <Input
            id="secureCode"
            scale="medium"
            type="password"
            maxLength={3}
            value={secureCode}
            onChange={onChangeSecureCode}
          />
          <Tooltip />
        </SecureCodeInputContainer>
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
