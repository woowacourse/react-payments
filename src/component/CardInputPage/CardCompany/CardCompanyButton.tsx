import { CardCompany, cardCompanyEnglishToKorean } from "../../../type/CardCompany";
import style from './CardCompanyButton.module.css';

import BC_CARD from "../../../asset/card-company-images/bc.svg";
import SHINHAN_CARD from "../../../asset/card-company-images/shinhan.svg";
import KAKAO_CARD from "../../../asset/card-company-images/kakao.svg";
import HUYNDAI_CARD from "../../../asset/card-company-images/hyundai.svg";
import WOORI_CARD from "../../../asset/card-company-images/woori.svg";
import LOTTE_CARD from "../../../asset/card-company-images/lotte.svg";
import HANA_CARD from "../../../asset/card-company-images/hana.svg";
import KB_CARD from "../../../asset/card-company-images/kb.svg";

import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
  companyName: CardCompany;
  clickHandler: (value: CardCompany) => void;
}

const cardImage = {
  bc: BC_CARD,
  shinhan: SHINHAN_CARD,
  kakao: KAKAO_CARD,
  hyundai: HUYNDAI_CARD,
  woori: WOORI_CARD,
  lotte: LOTTE_CARD,
  hana: HANA_CARD,
  kb: KB_CARD
};

const CardCompanyButton = (props: Props) => {
  const { companyName, clickHandler } = props;

  return (
    <button className={style.button} type="button" onClick={() => clickHandler(companyName)}>
      <img
        className={style.image}
        src={cardImage[companyName]}
        alt={`${cardCompanyEnglishToKorean(companyName)} 로고`}
      />
      <p className={style.company}>{cardCompanyEnglishToKorean(companyName)}</p>
    </button>
  );
};

export default CardCompanyButton;
