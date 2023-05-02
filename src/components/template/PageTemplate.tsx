import styled from 'styled-components';

import Header from '../common/Header';

interface Props {
  children: React.ReactNode;
  title?: string;
  onClickBack?: () => void;
}

const PageTemplate = ({ children, title, onClickBack }: Props) => {
  return (
    <PageTemplateWrapper>
      {title && <Header title={title} onClickBack={onClickBack} />}
      <Main>{children}</Main>
    </PageTemplateWrapper>
  );
};

export default PageTemplate;

const PageTemplateWrapper = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  padding-top: 64px;
`;

const Main = styled.div`
  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;
  padding: 0 28px;
`;
