import { css } from "@emotion/react";
import Button from "../components/common/Button/Button";
import Text from "../components/common/Text/Text";
import { useNavigate } from "react-router";
import { useLocation } from "react-router";

const CardRegistrationCompletePage = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/");
  };
  const location = useLocation();
  const cardState = location.state;

  return (
    <div css={AppStyle}>
      <img css={IconStyle} src={"check.svg"} />
      <div css={TextWrapper}>
        <Text text={`${cardState.uniqueNumber[0]}로 시작하는`} weight={"700"} size={"25px"} />
        <Text text={`${cardState.cardIssuer}가 등록되었어요.`} weight={"700"} size={"25px"} />
      </div>
      <Button text={"확인"} rounded={true} onClick={handleButtonClick} />
    </div>
  );
};

export default CardRegistrationCompletePage;

const AppStyle = css`
  width: 376px;
  height: 650px;
  padding: 20px 30px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  border-radius: 20px;
  position: relative;
`;

const IconStyle = css`
  width: 80px;
`;

const TextWrapper = css`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5px;
`;
