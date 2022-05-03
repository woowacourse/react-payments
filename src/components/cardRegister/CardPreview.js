import React from 'react';

import { Card } from '../common/Card';
import { MarginTB10 } from '../common/styled';

export const CardPreview = ({ cardInfo, onClick }) => {
  return (
    <MarginTB10>
      <Card cardInfo={cardInfo} onClick={onClick} />
    </MarginTB10>
  );
};
