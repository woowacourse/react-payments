import { css } from "@emotion/react";

export const style = css({
  background: "#333",
  width: "212px",
  height: "132px",
  boxShadow: "3px 3px 5px 0px #00000040",
  borderRadius: "4px",
  padding: "8px 17px",
  color: "#fff",
  fontSize: "20px",
  fontWeight: "500",
  display: "flex",
  flexDirection: "column",
  gap: "14px",
  fontFamily: "Roboto",
  marginBottom: "20px",
});

export const logoStyle = css({
  width: "36px",
  height: "22px",
  background: "#DDCD78",
  borderRadius: "2px",
});

export const rowStyle = css({
  display: "flex",
  justifyContent: "space-between",
  gap: "10px",
});

export const width42 = css({
  width: "42px",
});

export const cardInfoStyle = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
  & > div {
    height: 24px;
  }
`;

export const periodRowStyle = css({
  display: "flex",
  gap: "5px",
});

export const periodStyle = css({
  width: "20px",
});
