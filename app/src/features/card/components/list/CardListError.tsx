import styled from "@emotion/styled";
import WarningContainerSVG from "../../assets/warning-container.svg";
import WarningSVG from "../../assets/warning.svg";
import { Link } from "react-router";

export default function CardListError() {
  return (
    <ErrorContent>
      <WarningSVGContainer>
        <img src={WarningContainerSVG} alt="" width={64} height={64} />
        <img src={WarningSVG} alt="" style={{ position: "absolute" }} />
      </WarningSVGContainer>
      <h3>카드 목록을 불러올 수 없어요</h3>
      <p>잠시 후 다시 시도해 주세요.</p>
      <ReLoadLink to="/card">다시 시도</ReLoadLink>
    </ErrorContent>
  );
}

const ErrorContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  h3 {
    font-size: 20px;
    font-weight: 700;
    color: #353c49;
    margin-top: 16px;
    margin-bottom: 0;
  }
  p {
    font-size: 12px;
    color: #8c8c8c;
    margin: 16px 0;
  }
`;

const WarningSVGContainer = styled.div`
  position: relative;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ReLoadLink = styled(Link)`
  display: block;
  width: 100%;
  background-color: #333333;
  padding: 20px 0;
  color: #f3f3f3;
  font-size: 16px;
  font-weight: 700;
  border-radius: 5px;
  border: none;
  text-align: center;
  text-decoration: none;
  box-sizing: border-box;
`;
