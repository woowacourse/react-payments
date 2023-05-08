import React from "react";
import Style from "./ImgButtonStyled";
import { CardCompany } from "../../../types/card";
interface ImgButtonProps {
  onClick: () => void;
  src: string;
  alt: CardCompany;
}

function ImgButton({ onClick, alt, src }: ImgButtonProps) {
  return (
    <Style.ImgButtonSection>
      <Style.Button type="button" onClick={onClick}>
        <Style.Img src={process.env.PUBLIC_URL + src} alt={alt} />
        <Style.Title>{alt}</Style.Title>
      </Style.Button>
    </Style.ImgButtonSection>
  );
}

export default ImgButton;
