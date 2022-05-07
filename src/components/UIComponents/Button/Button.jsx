import styled from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.button`
  width: ${(props) => (props.isSvg ? "30px" : "50px")};
  height: 30px;

  border: none;
  background-color: inherit;
  opacity: inherit;

  color: ${(props) => (props.isSvg ? "#464646" : "#04c09e")};
  font-size: 16px;
  line-height: 16px;
  font-weight: bold;

  position: ${(props) => props.position};
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

export default function Button({ type, onClick, position, children, isSvg }) {
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

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  position: "absolute",
};
