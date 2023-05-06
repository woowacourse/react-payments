import { ReactNode } from 'react';

import * as styled from './CompanyLogoItem.styled';

const CompanyLogoItem = ({
  SvgLogo,
  name,
  handleCompanyLogoClick,
}: {
  SvgLogo: ReactNode;
  name: string;
  handleCompanyLogoClick: () => void;
}) => {
  return (
    <styled.CompanyLogoItem onClick={handleCompanyLogoClick}>
      {SvgLogo}
      <p>{name}</p>
    </styled.CompanyLogoItem>
  );
};

export default CompanyLogoItem;
