import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './style.js';

export const OwnerInputContainer = ({ owner, handleChange }) => {
  return (
    <Styled.Container>
      <Styled.Input value={owner} onChange={handleChange} />
    </Styled.Container>
  );
};

OwnerInputContainer.propTypes = {
  owner: PropTypes.string,
};

OwnerInputContainer.defaultProps = {
  owner: 'SUN',
};
