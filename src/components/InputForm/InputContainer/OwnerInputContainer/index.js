import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './style.js';

export const OwnerInputContainer = ({ owner, type, maxLength, handleChange }) => {
  return (
    <Styled.Container>
      <Styled.Input
        value={owner}
        type={type}
        maxLength={maxLength}
        onChange={handleChange}
        placeholder={'카드에 표시된 이름과 동일하게 입력하세요.'}
      />
    </Styled.Container>
  );
};

OwnerInputContainer.propTypes = {
  owner: PropTypes.string,
};

OwnerInputContainer.defaultProps = {
  owner: 'SUN',
};
