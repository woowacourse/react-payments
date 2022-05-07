import React from "react";
import styled from "styled-components";

const StyledPageHeaderContainer = styled.header`
  padding: 8px 0 22px;
  margin: ${(props) => props.margin};
`;

const StyledPageTitle = styled.h1`
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.lineHeight};
  letter-spacing: -0.085em;
  text-align: ${(props) => props.textAlign};
  color: #383838;
`;

export default function PageHeader({
  children,
  fontSize,
  lineHeight,
  textAlign,
  margin,
}) {
  return (
    <StyledPageHeaderContainer margin={margin}>
      <StyledPageTitle
        fontSize={fontSize}
        lineHeight={lineHeight}
        textAlign={textAlign}
      >
        {children}
      </StyledPageTitle>
    </StyledPageHeaderContainer>
  );
}

PageHeader.defaultProps = {
  fontSize: "16px",
  lineHeight: "19px",
  textAlign: "left",
  margin: 0,
};
