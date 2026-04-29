import styled from "@emotion/styled";
import { CardNetworkBrand } from "./CardNetworkBrand";
import { CardNumber } from "./CardNumber";

export function Card() {
  return (
    <CardContainer>
      <div className="card-meta">
        <div className="ic-chip"></div>
        <CardNetworkBrand brand="visa" />
      </div>
      <CardNumber />
    </CardContainer>
  );
}

const CardContainer = styled.div`
  width: 212px;
  height: 132px;
  border-radius: 4px;
  background-color: #333333;
  padding: 8px 12px;
  color: white;

  .ic-chip {
    height: 22px;
    width: 36px;
    border-radius: 4px;
    background-color: #ddcd78;
  }

  .card-meta {
    display: flex;
    justify-content: space-between;
  }
`;
