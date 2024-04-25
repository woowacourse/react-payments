import { css } from "@emotion/react";

const SIZE: Record<NonNullable<SizePresetType>, "17%" | "43%" | "100%"> = {
  small: "17%",
  medium: "43%",
  large: "100%",
};

const HIGHLIGHT_COLOR = `#FF3D3D`;
const NORMAL_COLOR = `#ACACAC`;
const BACKGROUND_COLOR = "white";

export const inputStyle = (sizePreset: SizePresetType, isError: boolean = false) =>
  css({
    height: "25px",
    borderRadius: "2px",
    border: `solid 1px ${NORMAL_COLOR}`,
    padding: "8px",
    width: SIZE[sizePreset],
    marginTop: "10px",
    textTransform: "uppercase",
    "&:focus-visible": css({
      outlineColor: isError ? HIGHLIGHT_COLOR : NORMAL_COLOR,
    }),
  });

export const inputContainerStyle = css({
  position: "relative",
  width: "100%",
});

export const disappear = css({
  display: "none",
});

export const optionsStyle = css({
  width: "100%",
  position: "absolute",
  border: `1px solid ${NORMAL_COLOR}`,
  borderRadius: "5px",
  margin: "7px 0 7px",
});

export const buttonStyle = css({
  height: "43px",
  borderRadius: "2px",
  border: `1px solid ${NORMAL_COLOR}`,
  padding: "8px",
  width: "100%",
  textTransform: "uppercase",
  textAlign: "left",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const listStyle = css({
  width: "100%",
  height: "43px",
  textTransform: "uppercase",
  textAlign: "left",
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
  backgroundColor: BACKGROUND_COLOR,
  "& :hover": {
    backgroundColor: "#e3e3e3",
  },
});

export const categoryStyle = css({
  width: "100%",
  height: "100%",
  display: "flex",
  padding: "8px",
  alignItems: "center",
  justifyContent: "start",
  backgroundColor: BACKGROUND_COLOR,
  fontSize: "11px",
});
