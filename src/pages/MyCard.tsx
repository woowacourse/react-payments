import Header from "../components/common/Header";
import Page from "../components/common/Page";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MyCard = () => {
  return (
    <Page>
      <Header title="보유카드" isBack={false} />
      <Link to="/AddCard" style={{ textDecoration: "none" }}>
        <CardWrapper>+</CardWrapper>
      </Link>
    </Page>
  );
};

const CardWrapper = styled.div`
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
`;

export default MyCard;
