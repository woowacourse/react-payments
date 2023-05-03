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
        return (
          <CompanyLogoItem
            key={company.NAME}
            SvgLogo={<company.SVG_LOGO_COMPONENT />}
            name={company.NAME}
            handleClickCompanyLogo={() => {
              setCompany({
                name: company.NAME,
                backgroundColor: company.BACKGROUND_COLOR,
              });
            }}
          />
        );
      })}
    </styled.CompanyLogoList>
  );
};

export default CompanyLogoList;
