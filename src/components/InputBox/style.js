import styled from "styled-components";

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 45px;
  width: 100%;
  outline: 2px solid transparent;
  outline-offset: 2px;
  border-radius: 0.25rem;

  background: ${(props) => props.background || "#ecebf1"};
  border: ${(props) => props.border || "none"};
  width: ${(props) => props.size || 100}%;
`;

export { InputWrapper };
