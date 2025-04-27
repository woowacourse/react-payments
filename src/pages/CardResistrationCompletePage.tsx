import { css } from "@emotion/react";
import Button from "../components/common/Button/Button";
import Text from "../components/common/Text/Text";
import { useNavigate } from "react-router";

const CardResistrationCompletePage = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/");
  };
  return (
    <div css={AppStyle}>
      <img css={IconStyle} src={"check.svg"} />
      <div css={TextWrapper}>
        <Text text={"5511로 시작하는"} weight={"700"} size={"30px"} />
        <Text text={"BC카드가 등록되었어요."} weight={"700"} size={"30px"} />
      </div>
      <Button text={"확인"} rounded={true} onClick={handleButtonClick} />
    </div>
  );
};

export default CardResistrationCompletePage;

const AppStyle = css`
  width: 376px;
  height: 590px;
  background-color: #ffffff;
  padding:10px; 8px 20px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 45px;
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
  gap: 10px;
`;
