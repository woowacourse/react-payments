import styled from "styled-components";

interface IButtonProps {
  type: "button" | "submit" | "reset";
  onClick: () => void;
  position: string;
  children: any;
  isSvg?: boolean;
}

const StyledButton = styled.button`
  width: ${(props: IButtonProps) => (props.isSvg ? "30px" : "50px")};
  height: 30px;

  border: none;
  background-color: inherit;
  opacity: inherit;

  color: ${(props: IButtonProps) => (props.isSvg ? "#464646" : "#04c09e")};
  font-size: 16px;
  line-height: 16px;
  font-weight: bold;

  position: ${(props: IButtonProps) => props.position};
  right: 20px;
  bottom: 25px;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

const StyledImg = styled.img`
  width: 25px;
`;

export default function Button({
  type,
  onClick,
  position,
  children,
  isSvg,
}: IButtonProps) {
  return (
    <StyledButton
      onClick={onClick}
      type={type}
      position={position}
      isSvg={isSvg}
    >
      {isSvg ? <StyledImg src={children} /> : children}
    </StyledButton>
  );
}

Button.defaultProps = {
  position: "absolute",
};
