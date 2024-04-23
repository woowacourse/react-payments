import { css } from "@emotion/react";

const SIZE: Record<NonNullable<SizePresetType>, "17%" | "43%" | "100%"> = {
  small: "17%",
  medium: "43%",
  large: "100%",
};

const HIGHLIGHT_COLOR = `#FF3D3D`;
const NORMAL_COLOR = `#ACACAC`;

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
