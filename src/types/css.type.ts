interface FlexWrapperType {
  width: string;
  height: string;
  flexDirection: flexDirection;
  justifyContent: justifyContent;
  alignItems: alignItems;
  gap: string;
}

type textAlign = "left" | "center" | "right";
type buttonType = "button" | "submit" | "reset";
type inputType = "text" | "password" | "number";
type flexDirection = "row" | "column" | "unset";
type justifyContent =
  | "flex-start"
  | "center"
  | "flex-end"
  | "normal"
  | "space-between"
  | "space-around"
  | "space-evenly"
  | "stretch"
  | "unset";
type alignItems =
  | "flex-start"
  | "center"
  | "flex-end"
  | "normal"
  | "baseline"
  | "stretch"
  | "unset";

export type {
  FlexWrapperType,
  textAlign,
  buttonType,
  inputType,
  flexDirection,
  justifyContent,
  alignItems,
};
