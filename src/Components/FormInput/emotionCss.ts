import { css } from "@emotion/react";

const SIZE: Record<NonNullable<SizePresetType>, "17%" | "43%" | "100%"> = {
  small: "17%",
  medium: "43%",
  large: "100%",
};

export const inputStyle = (sizePreset: SizePresetType, isError: boolean = false) =>
  css({
    height: "25px",
    borderRadius: "2px",
    border: "solid 1px #ACACAC",
    padding: "8px",
    width: SIZE[sizePreset],
    marginTop: "10px",
    textTransform: "uppercase",
    "&:focus-visible": css({
      outlineColor: isError ? "#FF3D3D" : "#ACACAC",
    }),
  });
