import styled from "@emotion/styled";
import { maskCardNumber, splitCardNumber } from "../../Formatter";
import CardItemDeleteSVG from "../../assets/card-item-delete.svg";
import { detectCardNetwork } from "../../CardNetwork";
import { deleteCard } from "../../Api";
import { convertIssuerCodeToCardBrand } from "../../Converter";

export default function CardItem({ cardData }) {
  const { id, issuerCode, number, expirationDate } = cardData;

  const { title, bgHex } = convertIssuerCodeToCardBrand(issuerCode);

  const handleDeleteCard = () => {
    const result = window.confirm("카드를 제거하시겠습니까?");
    if (result) deleteCard(id);
  };

  return (
    <CardItemContainer>
      <CardContentContainer>
        <CardContent>
          <MiniCard bgHex={bgHex} />
          <div className="card-info">
            <p className="card-brand-name">{title}</p>
            <p>
              {splitCardNumber(
                maskCardNumber(number),
                detectCardNetwork(number).title,
              )}
            </p>
            <p>유효기간 {expirationDate}</p>
          </div>
        </CardContent>
        <CardItemDeleteButton type="button" onClick={handleDeleteCard}>
          <img src={CardItemDeleteSVG} />
        </CardItemDeleteButton>
      </CardContentContainer>
    </CardItemContainer>
  );
}

const CardItemContainer = styled.div`
  display: flex;
  align-items: center;
  width: 320px;
  height: 73px;
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

const CardContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
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

const CardItemDeleteButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  img {
    width: 30px;
    height: 27px;
    padding: 4px 8px;
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;

  .card-info {
    display: flex;
    flex-direction: column;
  }
`;
