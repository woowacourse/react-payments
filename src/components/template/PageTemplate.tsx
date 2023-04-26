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

  min-width: 375px;
  width: 375px;

  padding: 72px 28px 28px 28px;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 700px;

  overflow-y: scroll;
`;
