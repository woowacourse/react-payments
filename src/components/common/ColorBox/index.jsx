import PropTypes from "prop-types";
import { ColorBoxWrapper, ColorCircle } from "./style";

function ColorBox({ color, name, onClick }) {
  return (
    <ColorBoxWrapper onClick={onClick}>
      <ColorCircle color={color}></ColorCircle>
      <div>{name}</div>
    </ColorBoxWrapper>
  );
}

ColorBox.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string,
  onClick: PropTypes.func,
};

export default ColorBox;
