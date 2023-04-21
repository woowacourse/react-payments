import styled from "styled-components";

const InputContainer = styled.div<{ width: string; border?: string }>`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  background-color: #ecebf1;

  height: 45px;
  width: ${({ width }) => width};

  border: ${({ border }) => (border ? border : "none")};
  border-radius: 7px;
  padding: 0 12px;
  margin-top: 3px;

  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0em;

  opacity: 0.9;
  transition: all 0.3s ease;
`;

export default InputContainer;
