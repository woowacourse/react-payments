import React from 'react';
import styled from 'styled-components';

import Header from '../common/Header';

interface Props {
  children: React.ReactNode;
  title: string;
  onClickBack?: () => void;
}

const PageTemplate = ({ children, title, onClickBack }: Props) => {
  return (
    <PageTemplateWrapper>
      <Header title={title} onClickBack={onClickBack}></Header>
      {children}
    </PageTemplateWrapper>
  );
};

export default PageTemplate;

const PageTemplateWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-width: 375px;
  width: 375px;

  padding: 0 28px 28px 28px;
`;
