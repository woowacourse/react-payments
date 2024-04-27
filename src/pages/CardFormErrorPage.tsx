import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import S from "./styles/common";

import { CARD_APP_PATH } from "../constants/card-app";
import FormResultPageLayout from "../components/layout/FormResultPageLayout";

import { errorCard } from "../assets/image";

const CardFormErrorPage = () => {
  const navigate = useNavigate();

  const onButtonClick = () => {
    navigate(CARD_APP_PATH.new);
  };

  return (
    <FormResultPageLayout>
      <ErrorCardImage src={errorCard} />

      <S.TextContainer>
        <S.Title>입력이 완료되지 않았어요.</S.Title>
        <S.Caption>모든 입력을 완료해야 카드를 생성할 수 있어요.</S.Caption>
      </S.TextContainer>

      <S.Button onClick={onButtonClick}>다시 입력하러 가기</S.Button>
    </FormResultPageLayout>
  );
};

export default CardFormErrorPage;

const ErrorCardImage = styled.img`
  height: 180px;
  min-height: 180px;
  width: 212px;
`;
