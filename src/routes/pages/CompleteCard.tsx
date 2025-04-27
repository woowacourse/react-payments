import { css } from "@emotion/react";
import Text from "../../components/Text/Text";
import Button from "../../components/Button/Button";
import { useLocation, useNavigate } from "react-router";

const CompleteCard = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { uniqueNumber, company } = state;

  return (
    <div css={ContainerStyle}>
      <img src="completeIcon.svg" alt="complete" />
      <Text type="complete" text={`${uniqueNumber}로 시작하는\n${company}가 등록되었어요.`} />
      <Button text="확인" onClick={() => navigate("/")} />
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
