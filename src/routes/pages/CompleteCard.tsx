import { css } from "@emotion/react";
import Text from "../../components/Text/Text";
import Button from "../../components/Button/Button";

const CompleteCard = () => {
  return (
    <div css={ContainerStyle}>
      <img src="completeIcon.svg" alt="complete" />
      <Text type="complete" text={"5511로 시작하는\nBC카드가 등록되었어요."} />
      <Button text="확인" />
    </div>
  );
};

export default CompleteCard;

const ContainerStyle = css`
  box-sizing: border-box;
  height: calc(100% - 70px);
  position: relative;
  width: 400px;
  background-color: #ffffff;
  padding: 200px 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 45px;
  border-radius: 20px;
`;
