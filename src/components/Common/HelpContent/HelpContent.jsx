import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import HelpContentText from './HelpContentText';

const StyledHelpContent = styled.div`
  border: 1px solid #bababa;
  border-radius: 100%;
  width: 32px;
  text-align: center;
  padding-left: 1px;
  padding-top: 1px;
`;
function HelpContent({ helpText }) {
  if (!helpText) {
    return;
  }
  const [isTouch, setIsTouch] = useState(false);
  const handleTouch = () => {
    if (isTouch) {
      setIsTouch(false);
    } else {
      setIsTouch(true);
    }
  };

  return (
    <>
      <StyledHelpContent onClick={handleTouch}>?</StyledHelpContent>
      {isTouch && <HelpContentText>{helpText}</HelpContentText>}
    </>
  );
}

export default HelpContent;

HelpContent.propTypes = {
  helpText: PropTypes.string,
};
