import styled from "styled-components";

const Style = {
  Input: styled.input`
    border: none;
    text-align: center;
    background: inherit;

    width: ${(props) => props.theme.width};
    font-size: ${(props) => props.theme.size};
    letter-spacing: ${(props) => props.theme.spacing};
  `,
};

Style.Input.defaultProps = {
  theme: {
    width: "",
    size: "",
    spacing: "0px",
  },
};
export default Style;
