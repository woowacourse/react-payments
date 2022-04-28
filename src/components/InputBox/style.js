import styled from "styled-components";

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 45px;
  border-radius: 7px;

  background: ${(props) =>
    props.background || (props.error && "#fcdfef") || "#ecebf1"};
  border: ${(props) =>
    props.border || (props.error && "solid 2px #E36DB0") || "none"};
  width: ${(props) => props.size || 100}%;
`;

export { InputWrapper };
