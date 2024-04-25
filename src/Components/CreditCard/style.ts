import { css } from "@emotion/react";

const CardBackgroundColor: Record<CardIssuerCategory, string> = {
  BC카드: "#F04651",
  신한카드: "#0046FF",
  카카오뱅크: "#FFE600",
  현대카드: "#000000",
  우리카드: "#007BC8",
  롯데카드: "#ED1C24",
  하나카드: "#009490",
  국민카드: "#6A6056",
};

export const cardPreviewStyle = (cardIssuer?: CardIssuerCategory) =>
  css({
    background: cardIssuer ? CardBackgroundColor[cardIssuer] : "#333",
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
    margin: "20px",
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
