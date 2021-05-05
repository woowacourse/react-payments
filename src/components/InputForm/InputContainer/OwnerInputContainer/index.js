import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './style.js';
import { GUIDE_MESSAGES } from '../../../../utils/constants/messages.js';

export const OwnerInputContainer = ({ owner, type, maxLength, handleChange }) => {
  return (
    <Styled.Container>
      <Styled.Input
        value={owner}
        type={type}
        maxLength={maxLength}
        onChange={handleChange}
        placeholder={GUIDE_MESSAGES.OWNER_PLACEHOLDER}
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
