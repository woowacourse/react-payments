import PropTypes from "prop-types";
import { ColorBoxWrapper, ColorCircle } from "./style";

function ColorBox({ color, name }) {
  return (
    <ColorBoxWrapper>
      <ColorCircle color={color}></ColorCircle>
      <div>{name}</div>
    </ColorBoxWrapper>
  );
}

ColorBox.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string,
};

export default ColorBox;
