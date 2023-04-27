import { CARD_COMPANY_INFO } from '../../constants/cardCompany';

import * as styled from './CardCompanyContents.styled';
import CardCompany from '../CardCompany/CardCompany';

const CardCompanyContents = () => {
  const generateCardCompanyList = () => {
    const cardCompanyList = Object.entries(CARD_COMPANY_INFO);

    return cardCompanyList.map(info => {
      const name = info[0];
      const Logo = info[1].LOGO;

      return <CardCompany key={name} CardLogo={<Logo />} cardName={name} />;
    });
  };

  return <styled.CardCompanyContents>{generateCardCompanyList()}</styled.CardCompanyContents>;
};

export default CardCompanyContents;
