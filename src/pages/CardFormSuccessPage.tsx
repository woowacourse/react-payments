import { useNavigate } from "react-router-dom";
import useCardAddForm from "../hooks/useCardAddForm";

import S from "./styles/common";

import FormResultPageLayout from "../components/layout/FormResultPageLayout";

import { CARD_APP_PATH } from "../constants/card-app";

import { checkImage, errorCard } from "../assets/image";

const CardFormSuccessPage = () => {
  const navigate = useNavigate();

  const { formState, dispatch, isFormInputCompleted } = useCardAddForm();

  const { first } = formState.cardNumbers.value;
  const { cardCompany } = formState.cardCompany.value;

  const onClick = () => {
    dispatch({ type: "RESET" });

    navigate(CARD_APP_PATH.new);
  };

  if (!isFormInputCompleted) {
    return (
      <FormResultPageLayout>
        <S.ErrorCardImage src={errorCard} />

        <S.TextContainer>
          <S.Title>입력이 완료되지 않았어요</S.Title>
          <S.Caption>모든 입력을 완료해야 카드를 등록할 수 있어요.</S.Caption>
        </S.TextContainer>

        <S.Button onClick={onClick}>다시 입력하러 가기</S.Button>
      </FormResultPageLayout>
    );
  }

  return (
    <FormResultPageLayout>
      <S.CheckImageContainer>
        <S.CheckImage src={checkImage} />
      </S.CheckImageContainer>

      <S.TextContainer>
        <S.Title>{first}로 시작하는</S.Title>
        <S.Title>{cardCompany}가 등록되었어요.</S.Title>
      </S.TextContainer>

      <S.Button onClick={onClick}>확인</S.Button>
    </FormResultPageLayout>
  );
};

export default CardFormSuccessPage;
