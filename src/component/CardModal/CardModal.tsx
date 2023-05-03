import React, { useContext } from "react";
import {
  COMPANY_LIST,
  COMPANY_SRC,
  DEFAULT_COMPANY,
} from "../../abstract/constants";
import ImgButton from "../common/ImgButton/ImgButton";
import { CardCompany } from "../../types/card";
import { CardDetailContext } from "../../context/CardDetailContext";
import BottomSheet from "../common/BottomSheet/BottomSheet";
import CardDetailView from "../CardDetailView/CardDetailView";

function CardModal() {
  const {
    cardNumberHidden,
    cardDate,
    cardOwnerName,
    cardCompany,
    changeCompany,
  } = useContext(CardDetailContext);

  const trigger = (
    <CardDetailView
      cardNumberHidden={cardNumberHidden}
      cardDate={cardDate}
      cardOwnerName={cardOwnerName}
      cardCompany={cardCompany}
    />
  );

  const IMGButtons = COMPANY_LIST.map(
    (company: CardCompany) =>
      company !== DEFAULT_COMPANY && (
        <ImgButton
          key={company}
          onClick={() => {
            changeCompany(company);
          }}
          src={COMPANY_SRC[company]}
          alt={company}
        />
      )
  );

  return <BottomSheet trigger={trigger} buttons={IMGButtons}></BottomSheet>;
}

export default CardModal;
