import { ReactNode } from 'react';

import * as styled from './CardCompany.styled';

const CardCompany = ({ CardLogo, cardName }: { CardLogo: ReactNode; cardName: string }) => {
  return (
    <styled.CardCompany>
      {CardLogo}
      <p>{cardName}</p>
    </styled.CardCompany>
  );
};

export default CardCompany;
