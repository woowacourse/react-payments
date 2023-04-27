import { setCardCompany } from '../../types/state';
import { CARD_COMPANY_INFO } from '../../constants/cardCompany';

import * as styled from './CardCompanyContents.styled';
import CardCompanyButton from '../CardCompanyButton/CardCompanyButton';

const CardCompanyContents = ({ setCardCompany }: { setCardCompany: setCardCompany }) => {
  const generateCardCompanyList = () => {
    return CARD_COMPANY_INFO.map(companyInfo => {
      return (
        <CardCompanyButton
          key={companyInfo.NAME}
          Logo={<companyInfo.LOGO />}
          name={companyInfo.NAME}
          theme={companyInfo.THEME}
          setCardCompany={setCardCompany}
        />
      );
    });
  };

  return <styled.CardCompanyContents>{generateCardCompanyList()}</styled.CardCompanyContents>;
};

export default CardCompanyContents;
