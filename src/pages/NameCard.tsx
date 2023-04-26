import Header from "../components/common/Header";
import Page from "../components/common/Page";
import styled from "styled-components";
import Card from "../components/Card";
import { getLocalStorage } from "../utils";
import { CardType } from "../types";
import { ROUTER_PATH } from "../router/path";

const NameCard = () => {
  return (
    <Page>
      <h1>카드 등록이 완료되었습니다.</h1>
    </Page>
  );
};

const CardWrapper = styled.div`
  margin-bottom: 46px;
`;

const EmptyCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  color: #575757;
  font-size: 30px;

  width: 208px;
  height: 123px;

  background: #e5e5e5;
  border-radius: 5px;
  text-decoration: none;

  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);

  :active {
    transform: scale(0.98);
  }
`;

export default NameCard;
