import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const CardStyle = css({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  width: "212px",
  height: "132px",
  backgroundColor: "#333333",
  color: "#fff",
  borderRadius: "4px",
  boxShadow: "3px 3px 5px 0px #00000040",
  padding: "12px 8px",
});

export const logoDiv = css({
  display: "flex",
  justifyContent: "space-between",
});

export const cardNumbersStyle = css({
  display: "flex",
  gap: "5px",
});

export const cardNumberStyle = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "3px",
  width: "38px",
  height: "29px",
});

export const Password = styled.div`
  width: 4px;
  height: 4px;
  background: #ffffff;
  border-radius: 100%;
`;
