import styled from "styled-components";
import { ROUTER_PATH } from "../router/path";
import { useNavigate } from "react-router-dom";
import { getEmptyCard } from "../utils/card";
import { Button, Card, Page } from "../components";

const NameCard = () => {
  const navigate = useNavigate();
  const card = getEmptyCard();

  return (
    <Page>
      <TitleWrapper>카드 등록이 완료되었습니다.</TitleWrapper>
      <Card {...card} />
      <NameInputWrapper>
        <NameInput />
      </NameInputWrapper>
      <Button
        text="확인"
        type="button"
        onClick={() => navigate(ROUTER_PATH.MyCard)}
      />
    </Page>
  );
};

const TitleWrapper = styled.h3`
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 40px;
`;

const NameInputWrapper = styled.div`
  display: flex;
  height: 280px;
  align-items: center;
  text-align: center;
`;

const NameInput = styled.input`
  width: 50vw;
  height: 30px;
  text-align: center;
  border: none;

  font-size: 18px;

  border-bottom: 1.5px solid #737373;
  outline: none;

  &:focus {
    border-bottom: 1.5px solid darkblue;
  }
`;

export default NameCard;
