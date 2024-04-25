/** @jsxImportSource @emotion/react */

import { useLocation, useNavigate } from "react-router-dom";
import Button from "../common/Button/Button";
import checkImage from "../../assets/images/checkImage.png";
import {
  CheckLogo,
  mainStyle,
  textStyle,
} from "./CardEnrollmentCompleteView.styles";

const CardEnrollmentCompleteView: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cardCompany, cardFirstPartNumbers } = location.state;

  const handleOnClick = () => {
    navigate("/");
  };

  return (
    <article css={mainStyle}>
      <CheckLogo>
        <img src={checkImage} alt="" />
      </CheckLogo>

      <p css={textStyle}>
        {cardFirstPartNumbers}로 시작하는 <br />
        {cardCompany}가 등록되었어요.
      </p>

      <Button onClick={handleOnClick}>확인</Button>
    </article>
  );
};

export default CardEnrollmentCompleteView;
