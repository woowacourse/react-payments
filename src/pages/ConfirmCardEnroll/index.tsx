import { useLocation, useNavigate } from "react-router-dom";
import confirmImg from "../../static/confirm.png";
import { TitleText } from "../../components/atoms/text";
import Button from "../../components/atoms/Button/Button";
import * as S from "./style";

export default function ConfirmCardEnroll() {
  const navigate = useNavigate();
  const {
    state: { cardCompany, firstCardNumber },
  } = useLocation();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <S.ConfirmPageWrapper id="confirmCardEnroll">
      <S.ConfirmPageContainer>
        <S.ConfirmImgBox>
          <S.ConfirmImg src={confirmImg} />
        </S.ConfirmImgBox>
        <S.TextWrapper>
          <TitleText>{firstCardNumber}로 시작하는</TitleText>
          <TitleText>{cardCompany}가 등록되었어요.</TitleText>
        </S.TextWrapper>
        <Button onClick={handleClick} style={{ borderRadius: "5px" }}>
          확인
        </Button>
      </S.ConfirmPageContainer>
    </S.ConfirmPageWrapper>
  );
}
