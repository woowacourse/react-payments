import { useContext } from 'react';

import CardContext from '../../contexts/CardContext';
import { COMPANY_LIST } from '../../constants/company';

import * as styled from './CompanyLogoList.styled';
import CompanyLogoItem from '../CompanyLogoItem/CompanyLogoItem';

const CompanyLogoList = ({
  handleModalClose,
}: {
  handleModalClose: () => void;
}) => {
  const { setCompany } = useContext(CardContext);

  return (
    <styled.CompanyLogoList>
      {COMPANY_LIST.map(company => {
        const handleCompanyLogoClick = () => {
          setCompany({
            name: company.NAME,
            backgroundColor: company.BACKGROUND_COLOR,
          });
          handleModalClose();
        };

        return (
          <CompanyLogoItem
            key={company.NAME}
            SvgLogo={<company.SVG_LOGO_COMPONENT />}
            name={company.NAME}
            handleCompanyLogoClick={handleCompanyLogoClick}
          />
        );
      })}
    </styled.CompanyLogoList>
  );
};

export default CompanyLogoList;
