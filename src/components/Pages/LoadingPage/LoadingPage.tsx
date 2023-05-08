import { useState } from 'react';

import * as Styled from './LoadingPage.styled';
import { LoadingBox } from '../../LoadingBox/LoadingBox';
import { CompleteBox } from '../../CompleteBox/CompleteBox';

export const LoadingPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Styled.LoadingPageLayout>
      {isLoading ? <LoadingBox setIsLoading={setIsLoading} /> : <CompleteBox />}
    </Styled.LoadingPageLayout>
  );
};
