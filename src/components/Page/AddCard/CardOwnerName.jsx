import React from 'react';

import styled from 'styled-components';
import PropTypes from 'prop-types';
import Input from '../../Input';
import FieldSet from '../../FieldSet';

const CardOwnerContainer = styled.div`
  padding-top: 10px;
  position: relative;
  width: fit-content;
  height: fit-content;
`;

const MaxNumberIndicator = styled.span`
  font-size: 12px;
  position: absolute;
  top: 16px;
  right: 20px;
`;

const showOwnerNameLength = (ownerName) => {
  const ownerNameLength = String(ownerName.length);
  return `${ownerNameLength.padStart(2, '0')}/30`;
};

const CardOwnerName = ({ ownerName, onChangeOwnerName, isError }) => {
  return (
    <CardOwnerContainer>
      <MaxNumberIndicator>{showOwnerNameLength(ownerName)}</MaxNumberIndicator>
      <FieldSet
        id="cardOwnerName"
        description="카드 소유자 이름(선택)"
        errorMessage="이름은 30자 이하 영문이여야 합니다."
        isError={isError}
      >
        <Input
          id="cardOwnerName"
          scale="large"
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          maxLength={30}
          value={ownerName}
          onChange={onChangeOwnerName}
          data-testid="card-owner-name"
        />
      </FieldSet>
    </CardOwnerContainer>
  );
};

CardOwnerName.propTypes = {
  ownerName: PropTypes.string,
  onChangeOwnerName: PropTypes.func,
  isError: PropTypes.bool,
};

export default CardOwnerName;
