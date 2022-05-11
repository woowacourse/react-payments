import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledHelpContentText = styled.div`
  position: absolute;
  right: 30px;

  color: #04c09e;
  font-size: 12px;
  text-align: center;
  width: 200px;
`;

function HelpContentText({ children }) {
  return <StyledHelpContentText>{children}</StyledHelpContentText>;
}

HelpContentText.propTypes = {
  children: PropTypes.string,
};

export default HelpContentText;
