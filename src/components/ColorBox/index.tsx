import { ColorBoxWrapper, ColorCircle } from "./style";

interface ColorBoxProps {
  color: string;
  name: string;
  onClick: () => void;
}

function ColorBox({ color, name, onClick }: ColorBoxProps) {
  return (
    <ColorBoxWrapper onClick={onClick}>
      <ColorCircle color={color}></ColorCircle>
      <div>{name}</div>
    </ColorBoxWrapper>
  );
}

export default ColorBox;
