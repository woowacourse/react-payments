import React from 'react';
import styled from 'styled-components';

import CardPreview from './CardPreview';

const CardPreviewList = () => {
  return (
    <CardPreviewListWrapper>
      {Array.from({ length: 4 }, () => (
        <CardPreview />
      ))}
    </CardPreviewListWrapper>
  );
};

const CardPreviewListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 44px;
`;

export default CardPreviewList;
