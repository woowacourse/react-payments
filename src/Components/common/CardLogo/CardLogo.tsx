/** @jsxImportSource @emotion/react */
import masterImage from "../../../assets/images/masterImage.png";
import visaImage from "../../../assets/images/visaImage.png";
import { logoStyle, CardLogoWrapper } from "./CardLogo.styles";

interface CardLogoProps {
  option: "default" | "visa" | "master" | "none";
}

const getImageSrc = (option: "default" | "visa" | "master" | "none") => {
  switch (option) {
    case "visa":
      return visaImage;
    case "master":
      return masterImage;
    case "default":
      return;
  }
};

const CardLogo: React.FC<CardLogoProps> = ({ option }) => {
  if (option === "none") return;

  return (
    <CardLogoWrapper>
      {option !== "default" && (
        <img src={getImageSrc(option)} css={logoStyle} />
      )}
    </CardLogoWrapper>
  );
};

export default CardLogo;
