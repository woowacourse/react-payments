import { useNavigate } from "react-router-dom";

import FormResultPageLayout from "../components/layout/FormResultPageLayout";
import { CARD_APP_PATH } from "../constants/card-app";

import { errorCard } from "../assets/image";
import S from "./styles/common";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(CARD_APP_PATH.new);
  };

  return (
    <FormResultPageLayout>
      <S.ErrorCardImage src={errorCard} />

      <S.TextContainer>
        <S.Title>길을 잃으셨나요?</S.Title>
        <S.Caption>현재 페이지는 제공하지 않는 페이지에요.</S.Caption>
      </S.TextContainer>

      <S.Button onClick={onClick}>메인 페이지로 이동하기</S.Button>
    </FormResultPageLayout>
  );
};

export default NotFoundPage;
