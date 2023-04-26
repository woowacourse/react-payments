import styled from 'styled-components';

interface ButtonProps {
  children?: string;
  onClick?: (value: any) => void;
}

const NextButton = (props: ButtonProps) => {
  const { children, onClick } = props;
  return <StyledButton children={children} onClick={onClick}></StyledButton>;
};

export const StyledButton = styled.button`
  display: flex;
  margin: 24px 0 24px auto;
  padding: 10px 16px;
  color: var(--darken-color);
  border: 1px solid var(--darken-color);
  border-radius: 8px;
  font-size: 14px;
  font-weight: 700;
  background: none;
  text-align: center;
  cursor: pointer;
`;

export default NextButton;
