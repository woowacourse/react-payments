import styled from "styled-components";

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 45px;
  border-radius: 7px;

  background: ${(props) => props.background || "#ecebf1"};
  border: ${(props) => props.border || "none"};
  width: ${(props) => props.size || 100}%;
`;

export { InputWrapper };
