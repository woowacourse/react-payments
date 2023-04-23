import styled from "styled-components";

const Style = {
  InputSection: styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    width: ${(props) => props.theme.inputSectionWidth};
    height: 6vh;

    border-radius: 7px;

    background: #ecebf1;
  `,

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
    inputSectionWidth: "",
    width: "",
    size: "",
    spacing: "0px",
  },
};
export default Style;
