import styled from "@emotion/styled";
import MasterCard from "../../assets/Mastercard.svg";
import VisaCard from "../../assets/visa-logo.svg";
import { useContext } from "react";
import { CardContext } from "../Card";

export function CardNetworkBrand() {
  const { cardNumber } = useContext(CardContext);

  const getNetworkBrand = (cardNumber: string) => {
    if (cardNumber.startsWith("4")) return "visa";
    if (
      cardNumber.startsWith("5") &&
      ["1", "2", "3", "4", "5"].includes(cardNumber[1])
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
