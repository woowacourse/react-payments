import styled from "@emotion/styled";
import MasterCard from "../../assets/Mastercard.svg";
import VisaCard from "../../assets/visa-logo.svg";
import { NETWORK_BRAND_RULE } from "../../Constants";

export function CardNetworkBrand({ cardNumber }) {
  const getNetworkBrand = (cardNumber: string) => {
    if (cardNumber.startsWith(NETWORK_BRAND_RULE.VISA_START_NUMBER))
      return "visa";
    if (
      cardNumber.startsWith(NETWORK_BRAND_RULE.MASTER_START_NUMBER) &&
      NETWORK_BRAND_RULE.MASTER_SECOND_NUMBER.includes(cardNumber[1])
    )
      return "master";
  };

  const selectBrandImage = (brand: string): string | null => {
    if (brand === "visa") return VisaCard;
    if (brand === "master") return MasterCard;
  };

  const networkBrand = getNetworkBrand(cardNumber["first-digits"]);

  return (
    networkBrand && (
      <CardNetworkBrandContainer>
        <img
          src={selectBrandImage(networkBrand)}
          alt={`${networkBrand}-network-brand-logo`}
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
