import { ReactNode } from 'react';

import { setCompany } from '../../types/state';

import * as styled from './CompanyLogoItem.styled';

interface CompanyLogoItemProps {
  SvgLogo: ReactNode;
  name: string;
  backgroundColor: string;
  setCompany: setCompany;
}

const CompanyLogoItem = ({
  SvgLogo,
  name,
  backgroundColor,
  setCompany,
}: CompanyLogoItemProps) => {
  const handleClick = () => {
    setCompany({
      name: name,
      backgroundColor: backgroundColor,
    });
  };

  return (
    <styled.CompanyLogoItem onClick={handleClick}>
      {SvgLogo}
      <p>{name}</p>
    </styled.CompanyLogoItem>
  );
};

export default CompanyLogoItem;
