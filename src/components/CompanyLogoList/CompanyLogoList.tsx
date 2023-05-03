import { useContext } from 'react';

import CardContext from '../../contexts/CardContext';
import { COMPANY_LIST } from '../../constants/company';

import * as styled from './CompanyLogoList.styled';
import CompanyLogoItem from '../CompanyLogoItem/CompanyLogoItem';

const CompanyLogoList = () => {
  const { setCompany } = useContext(CardContext);

  return (
    <styled.CompanyLogoList>
      {COMPANY_LIST.map(company => {
        const name = company.NAME;
        const backgroundColor = company.BACKGROUND_COLOR;

        const onClick = () => {
          setCompany({
            name,
            backgroundColor,
          });
        };

        return (
          <CompanyLogoItem
            key={name}
            SvgLogo={<company.SVG_LOGO_COMPONENT />}
            name={name}
            onClick={onClick}
          />
        );
      })}
    </styled.CompanyLogoList>
  );
};

export default CompanyLogoList;
