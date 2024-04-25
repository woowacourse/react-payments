import styled from 'styled-components';

interface SubmitButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

const CompletedButton = ({ onClick, children }: SubmitButtonProps) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

const StyledButton = styled.button`
  width: 100%;
  height: 52px;
  background-color: #333333;
  color: #f3f3f3;
  font-weight: 700;
  font-size: 16px;
  bottom: 0;
  transition: background-color 0.2s ease-in;

  &:hover {
    background-color: lightgray;
  }
`;

export default CompletedButton;
