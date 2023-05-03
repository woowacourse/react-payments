import styled from "styled-components";
import { Card, CardCompany } from "../../types";
import { ReactComponent as ICChip } from "../../assets/ic-chip.svg";
import { memo } from "react";
import { cardMap } from "../../constant/Card";

type PreviewCard = Pick<Card, "cardNumber" | "ownerName" | "expirationDate" | "cardCompany">;

type CardPreviewProps = {
  card: PreviewCard;
  animation?: { transition: string; transform: string };
};

const CardPreview = ({ card, animation }: CardPreviewProps) => {
  const { cardCompany, cardNumber, ownerName, expirationDate } = card;
  const { transition = "", transform = "" } = animation ?? {};

  return (
    <CardLayout transition={transition} transform={transform} cardCompany={cardCompany}>
      <CardHeader>
        <span>{cardCompany}</span>
      </CardHeader>
      <Div>
        <ICChip />
      </Div>
      <NumberContainer>
        <NumberBox space="2px">{cardNumber.firstGroup}</NumberBox>
        <NumberBox space="2px">{cardNumber.secondGroup}</NumberBox>
        <NumberBox space="-5px">{"•".repeat(cardNumber.thirdGroup.length)}</NumberBox>
        <NumberBox space="-5px">{"•".repeat(cardNumber.fourthGroup.length)}</NumberBox>
      </NumberContainer>
      <InfoContainer>
        <OwnerName>{ownerName ? ownerName : "NAME"}</OwnerName>
        <span>
          {expirationDate.month ? expirationDate.month : "MM"} / {expirationDate.year ? expirationDate.year : "YY"}
        </span>
      </InfoContainer>
    </CardLayout>
  );
};

const areEqual = (prevProps: any, nextProps: any): boolean => {
  return (
    prevProps.card.cardCompany === nextProps.card.cardCompany &&
    prevProps.card.cardNumber === nextProps.card.cardNumber &&
    prevProps.card.ownerName === nextProps.card.ownerName &&
    prevProps.card.expirationDate === nextProps.card.expirationDate
  );
};
export default memo(CardPreview, areEqual);

const CardLayout = styled.div<{ transition: string; transform: string; cardCompany: CardCompany }>`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 4px;

  background-color: ${({ cardCompany }) => (cardCompany ? cardMap.get(cardCompany)?.color : "#333333")};

  min-height: 133px;
  width: 213px;

  border-radius: 5px;
  padding: 14px;

  font-size: 14px;
  color: white;

  box-shadow: 5px 5px 5px #5f5f5f;

  transition: ${({ transition }) => transition ?? "none"};

  &:hover {
    transform: ${({ transform }) => transform ?? "none"};
  }
`;

const CardHeader = styled.div`
  position: absolute;

  top: 12px;
  left: 12px;

  font-size: 16px;
  letter-spacing: 1.5px;

  z-index: 2;
`;

const Div = styled.div`
  position: absolute;

  top: 50px;
  left: 14px;
`;

const NumberContainer = styled.div`
  display: flex;
  justify-content: space-around;

  width: 100%;
`;

const NumberBox = styled.span<{ space: string }>`
  text-align: center;
  width: 40px;
  letter-spacing: ${({ space }) => space};
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 0px 4px;

  font-size: 12px;
`;

const OwnerName = styled.span`
  width: 100px;
  overflow: hidden;
`;
