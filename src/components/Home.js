import React from "react";
import { PAGE } from "../constants";

function Home(props) {
  const { routeTo, cardList } = props;

  return (
    <>
      <div>
        <p>준비중입니다. - home</p>
        <button onClick={routeTo[PAGE.CARD_ADDITION.ID]}>
          카드 추가 하러 가기
        </button>
      </div>
      <ul>
        {cardList.map(({ cardDescription, cardNumbers }) => (
          <li key={cardNumbers.join("")}>{cardDescription}</li>
        ))}
      </ul>
    </>
  );
}

export default Home;
