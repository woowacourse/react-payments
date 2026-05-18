import styled from "@emotion/styled";
import { maskCardNumber, splitCardNumber } from "../../Formatter";
import { detectCardNetwork } from "../../CardNetwork";
import { convertIssuerCodeToCardBrand } from "../../Converter";

export default function CardItem({ cardData }) {
  const { issuerCode, number, expirationDate } = cardData;

  const { title, bgHex } = convertIssuerCodeToCardBrand(issuerCode);
  return (
    <CardItemContainer>
      <MiniCard bgHex={bgHex} />
      <CardContent>
        <p className="card-brand-name">{title}</p>
        <p>
          {splitCardNumber(
            maskCardNumber(number),
            detectCardNetwork(number).title,
          )}
        </p>
        <p>유효기간 {expirationDate}</p>
      </CardContent>
    </CardItemContainer>
  );
}

const CardItemContainer = styled.div`
  display: flex;
  align-items: center;
  width: 320px;
  height: 73px;
  gap: 12px;
  padding: 12px;
  border: solid #e6e6e6 1px;
  border-radius: 5px;
`;

const MiniCard = styled.div<{ bgHex: string }>`
  width: 64px;
  height: 40px;
  border-radius: 4px;
  background-color: #${(props) => props.bgHex};
`;

const CardContent = styled.div`
  .card-brand-name {
    font-size: 14px;
    color: #353c49;
    font-weight: 700;
  }
  p {
    font-size: 11px;
    color: #8c8c8c;
    margin: 0;
  }
`;
