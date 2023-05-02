import { CardCompanyLogoProps } from "types";
import { CARD_COMPANIES } from "constants/cardCompanies";

interface Props extends CardCompanyLogoProps {
  cardCompanyName: string;
}

const CardCompanyLogoSvg = ({ cardCompanyName, ...props }: Props) => {
  const CardCompanyLogo = CARD_COMPANIES[cardCompanyName];

  return CardCompanyLogo(props);
};

export default CardCompanyLogoSvg;
