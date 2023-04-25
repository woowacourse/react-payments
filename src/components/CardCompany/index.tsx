import CARD_COMPANY from '@Constant/CardCompany';

import * as S from './style';

export type CardCompanyType = {
  company: keyof typeof CARD_COMPANY;
};

function CardCompany({ company }: CardCompanyType) {
  return (
    <S.CardCompanyLayout>
      <S.CardCompanyLogo src={CARD_COMPANY[company].logo} alt={CARD_COMPANY[company].name} />
      <S.CardCompanyName>{CARD_COMPANY[company].name}</S.CardCompanyName>
    </S.CardCompanyLayout>
  );
}

export default CardCompany;
