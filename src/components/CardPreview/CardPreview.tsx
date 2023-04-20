import styled from "styled-components";
import { Card } from "../../types";

type PreviewCard = Pick<Card, "cardNumber" | "ownerName" | "expirationDate">;

type CardPreviewProps = {
  card: PreviewCard;
};

const CardPreview = ({ card }: CardPreviewProps) => {
  const { cardNumber, ownerName, expirationDate } = card;

  return (
    <CardLayout>
      <ICChip width={31} height={24} viewBox="0 0 31 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect
          x={0.375}
          y={0.375}
          width={30.25}
          height={22.25}
          rx={3.625}
          fill="#9AA04E"
          stroke="black"
          strokeWidth={0.75}
        />
        <path d="M0 7.75H9.5" stroke="black" strokeWidth={0.5} />
        <path
          d="M21.5 22.5L21 21.0084L20.5 19.5168V18.0252V16.5336L21 15L20.5 12.5559V11.0643V9.57271L21.3333 7.6"
          stroke="black"
          strokeWidth={0.5}
        />
        <path
          d="M9 23L9.5 21.4984L10 19.9968V18.4951L10 16.9935L9.5 15L10 12.9892V11.4876V9.98595L9.5 7.5"
          stroke="black"
          strokeWidth={0.5}
        />
        <path d="M9 0.5L10 2.56621L10 4.11627V5.66633L9.5 7.742" stroke="black" strokeWidth={0.5} />
        <path d="M21.1055 7.75H31" stroke="black" strokeWidth={0.5} />
        <path d="M0 14.75H9.75544" stroke="black" strokeWidth={0.5} />
        <path d="M10 19.5L12.5 20H15.5L18 20L20.5 19.5" stroke="black" strokeWidth={0.5} />
        <path d="M10 3.5L12.5 3L15.5 3L18 3L20.5 3.5" stroke="black" strokeWidth={0.5} />
        <path d="M22.5 0.5L21.5 2L20.5 3.5V4.5" stroke="black" strokeWidth={0.5} />
        <line x1={21} y1={14.75} x2={31} y2={14.75} stroke="black" strokeWidth={0.5} />
      </ICChip>
      <NumberContainer>
        <span>{cardNumber.firstGroup}</span>
        <span>{cardNumber.secondGroup}</span>
        <span>{"•".repeat(cardNumber.thirdGroup.length)}</span>
        <span>{"•".repeat(cardNumber.fourthGroup.length)}</span>
      </NumberContainer>
      <InfoContainer>
        <Span>{ownerName ? ownerName : "NAME"}</Span>
        <span>
          {expirationDate.month ? expirationDate.month : "MM"} / {expirationDate.year ? expirationDate.year : "YY"}
        </span>
      </InfoContainer>
    </CardLayout>
  );
};

export default CardPreview;

const CardLayout = styled.li`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 4px;

  background-color: #333333;

  min-height: 133px;
  width: 213px;

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

const ICChip = styled.svg`
  position: absolute;

  top: 50px;
  left: 14px;
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

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 0px 4px;

  font-size: 12px;
`;

const Span = styled.span`
  width: 100px;
  overflow: hidden;
`;
