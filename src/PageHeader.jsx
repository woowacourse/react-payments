import React from "react";
import styled from "styled-components";

const StyledPageHeaderContainer = styled.header`
  padding: 8px 0 22px;
`;

const StyledPageTitle = styled.h1`
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.085em;
  color: #383838;
`;

export default function PageHeader() {
  return (
    <StyledPageHeaderContainer>
      <StyledPageTitle>카드 추가</StyledPageTitle>
    </StyledPageHeaderContainer>
  );
}
