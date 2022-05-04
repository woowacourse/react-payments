import { CARD_LIST } from "constant";
import ColorBox from "../ColorBox";
import { PaletteWrapper } from "./style";

function Palette() {
  return (
    <PaletteWrapper>
      {CARD_LIST.map(({ color, name }) => (
        <ColorBox key={color} color={color} name={name} />
      ))}
    </PaletteWrapper>
  );
}

export default Palette;
