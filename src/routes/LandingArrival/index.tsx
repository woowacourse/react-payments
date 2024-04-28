/** @jsxImportSource @emotion/react */
import { useLocation, useNavigate } from "react-router-dom";
import checkImage from "../../assets/checkImage.png";
import {
  arrivalButtonStyle,
  boxStyle,
  checkImageContainerStyle,
  checkImageStyle,
  checkImageWrapperStyle,
  containerStyle,
  descriptionStyle,
} from "./style";

const LandingArrival = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { firstNumbers, issuer } = location.state;

  if (!firstNumbers && !issuer) {
    //TODO: error page handling
    return <div>something wrong</div>;
  }

  return (
    <div css={containerStyle}>
      <div css={boxStyle}>
        <div css={checkImageContainerStyle}>
          <div css={checkImageWrapperStyle}>
            <img src={checkImage} css={checkImageStyle} />
          </div>
        </div>
        <div css={descriptionStyle}>
          <div>{firstNumbers}로 시작하는</div>
          <div>{issuer}가 등록되었어요.</div>
        </div>
        <button onClick={() => navigate("/")} css={arrivalButtonStyle}>
          확인
        </button>
      </div>
    </div>
  );
};

export default LandingArrival;
