import styled from "styled-components";
import { Card } from "../../types";
import CARD_COMPANIES from "../../constants/cardCompanies";
import ICChipIcon from "../../assets/ICChip.svg";

type PreviewCard = Pick<Card, "cardNumber" | "ownerName" | "expirationDate" | "cardCompany">;

type CardPreviewProps = {
  card: PreviewCard;
  onClick?: () => void;
};

const CardPreview = ({ card, onClick }: CardPreviewProps) => {
  const { cardNumber, ownerName, expirationDate, cardCompany } = card;

  const signatureColor = CARD_COMPANIES[cardCompany].signatureColor;
  const companyKoreanName = CARD_COMPANIES[cardCompany].koreanName;
  const ownerNameText = ownerName ? ownerName : "NAME";
  const expirationMonthText = expirationDate.month ? expirationDate.month : "MM";
  const expirationYearText = expirationDate.year ? expirationDate.year : "YY";

  return (
    <CardLayout onClick={onClick} cardColor={signatureColor}>
      <CardCompany>{companyKoreanName}</CardCompany>
      <ICChip src={ICChipIcon} />
      <NumberContainer>
        <span>{cardNumber.firstGroup}</span>
        <span>{cardNumber.secondGroup}</span>
        <span>{"•".repeat(cardNumber.thirdGroup.length)}</span>
        <span>{"•".repeat(cardNumber.fourthGroup.length)}</span>
      </NumberContainer>
      <FlexContainer>
        <CardOwnerName>{ownerNameText}</CardOwnerName>
        <ExpirationDate>
          {expirationMonthText} / {expirationYearText}
        </ExpirationDate>
      </FlexContainer>
    </CardLayout>
  );
};

export default CardPreview;

const CardLayout = styled.div<{ cardColor: string }>`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 4px;

  background-color: ${(props) => props.cardColor};

  width: 250px;
  height: 150px;

  border-radius: 5px;
  padding: 14px;

  font-size: 14px;
  color: white;

  box-shadow: 5px 5px 5px #5f5f5f;

  transition: all 0.3s ease;

  &:hover {
    transform: translate(3px, 3px);
  }
`;

const CardCompany = styled.span`
  font-size: 12px;
  height: 100%;
`;

const ICChip = styled.img`
  position: absolute;

  top: 50px;
  left: 18px;
`;

const NumberContainer = styled.div`
  display: flex;
  justify-content: space-around;

  width: 100%;

  span {
    text-align: center;
    width: 40px;
    letter-spacing: 2px;
  }
`;

const CardOwnerName = styled.span`
  width: 100px;

  font-size: 12px;

  overflow: hidden;
`;

const ExpirationDate = styled.span`
  font-size: 12px;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 0 4px;
`;
