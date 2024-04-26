import { css } from "@emotion/react";

const boxBackgroundColor = "#333333";

const flexAlign = {
  display: "flex",
  alignContent: "center",
  justifyContent: "center",
};

export const containerStyle = css({
  height: "100vh",
  ...flexAlign,
});

export const boxStyle = css({
  flexDirection: "column",
  gap: "25px",
  flexWrap: "wrap",
  ...flexAlign,
});

export const checkImageContainerStyle = css({
  ...flexAlign,
});

export const checkImageWrapperStyle = css({
  width: "76px",
  height: "76px",
  backgroundColor: boxBackgroundColor,
  borderRadius: "100%",
  flexWrap: "wrap",
  ...flexAlign,
});

export const checkImageStyle = css({
  width: "35px",
  height: "25px",
});

export const descriptionStyle = css({
  fontSize: "25px",
  fontWeight: "700",
  textAlign: "center",
  padding: "20px ",
});

export const arrivalButtonStyle = css({
  width: "320px",
  height: "44px",
  backgroundColor: boxBackgroundColor,
  flexWrap: "wrap",
  borderRadius: "5px",
  color: "white",
  fontSize: "15px",
  ...flexAlign,
});
