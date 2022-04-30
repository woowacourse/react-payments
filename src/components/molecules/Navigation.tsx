import { css } from "@emotion/react";
import React from "react";
import BackButton from "../atoms/BackButton";
import PageTitle from "../atoms/PageTitle";

const style = css({
  display: "flex",
  alignItems: "center",
  marginBottom: "25px",
});

function Navigation() {
  return (
    <div css={style}>
      <BackButton />
      <PageTitle>카드추가</PageTitle>
    </div>
  );
}

export default Navigation;
