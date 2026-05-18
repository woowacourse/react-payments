import CARD from "@constants/card";
import styled from "@emotion/styled";
import { COLOR_PALETTE } from "@styles/colorPalette";

type CardCompany = (typeof CARD.COMPANY_SELECT_FIELD)[number];
type CardCompanyValue = CardCompany["value"];

const findCompanyByIssuerCode = (issuerCode: string): CardCompany | null => {
  return (
    CARD.COMPANY_SELECT_FIELD.find((item) => item.issuerCode === issuerCode) ??
    null
  );
};

interface CardItemProps {
  issuerCode: string;
  number: string;
  expirationDate: string;
}

const formatCardNumberIntoGroups = (cardNumber: string) =>
  cardNumber.match(/.{1,4}/g) ?? [];

const CardItem = ({ issuerCode, number, expirationDate }: CardItemProps) => {
  const company = findCompanyByIssuerCode(issuerCode);

  return (
    <Wrapper>
      <CardItemMiniCard company={company?.value ?? null} />
      <CardItemInfo>
        <CardItemInfoIssuerTitle>{company?.label}</CardItemInfoIssuerTitle>
        <CardItemInfoNumber>
          {formatCardNumberIntoGroups(number).map((group, index) => (
            <span key={index}>{group}</span>
          ))}
        </CardItemInfoNumber>
        <CardItemInfoText>{expirationDate}</CardItemInfoText>
      </CardItemInfo>
      <CardItemDeleteButton>x</CardItemDeleteButton>
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
  flex: 1;
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

const CardItemInfoNumber = styled(CardItemInfoText.withComponent("div"))`
  display: flex;
  gap: 0.5rem;
`;

const CardItemDeleteButton = styled.button`
  background: none;
  border: none;
  color: ${COLOR_PALETTE["BLACK-600"]};
  font-weight: 400;
  font-size: 22px;
  cursor: pointer;
`;

export default CardItem;
