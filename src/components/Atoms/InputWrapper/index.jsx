import styled from 'styled-components';

const Wrapper = styled.div`
  display: inline-block;
  padding: 10px 0;
  border-radius: 7px;
  background-color: #ecebf1;
`;

function InputWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default InputWrapper;
