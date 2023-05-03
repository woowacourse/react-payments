import { ReactNode } from 'react';

import { useHeader } from '../../../hooks/useHeader';

import * as styled from './PageLayout.styled';
import Header from '../../Header/Header';

const PageLayout = ({ children }: { children: ReactNode }) => {
  const { shouldRenderBackwardBox, pageTitle } = useHeader();

  return (
    <styled.PageLayout>
      <Header
        shouldRenderBackwardBox={shouldRenderBackwardBox}
        pageTitle={pageTitle}
      />
      <styled.Main>{children}</styled.Main>
    </styled.PageLayout>
  );
};

export default PageLayout;
