import React, { useState } from 'react';
import styled from 'styled-components';

const StyledIconContainer = styled.div`
  position: relative;
`;

const StyledIcon = styled.img`
  &:hover {
    cursor: pointer;
  }
`;

const StyledDescription = styled.p<{ isOpen: boolean }>`
  ${props => !props.isOpen && `display: none;`}
  position: absolute;

  max-width: 200px;
  width: max-content;

  border: 1px solid #d2d2d2;
  border-radius: 5px;
  margin: 0;
  padding: 10px;
  z-index: 1;
  font-size: 12px;

  background: #ffffff;
  -webkit-box-shadow: 1px 2px 5px 0px rgba(0, 0, 0, 0.4);
  box-shadow: 1px 2px 5px 0px rgba(0, 0, 0, 0.4);
`;

interface Props {
  iconImage: string;
  description: string;
}

export default function DescriptionIconButton({ iconImage, description }: Props) {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState<boolean>(false);

  return (
    <StyledIconContainer>
      <StyledIcon src={iconImage} onClick={() => setIsDescriptionOpen(!isDescriptionOpen)} />
      <StyledDescription isOpen={isDescriptionOpen}>{description}</StyledDescription>
    </StyledIconContainer>
  );
}
