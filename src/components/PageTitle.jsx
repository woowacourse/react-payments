import React from 'react';
import styled from 'styled-components';

const PageTitleDiv = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 22px;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

const TitleText = styled.span`
  margin-left: 17px;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: -0.085em;
`;

export default function PageTitle({ hasPrevButton, title }) {
  return (
    <PageTitleDiv>
      {hasPrevButton && <span>{'<'}</span>}
      <TitleText>{title}</TitleText>
    </PageTitleDiv>
  );
}
