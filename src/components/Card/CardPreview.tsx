import styled from "styled-components";

import CardNumbers from "./CardNumbers";
import CardLogo from "./CardLogo";
import ExpirationDate from "./ExpirationDate";
import UserName from "./UserName";

import { CARD_COMPANY } from "../../constants/card";

const CardPreview = ({
  cardNumbers,
  expirationDate,
  userName,
  cardCompany,
}: {
  cardNumbers: Map<string, string>;
  expirationDate: Map<string, string>;
  userName: Map<string, string>;
  cardCompany: string;
}) => {
  return (
    <CardFrame cardCompany={cardCompany}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <ICChip />
        <CardLogo cardNumbers={cardNumbers} />
      </div>
      <div style={{ display: "grid", gap: "8px" }}>
        <CardNumbers cardNumbers={cardNumbers} />
        <ExpirationDate expirationDate={expirationDate} />
        <UserName userName={userName} />
      </div>
    </CardFrame>
  );
};

const CardFrame = styled.div<{ cardCompany: string }>`
  color: white;
  ${({ cardCompany }) => {
    const { color } = CARD_COMPANY[cardCompany] || { color: "#333333" };
    return `background: ${color};`;
  }}
  padding: 10px 15px;
  width: 232px;
  height: 137px;
  display: grid;
  gap: 10px;
  box-sizing: border-box;
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
