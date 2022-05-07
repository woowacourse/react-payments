import PropTypes from "prop-types";
import { HeaderWrapper } from "./style";

function Header({ headText, leftChild, rightChild }) {
  return (
    <HeaderWrapper>
      {leftChild && <div>{leftChild}</div>}
      <h1>{headText}</h1>
      {rightChild && <div>{rightChild}</div>}
    </HeaderWrapper>
  );
}

Header.propTypes = {
  leftChild: PropTypes.node,
  rightChild: PropTypes.node,
  headText: PropTypes.string,
};

export default Header;
