import { CARD_LIST } from "constant";
import ColorBox from "../ColorBox";
import { PaletteWrapper } from "./style";

function Palette({ handleSelectCompany }) {
  return (
    <PaletteWrapper>
      {CARD_LIST.map(({ color, name }) => (
        <ColorBox
          key={color}
          color={color}
          name={name}
          onClick={() => handleSelectCompany(color, name)}
        />
      ))}
    </PaletteWrapper>
  );
}

export default Palette;
