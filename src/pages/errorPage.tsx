/** @jsxImportSource @emotion/react */

import Button from "../components/common/Button";
import WOOWA_LOGO from "../Images/woowa.png";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();

  const redirectHome = () => {
    navigate("/");
  };

  return (
    <div id="error-page" css={styledContainer}>
      <img src={WOOWA_LOGO} alt="" css={styledWoowaLogo} />
      <h1 css={styledTextBold}>Oops!</h1>
      <p css={styledTextCaption}>죄송합니다. 페이지를 찾을 수 없습니다.</p>
      <p css={styledTextCaption}>존재하지 않는 주소를 입력하셨거나</p>
      <p css={styledTextCaption}>
        요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다.
      </p>
      <Button onClickHandler={redirectHome}>홈으로 이동</Button>
    </div>
  );
}

const styledContainer = {
  width: "315px",

  display: "flex",
  flexDirection: "column" as const,
  justifyContent: "center",
  alignItems: "center",

  gap: "16px",
  margin: "auto",
  marginTop: "25%",
};

const styledWoowaLogo = {
  width: "200px",
};

const styledTextCaption = {
  fontSize: "12px",
};

const styledTextBold = {
  fontSize: "40px",
  fontWeight: "700",

  margin: "10px",
};
