import styled from 'styled-components';

interface ButtonWrapperProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode | string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function TransParentButton({ children, onClick }: ButtonWrapperProps) {
  return (
    <StyledButton type="button" onClick={onClick}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  border: none;
  background-color: transparent;
`;

export default TransParentButton;
