/** @jsxImportSource @emotion/react */

import { useLocation, useNavigate } from "react-router-dom";

import Button from "../components/common/Button";
import CHECK from "../Images/check.svg";
import { useEffect } from "react";

interface CardInfo {
  cardNumber: string;
  cardIssuer: string;
}

export default function CompletedPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const cardInfo = location.state as CardInfo | null;

  useEffect(() => {
    if (!cardInfo) {
      navigate("/404");
    }
  }, [cardInfo, navigate]);

  return (
    <div css={styledCompletedContainer}>
      <div>
        <img src={CHECK} alt="" />
      </div>
      <div css={styledFlexWithCenter}>
        <p css={styledTextBold}>{cardInfo?.cardNumber}로 시작하는</p>
        <p css={styledTextBold}>{cardInfo?.cardIssuer}가 등록되었어요.</p>
      </div>
      <Button
        onClickHandler={() => {
          navigate("/");
        }}
      >
        확인
      </Button>
    </div>
  );
}

const styledFlexWithCenter = {
  display: "flex",
  flexDirection: "column" as const,
  justifyContent: "center",
  alignItems: "center",
};

const styledCompletedContainer = {
  width: "315px",
  ...styledFlexWithCenter,
  gap: "16px",
  margin: "auto",
  marginTop: "25%",
};

const styledTextBold = {
  fontSize: "25px",
  fontWeight: "700",
  lineHeight: "36.2px",
};
