import { MESSAGE } from "@/constants/message";
import { useLocation, useNavigate } from "react-router-dom";
import S from "./style";
import CheckConfirmIcon from "@/assets/ConfirmCheck.svg?react";
import BasicButton from "@/components/_common/BasicButton/BasicButton";
import { theme } from "@/style/theme";

const RegisterComfirmPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { startNumbers, cardType } = location.state;

  const onMoveRegisterPage = () => {
    navigate("/");
  };

  return (
    <S.ConfirmWrapper>
      <S.ConfirmCheckIconCircle>
        <CheckConfirmIcon />
      </S.ConfirmCheckIconCircle>
      <S.ConfirmMessageWrapper>
        <div>{MESSAGE.REGISTER_CONFIRM_NUMBERS(startNumbers)}</div>
        <div>{MESSAGE.REGISTER_CONFIRM_CARDTYPE(cardType)}</div>
      </S.ConfirmMessageWrapper>
      <BasicButton
        height={44}
        width={320}
        borderType={"round"}
        disabled={false}
        backgroundColor={theme.COLOR["grey-3"]}
        position="basic"
        onClick={onMoveRegisterPage}
      >
        확인
      </BasicButton>
    </S.ConfirmWrapper>
  );
};

export default RegisterComfirmPage;
