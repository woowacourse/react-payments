import { ReactNode } from 'react';

import * as styled from './CompanyLogoItem.styled';

interface CompanyLogoItemProps {
  SvgLogo: ReactNode;
  name: string;
  onClick: () => void;
}

const CompanyLogoItem = ({ SvgLogo, name, onClick }: CompanyLogoItemProps) => {
  return (
    <styled.CompanyLogoItem onClick={onClick}>
      {SvgLogo}
      <p>{name}</p>
    </styled.CompanyLogoItem>
  );
};

export default CompanyLogoItem;
