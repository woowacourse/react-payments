import styled from "@emotion/styled";

interface CardProps {
  cardNumber: number[];
  expiration: number[];
}

function Card({ cardNumber, expiration }: CardProps) {
  return (
    <CardContainer>
      <CardHeader>
        <CardIC />
        <CardType src="/assets/Mastercard.png" alt="Mastercard" />
      </CardHeader>

      <CardInfo>
        <p>{cardNumber.join(" ")}</p>
        <p>{expiration.join("/")}</p>
      </CardInfo>
    </CardContainer>
  );
}

export default Card;

const CardContainer = styled.div`
  width: 212px;
  height: 132px;
  padding: 8px 12px;
  border-radius: 4px;
  background: #333;
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.25);
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 14px;
`;

const CardIC = styled.div`
  width: 36px;
  height: 22px;
  background: #ddcd78;
  border-radius: 2px;
  stroke-width: 0.5px;
  stroke: rgba(221, 205, 120, 0.1);
`;

const CardType = styled.img`
  width: 36px;
  height: 22px;
`;

const CardInfo = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
