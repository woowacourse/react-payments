/** @jsxImportSource @emotion/react */

const styledBasicButton = {
  height: "44px",
  width: "100%",
  backgroundColor: "#333333",
  border: "none",
  borderRadius: "5px",

  color: "#FFFFFF",
  fontSize: "15px",
  fontWeight: "700",

  "&:hover": {
    backgroundColor: "black",
  },
};

const styledFullScreenButton = {
  height: "52px",
  width: "100%",
  border: "none",
  backgroundColor: "#333333",

  color: "#F3F3F3",
  fontSize: "16px",
  fontWeight: "700",

  "&:hover": {
    backgroundColor: "black",
  },
};

const buttonStyleMatcher = {
  basic: styledBasicButton,
  fullScreen: styledFullScreenButton,
};

export interface ButtonProps {
  onClickHandler: React.MouseEventHandler<HTMLButtonElement>;
  buttonType?: "basic" | "fullScreen";
}

export default function Button({
  onClickHandler,
  children,
  buttonType = "basic",
}: React.PropsWithChildren<ButtonProps>) {
  return (
    <button css={buttonStyleMatcher[buttonType]} onClick={onClickHandler}>
      {children}
    </button>
  );
}
