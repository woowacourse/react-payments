import styled from 'styled-components';

export const Input = styled.input`
  font-weight: 500;
  font-size: 17px;
  line-height: 21px;
  text-align: center;
`;

export const BlockInput = styled(Input)`
  height: 45px;
  padding: 12px;
  background-color: #ecebf1;
  border-radius: 7px;
  color: #04c09e;

  &:focus {
    outline-color: ${props => (props.isValid ? '#04c09e' : 'red')};
  }

  ${props => props.style}
`;

export const UnderlineInput = styled(Input)`
  padding: 0 0 6px;
  width: 241px;
  background-color: #fff;
  border-bottom: 1.5px solid #737373;
  color: #383838;
  border-radius: 0;

  &:focus {
    outline: none;
  }

  ${props => props.style}
`;
