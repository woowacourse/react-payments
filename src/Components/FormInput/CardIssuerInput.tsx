/** @jsxImportSource @emotion/react */
import { Dispatch, useState } from "react";
import { buttonStyle, categoryStyle, disappear, inputContainerStyle, listStyle, optionsStyle } from "./style";
import useContextWrapper from "../../hooks/useContextWrapper";
import { CardIssuerContext } from "../../routes/Payments/CardInfoContextProvider";
import { CardPeriodInputsContext } from "../Form/FormRefContextProvider";

import { FormRenderOrderContext } from "../../routes/Payments";

const CARD_ISSUERS = ["BC카드", "신한카드", "카카오뱅크", "현대카드", "우리카드", "롯데카드", "하나카드", "국민카드"];

interface EventTargetWithValue extends EventTarget {
  value: CardIssuerCategory;
}

interface EventType extends React.MouseEvent<HTMLButtonElement> {
  target: EventTargetWithValue;
}

interface OptionBoxProps {
  setIsClicked: Dispatch<React.SetStateAction<boolean>>;
  setCardIssuer: Dispatch<React.SetStateAction<CardIssuer>>;
  setRenderOrder: Dispatch<React.SetStateAction<FormRenderOrder>>;
}

const OptionBox: React.FC<OptionBoxProps> = ({ setIsClicked, setCardIssuer, setRenderOrder }) => {
  const [ref] = useContextWrapper(CardPeriodInputsContext);

  const handleOptionClick = (e: EventType) => {
    e.preventDefault();
    const issuer = e.target.value! as CardIssuerCategory;
    setIsClicked(false);
    setCardIssuer((prev) => {
      const temp = { ...prev };
      temp.name = issuer;
      return temp;
    });
    setRenderOrder((prev) => {
      if (prev.index === 1) {
        return { step: "cardPeriod", index: 2 };
      }
      return prev;
    });

    ref.current?.focus();
  };

  return (
    <ul css={optionsStyle}>
      {CARD_ISSUERS.map((cardIssuer, index) => (
        <li key={index} css={listStyle}>
          <button css={categoryStyle} value={cardIssuer} onClick={(e: EventType) => handleOptionClick(e)}>
            {cardIssuer}
          </button>
        </li>
      ))}
    </ul>
  );
};

const CardIssuerInput = () => {
  const [isCLicked, setIsClicked] = useState(false);
  const [cardIssuer, setCardIssuer] = useContextWrapper(CardIssuerContext);
  const setRenderOrder = useContextWrapper(FormRenderOrderContext)[1];

  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    setIsClicked((prev) => !prev);
  };

  return (
    <div css={inputContainerStyle}>
      <input id="id-issuer-value" css={disappear} />
      <button css={buttonStyle} onClick={(e) => handleClick(e)}>
        <div>{cardIssuer.name ?? "카드사를 선택해주세요."}</div>
        <div>{isCLicked ? "🔼" : "🔽"}</div>
      </button>
      {isCLicked ? (
        <OptionBox setIsClicked={setIsClicked} setCardIssuer={setCardIssuer} setRenderOrder={setRenderOrder} />
      ) : null}
    </div>
  );
};

export default CardIssuerInput;
