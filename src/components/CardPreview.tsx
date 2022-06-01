import React from 'react';
import styled from 'styled-components';

import CardItem from './CardItem';

const CardPreviewSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
`;

export default function CardPreview(props) {
  return (
    <CardPreviewSection>
      <CardItem {...props} size={'small'} />
    </CardPreviewSection>
  );
}
