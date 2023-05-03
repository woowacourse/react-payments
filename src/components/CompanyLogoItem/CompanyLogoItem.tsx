import { ReactNode } from 'react';

import * as styled from './CompanyLogoItem.styled';

const CompanyLogoItem = ({
  SvgLogo,
  name,
  onClick,
}: {
  SvgLogo: ReactNode;
  name: string;
  onClick: () => void;
}) => {
  return (
    <styled.CompanyLogoItem onClick={onClick}>
      {SvgLogo}
      <p>{name}</p>
    </styled.CompanyLogoItem>
  );
};

export default CompanyLogoItem;
