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
  const { params } = useParams();
  const navigate = useNavigate();
  console.log(params);

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div css={containerStyle}>
      <div css={boxStyle}>
        <div css={checkImageContainerStyle}>
          <div css={checkImageWrapperStyle}>
            <img src={checkImage} css={checkImageStyle} />
          </div>
        </div>
        <div css={descriptionStyle}>
          <div>{}로 시작하는</div>
          <div>{}등록되었어요.</div>
        </div>
        <button onClick={handleClick} css={arrivalButtonStyle}>
          확인
        </button>
      </div>
    </div>
  );
};

export default LandingArrival;
