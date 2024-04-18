import styled from "styled-components";

import CardNumbers from "./CardNumbers";
import CardLogo from "./CardLogo";
import ExpirationDate from "./ExpirationDate";
import UserName from "./UserName";

import { CardInfo } from "../PaymentApp";

const CardPreview = ({
  cardNumbers,
  expirationDate,
  userName,
}: {
  cardNumbers: CardInfo[];
  expirationDate: CardInfo[];
  userName: CardInfo[];
}) => {
  return (
    <>
      <CardFrame>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <ICChip />
          <CardLogo cardNumbers={cardNumbers} />
        </div>
        <div style={{display: "grid", gap: "8px" }}>
          <CardNumbers cardNumbers={cardNumbers} />
          <ExpirationDate expirationDate={expirationDate} />
          <UserName userName={userName} />
        </div>
      </CardFrame>
    </>
  );
};

const CardFrame = styled.div`
  background: #333333;
  padding: 10px 15px;
  width: 202px;
  height: 117px;
  display: grid;
  gap: 10px;
  border-radius: 5px;
  box-shadow: 3px 3px 5px 0px #00000040;
`;

const ICChip = styled.div`
  background: #ddcd78;
  width: 36px;
  height: 22px;
  gap: 0px;
  border-radius: 5px;
  opacity: 0px;
`;

export default CardPreview;
