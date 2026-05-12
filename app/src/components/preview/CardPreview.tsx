import styled from '@emotion/styled';
import { useCardContext } from '../../hooks/useCardContext';
import { CardNumber } from './CardNumber';
import { CardExpiryDate } from './CardExpiryDate';
import { CARD_COMPANY_COLOR } from '../../style/CardStyles';
import { CardNetworkBrand } from './CardNetworkBrand';

export function CardPreview() {
  const { cardCompany, networkBrand } = useCardContext();

  return (
    <CardContainer $CardCompanySelected={CARD_COMPANY_COLOR[cardCompany]}>
      <div className="card-meta">
        <div className="ic-chip"></div>
        {networkBrand && <CardNetworkBrand networkBrand={networkBrand} />}
      </div>
      <div className="card-contents">
        <CardNumber />
        <CardExpiryDate />
      </div>
    </CardContainer>
  );
}

type CardCompanySelected = {
  $CardCompanySelected?: string;
};

const CardContainer = styled.div<CardCompanySelected>`
  background-color: ${(props) => props.$CardCompanySelected ?? '#333333'};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 212px;
  height: 132px;
  border-radius: 4px;
  padding: 0.5rem 0.75rem;
  margin: 4.625rem auto 2.75rem auto;
  color: white;
  box-shadow: 3px 3px 5px 0px #00000040;

  .ic-chip {
    height: 22px;
    width: 36px;
    border-radius: 4px;
    background-color: #ddcd78;
  }

  .card-meta {
    display: flex;
    position: absolute;
    box-sizing: border-box;
    justify-content: space-between;
    width: 100%;
    top: 0;
    padding: 8px 12px;
  }

  .card-contents {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
    width: 200px;
  }
`;
