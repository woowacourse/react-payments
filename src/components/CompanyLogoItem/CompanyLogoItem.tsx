import { ReactNode } from 'react';

import * as styled from './CompanyLogoItem.styled';

const CompanyLogoItem = ({
  SvgLogo,
  name,
  handleClickCompanyLogo,
}: {
  SvgLogo: ReactNode;
  name: string;
  handleClickCompanyLogo: () => void;
}) => {
  return (
    <styled.CompanyLogoItem onClick={handleClickCompanyLogo}>
      {SvgLogo}
      <p>{name}</p>
    </styled.CompanyLogoItem>
  );
};

export default CompanyLogoItem;
