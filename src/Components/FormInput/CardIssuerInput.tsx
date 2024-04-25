/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Dispatch, useEffect, useState } from "react";

const inputContainerStyle = css({
  position: "relative",
});

const inputStyle = css({
  display: "none",
});

const CARD_ISSUERS = ["BC카드", "신한카드", "카카오뱅크", "현대카드", "우리카드", "롯데카드", "하나카드", "국민카드"];

interface EventTargetWithValue extends EventTarget {
  value: CardIssuerCategory;
}

interface EventType extends React.MouseEvent<HTMLButtonElement> {
  target: EventTargetWithValue;
}

const OptionBox = ({ setIsClicked }: { setIsClicked: Dispatch<React.SetStateAction<boolean>> }) => {
  const handleOptionClick = (e: EventType) => {
    e.preventDefault();
    const issuer = e.target.value! as CardIssuerCategory;
    console.log(issuer);
    setIsClicked(false);
    //TODO: 카드사 등록
  };

  useEffect(() => {
    //TODO: 요소 밖 클릭시 setIsClicked false값 넣기. 클린업 함수로 이벤트 삭제도 해주기.
  }, []);

  return (
    <ul>
      {CARD_ISSUERS.map((cardIssuer, index) => (
        <li key={index}>
          <button value={cardIssuer} onClick={(e: EventType) => handleOptionClick(e)}>
            {cardIssuer}
          </button>
        </li>
      ))}
    </ul>
  );
};

const CardIssuerInput = () => {
  const [isCLicked, setIsClicked] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    setIsClicked((prev) => !prev);
  };

  return (
    <div css={inputContainerStyle}>
      <input id="id-issuer-value" css={inputStyle} />
      <button onClick={(e) => handleClick(e)}>입력이 잘 될까요?</button>
      {isCLicked ? <OptionBox setIsClicked={setIsClicked} /> : null}
    </div>
  );
};

export default CardIssuerInput;
