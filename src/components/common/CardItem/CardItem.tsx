import CARD from "@constants/card";
import styled from "@emotion/styled";
import { COLOR_PALETTE } from "@styles/colorPalette";

type CardCompanyValue = (typeof CARD.COMPANY_SELECT_FIELD)[number]["value"];

const findCompanyByIssuerCode = (
  issuerCode: string,
): CardCompanyValue | null => {
  return (
    CARD.COMPANY_SELECT_FIELD.find((item) => item.issuerCode === issuerCode)
      ?.value ?? null
  );
};

interface CardItemProps {
  issuerCode: string;
  number: string;
  expirationDate: string;
}

const CardItem = ({ issuerCode, number, expirationDate }: CardItemProps) => {
  return (
    <Wrapper>
      <CardItemMiniCard company={findCompanyByIssuerCode(issuerCode)} />
      <CardItemInfo>
        <CardItemInfoIssuerTitle>{issuerCode}</CardItemInfoIssuerTitle>
        <CardItemInfoText>{number}</CardItemInfoText>
        <CardItemInfoText>{expirationDate}</CardItemInfoText>
      </CardItemInfo>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  display: flex;
  gap: 1rem;
  border: 1px solid ${COLOR_PALETTE.GRAY};
  border-radius: 8px;
  width: 100%;
  align-items: center;
  padding: 1rem;
`;

const CardItemMiniCard = styled.div<{ company: CardCompanyValue | null }>`
  width: 64px;
  height: 40px;
  border-radius: 4px;
  background-color: ${({ company }) =>
    (company
      ? COLOR_PALETTE[company.toUpperCase() as keyof typeof COLOR_PALETTE]
      : undefined) ?? COLOR_PALETTE.GRAY};
`;

const CardItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const CardItemInfoIssuerTitle = styled.p`
  font-weight: 700;
  font-size: 14px;
  color: ${COLOR_PALETTE["BLACK-700"]};
  margin: 0;
`;

const CardItemInfoText = styled.p`
  font-weight: 400;
  font-size: 11px;
  color: ${COLOR_PALETTE["BLACK-600"]};
  margin: 0;
`;

export default CardItem;
