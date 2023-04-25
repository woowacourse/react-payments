import styled from "styled-components";
import { DotIcon } from "../../assets/icons";
import { CardPublicInfo } from "../../types/Card";

interface CardItemProps {
  card: CardPublicInfo;
}

const CardItem = ({ card }: CardItemProps) => {
  return (
    <CardItemContainer>
      <ICChip />
      {card && (
        <>
          <CardNumberContainer>
            <p>{card.cardNumber[0]}</p>
            <p>{card.cardNumber[1]}</p>
            <SecurityCardNumber>
              {[...Array(card.cardNumber[2].length)].map((_, i) => (
                <DotIcon key={i} color="white" />
              ))}
            </SecurityCardNumber>
            <SecurityCardNumber>
              {[...Array(card.cardNumber[3].length)].map((_, i) => (
                <DotIcon key={i} color="white" />
              ))}
            </SecurityCardNumber>
          </CardNumberContainer>
          <CardInfoContainer>
            <CardNameContainer>{card.name || "NAME"}</CardNameContainer>
            <p>{`${card.expirationDate[0] || "MM"}/${card.expirationDate[1] || "YY"}`}</p>
          </CardInfoContainer>
        </>
      )}
    </CardItemContainer>
  );
};

const CardItemContainer = styled.div`
  width: 213px;
  height: 133px;

  padding: 14px;

  box-sizing: border-box;

  background: #333333;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  font-size: 12px;
  font-weight: 700;

  color: #ffffff;
`;

const ICChip = styled.div`
  width: 40px;
  height: 26px;

  margin-top: 33px;

  background: #cbba64;
  border-radius: 4px;
`;

const CardNumberContainer = styled.div`
  display: flex;
  justify-content: space-between;

  height: 12px;

  margin-top: 12px;

  font-size: 14px;
  letter-spacing: 3px;

  > p,
  input {
    width: 20%;
  }
`;

const CardInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 7px;
`;

const CardNameContainer = styled.p`
  width: 60%;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const SecurityCardNumber = styled.p`
  display: flex;
  align-items: center;
  gap: 5px;

  text-align: center;
  color: #ffffff;
`;

export default CardItem;
