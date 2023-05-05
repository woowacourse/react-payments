import styled from "styled-components";

const InputContainer = styled.div<{ width: string }>`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  background-color: #ecebf1;

  height: 45px;
  width: ${(props) => props.width};

  border: 0;
  border-radius: 7px;
  padding: 0 12px;
  margin-top: 3px;

  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0em;
`;

export default InputContainer;
