import { css } from "@emotion/react";

import CardList from "../components/cardList/CardList/CardList";

const CardListPage = () => {
  return (
    <main css={pageStyle}>
      <CardList />
    </main>
  );
};

export default CardListPage;

const pageStyle = css`
  display: flex;
  min-height: 100vh;
  width: 100vw;
  align-items: flex-start;
  justify-content: center;
  padding-top: 60px;
  background-color: #f5f5f5;
`;
