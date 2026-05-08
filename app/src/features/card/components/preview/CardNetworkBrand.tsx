import styled from "@emotion/styled";
import MasterCard from "../../assets/Mastercard.svg";
import VisaCard from "../../assets/visa-logo.svg";
import UnionCard from "../../assets/unionpay-logo.svg";
import AmexCard from "../../assets/amex-logo.svg";
import { CARD_INPUT } from "../../Constants";
import { joinEachStringWithLength } from "../../../../Utils";
import { CardNetwork } from "../../CardNetwork";

export function CardNetworkBrand({ cardNumber }) {
  const networkBrandName = new CardNetwork(
    joinEachStringWithLength(
      Object.values(cardNumber),
      CARD_INPUT.EACH_NUMBER_LENGTH,
    ),
  ).name;

  const selectBrandImage = (brand: string): string | null => {
    if (brand === "visa") return VisaCard;
    if (brand === "master") return MasterCard;
    if (brand === "union") return UnionCard;
    if (brand === "amex") return AmexCard;
  };

  return (
    networkBrandName && (
      <CardNetworkBrandContainer>
        <img
          src={selectBrandImage(networkBrandName)}
          alt={`${networkBrandName}-network-brand-logo`}
        ></img>
      </CardNetworkBrandContainer>
    )
  );
}

const CardNetworkBrandContainer = styled.div`
  height: 22px;
  width: 36px;
  border-radius: 4px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 21.75px;
    height: 13.31px;
  }
`;
