import styled from "@emotion/styled";
import { CardNetworkBrand } from "./CardNetworkBrand";
import { CardNumber } from "./CardNumber";
import { CardExpiryDate } from "./CardExpiryDate";

export function Card() {
  return (
    <CardContainer>
      <div className="card-meta">
        <div className="ic-chip"></div>
        <CardNetworkBrand brand="visa" />
      </div>
      <div className="card-contents">
        <CardNumber />
        <CardExpiryDate />
      </div>
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

  .card-contents {
    display: flex;
    flex-direction: column;
    height: 80%;
    justify-content: center;
    gap: 0.5rem;
  }
`;
