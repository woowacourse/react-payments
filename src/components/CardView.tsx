import styled from "styled-components";
import visa from "../img/Visa.svg";
import master from "../img/Mastercard.svg";

const CardViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgb(55, 52, 52);
  color: white;
  width: 300px;
  height: 180px;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  position: relative;
`;

const CardNumberContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 60px;
  margin-bottom: 20px;
`;

const CardNumberGroup = styled.div`
  font-size: 24px;
  letter-spacing: 2px;
  min-width: 60px;
`;

const CardExpirationDisplay = styled.div`
  font-size: 16px;
  margin-bottom: 20px;
`;

const CardOwnerDisplay = styled.div`
  font-size: 16px;
  margin-top: auto;
`;

const CardImage = styled.img`
  width: 50px;
  height: 30px;
  position: absolute;
  right: 20px;
  top: 20px;
`;

interface Props {
  cardNumbers: string[];
  cardExpiration: string;
  cardOwner: string;
}

function CardView({ cardNumbers, cardExpiration, cardOwner }: Props) {
  const getCardNumberGroup = (number: string, index: number): string => {
    if (!number) return '';
    // 세 번째와 네 번째 그룹은 마스킹 처리
    if (index >= 2) {
      return '*'.repeat(number.length);
    }
    return number;
  };

  const formatExpiration = (expiration: string) => {
    if (!expiration) return "";
    return expiration;
  };

  const getCardImage = (numbers: string[]) => {
    const firstNumber = numbers[0];
    if (!firstNumber) return;
    const firstDigit = firstNumber[0];
    switch (firstDigit) {
      case "4":
        return visa;
      case "5":
        return master;
      default:
        return;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <CardViewContainer>
        <div style={{display: "flex", justifyContent: "space-between"}}>
          <div style={{
            width: 50,
            height: 30,
            backgroundColor: "#e0cf6c",
            borderRadius: 6
          }}>

          </div>
          <div>
            {getCardImage(cardNumbers) && (
              <CardImage src={getCardImage(cardNumbers)} alt="card type" />
            )}
          </div>
        </div>
       
        <CardNumberContainer>
          {cardNumbers.map((number, index) => (
            <CardNumberGroup key={index}>
              {getCardNumberGroup(number, index)}
            </CardNumberGroup>
          ))}
        </CardNumberContainer>
        <CardExpirationDisplay>{formatExpiration(cardExpiration)}</CardExpirationDisplay>
        <CardOwnerDisplay>{cardOwner || ""}</CardOwnerDisplay>
      </CardViewContainer>
    </div>
  );
}

export default CardView;
