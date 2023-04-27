import React, { useContext } from "react";
import Style from "./ImgButtonStyled";
import { CardDetailContext } from "../../../context/CardDetailContext";
import { CardCompany } from "../../../types/card";
interface ImgButtonProps {
  onClick: () => void;
  src: string;
  alt: CardCompany;
}

function ImgButton({ onClick, alt, src }: ImgButtonProps) {
  const { changeCompany } = useContext(CardDetailContext);
  const handelOnClick = () => {
    changeCompany(alt);
    onClick();
  };
  return (
    <Style.ImgButtonSection>
      <Style.Button type="button" onClick={handelOnClick}>
        <Style.Img src={process.env.PUBLIC_URL + src} alt={alt} />
        <Style.Title>{alt}</Style.Title>
      </Style.Button>
    </Style.ImgButtonSection>
  );
}

export default ImgButton;
