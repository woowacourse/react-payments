import styled from "styled-components";

const Input = styled.input`
  background-color: transparent;
  border: none;
  text-align: center;
  width: 100%;
  padding: 5px;
  color: ${(props) => props.color || "#04C09E"};
  font-size: 18px;
  font-weight: 500px;

  &[type="number"]::-webkit-outer-spin-button,
  &[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export { Input };
