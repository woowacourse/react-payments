import React, { useReducer } from "react";
import styled from "styled-components";

import HelpIconImage from "assets/images/questionMark.svg";

const StyledIconContainer = styled.div`
  position: relative;
`;

const StyledIcon = styled.img`
  &:hover {
    cursor: pointer;
  }
`;

const StyledDescription = styled.p<{ isOpen: boolean }>`
  ${({ isOpen }) => !isOpen && `display: none;`}
  position: absolute;
  top: 5px;
  right: -205px;

  width: 200px;

  border: 1px solid #d2d2d2;
  border-radius: 5px;
  padding: 10px;
  z-index: 1;
  font-size: 12px;

  background: #ffffff;
  -webkit-box-shadow: 1px 2px 5px 0px rgba(0, 0, 0, 0.4);
  box-shadow: 1px 2px 5px 0px rgba(0, 0, 0, 0.4);
`;

type Props = {
  description: string;
};

const HelperIcon = React.memo(({ description }: Props) => {
  const [isDescriptionOpen, toggleDescriptionOpen] = useReducer(
    (isOpen) => !isOpen,
    false
  );

  return (
    <StyledIconContainer>
      <StyledIcon
        src={HelpIconImage}
        onClick={toggleDescriptionOpen}
        role={"button"}
      />
      <StyledDescription isOpen={isDescriptionOpen}>
        {description}
      </StyledDescription>
    </StyledIconContainer>
  );
});

export default HelperIcon;
