/** @jsxImportSource @emotion/react */
import { useNavigate, useParams } from "react-router-dom";
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
  const { cardNumbers, cardIssuer } = useParams();
  const navigate = useNavigate();

  if (!cardNumbers && !cardIssuer) {
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
          <div>{cardNumbers}로 시작하는</div>
          <div>{cardIssuer}가 등록되었어요.</div>
        </div>
        <button onClick={() => navigate("/")} css={arrivalButtonStyle}>
          확인
        </button>
      </div>
    </div>
  );
};

export default LandingArrival;
