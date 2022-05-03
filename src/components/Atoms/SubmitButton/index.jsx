import styled from 'styled-components';

const Button = styled.button`
  display: ${props => (props.hidden ? 'none' : 'block')};
  width: ${props => props.width};
  height: ${props => props.height};
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  text-align: right;
  color: #04c09e;
  background-color: white;
  cursor: pointer;

  &:hover {
    color: #039f82;
  }
`;

function SubmitButton({ width, height, hidden, children }) {
  return (
    <Button type="submit" width={width} height={height} hidden={hidden}>
      {children}
    </Button>
  );
}

export default SubmitButton;
