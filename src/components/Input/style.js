import styled from "styled-components";

const Input = styled.input`
  background-color: transparent;
  border: none;
  text-align: center;
  width: 100%;
  padding: 5px;
  color: ${(props) => props.color || props.theme.colors.MINT};
  font-size: 18px;
  font-weight: 500px;

  :focus {
    outline: none;
  }

  &[type="number"]::-webkit-outer-spin-button,
  &[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export { Input };
