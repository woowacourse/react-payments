import PropTypes from "prop-types";
import { HeaderWrapper } from "./style";

function Header({ headText, leftChild }) {
  return (
    <HeaderWrapper>
      <div>{leftChild}</div>
      <h1>{headText}</h1>
    </HeaderWrapper>
  );
}

Header.propTypes = {
  leftChild: PropTypes.node,
  headText: PropTypes.string,
};

export default Header;
